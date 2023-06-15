const express = require("express");
const router = express.Router();
const pool = require("../config/dbConfig");

router.post("/", async function (req, res) {
  try {
    const { user_id, hotel_id, room_id, booking_date } = req.body;
    const new_booking = await pool.query(
      "INSERT INTO bookinginfo (user_id,hotel_id,room_id,booking_date) VALUES($1, $2, $3 , $4) RETURNING *",
      [user_id, hotel_id, room_id, booking_date]
    );
    res.json(new_booking.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const booking = await pool.query(
      "SELECT * FROM bookinginfo WHERE user_id=$1 ",
      [id]
    );
    res.json(booking.rows);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;

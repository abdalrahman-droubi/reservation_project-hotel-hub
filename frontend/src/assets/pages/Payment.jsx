import React, { useState } from "react";
import { useEffect } from "react";
import paymentImg from "../images/hotel4.webp";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Payment = (props) => {
  const [card_name, setCardName] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [expiration_date, setExpirationDate] = useState("");
  const [security_code, setSecurityCode] = useState("");
  const [roomPayInfo, setroomPayInfo] = useState([]);
  const [hotelId, setHotelId] = useState("");
  const [pcardnumber, setCardnum] = useState("pvalidate");
  const [pcvc, setCardCVC] = useState("pvalidate");
  const [pholder, setholder] = useState("pvalidate");
  const [startDate, setStartDate] = useState(1659312000000);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };
  const handleSecurityCodeChange = (e) => {
    setSecurityCode(e.target.value);
  };

  function cardNumber(string) {
    let pattern = /^[0-9]{14}$/;
    return pattern.test(string);
  }

  function cardCVC(string) {
    let pattern = /^[0-9]{3}$/;
    return pattern.test(string);
  }

  function nameHolder(string) {
    let pattern = /^[a-zA-Z\s]*$/;
    return pattern.test(string);
  }

  //
  useEffect(() => {
    axios
      .get(`http://localhost:5500/rooms/payment/${id}`)
      .then((response) => {
        setroomPayInfo(response.data);
        setHotelId(response.data[0].hotel_id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    //
    if (!cardNumber(card_number)) {
      setCardnum("pWrong");
    }
    if (!cardCVC(security_code)) {
      setCardCVC("pWrong");
    }
    if (!nameHolder(card_name)) {
      setholder("pWrong");
    }
    //
    if (
      cardNumber(card_number) &&
      cardCVC(security_code) &&
      nameHolder(card_name)
    ) {
      axios
        .post("http://localhost:5500/payment", {
          user_id: props.userid,
          card_name: card_name,
          card_number: card_number,
          expiration_date: expiration_date,
          security_code: security_code,
        })
        .then(function (response) { })
        .catch(function (error) {
          console.log(error.message);
        });
      axios
        .post("http://localhost:5500/booking", {
          user_id: props.userid,
          room_id: id,
          hotel_id: hotelId,
          booking_date: `${year}-${month}-${day}`,
        })
        .then(function (response) { })
        .catch(function (error) {
          console.log(error.message);
        });

      axios
        .put(`http://localhost:5500/rooms/booking/${id}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.message);
        });

      Swal.fire({
        title: "Booking Confirmation",
        text: "Payment submitted and room booked successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate('/')
      });
    }
  }

  return (
    <>
      <div class="min-h-screen p-6 bg-gray-100 flex mt-5">
        <div class="container max-w-screen-lg mx-auto w-full mt-5 ">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 mt-5">
              <div class="grid gap-40 gap-y-2 text-sm lg:grid-cols-2">
                <form onSubmit={handleSubmit}>
                  <div class="min-w-screen min-h-screen  flex items-center justify-center px-5 pb-10 pt-16">
                    <div
                      class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
                      style={{ maxWidth: "600px" }}
                    >
                      <div class="w-full pt-1 pb-5">
                        <div class="bg-[#5aa1c2] text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                          <i class="mdi mdi-credit-card-outline text-3xl"></i>
                        </div>
                      </div>
                      <div class="mb-10">
                        <h1 class="text-center font-bold text-xl uppercase">
                          Secure payment info
                        </h1>
                      </div>

                      <div class="mb-3">
                        <label class="font-bold text-sm mb-2 ml-1">
                          Name on card
                        </label>
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors"
                            placeholder="John Smith"
                            type="text"
                            required
                            value={card_name}
                            onChange={handleNameChange}
                          />
                          <p className={pholder}>
                            enter your fullname should contain no number{" "}
                          </p>
                        </div>
                      </div>
                      <div class="mb-3">
                        <label class="font-bold text-sm mb-2 ml-1">
                          Card number
                        </label>
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                            required
                            value={card_number}
                            onChange={handleCardNumberChange}
                          />
                          <p className={pcardnumber}>
                            your card number must has 14 valid digits
                          </p>
                        </div>
                      </div>
                      <div class="mb-3 -mx-2 flex items-end">
                        <div class="px-2 w-full">
                          <label class="font-bold text-sm mb-2 ml-1">
                            Expiration date
                          </label>
                          <div>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              dateFormat="MM/yyyy"
                              required
                              showMonthYearPicker
                              className="border-2 border-gray-200 rounded-md w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-10">
                        <label class="font-bold text-sm mb-2 ml-1">
                          Security code
                        </label>
                        <div>
                          <input
                            class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors"
                            placeholder="000"
                            type="text"
                            required
                            value={security_code}
                            onChange={handleSecurityCodeChange}
                          />
                          <p className={pcvc}>
                            your card number must has 3 digits only
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className={`block w-full max-w-xs mx-auto bg-[#5aa1c2]  focus:bg-[#5092b1] text-white rounded-lg px-3 py-3 font-semibold ${day === null && month === null && year === null
                            ? "disabled"
                            : "hover:bg-[#5191af]"
                            }`}
                          disabled={
                            day === null && month === null && year === null
                          }
                        >
                          PAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div
                  class="grid gap-40 gap-y-2 text-sm  rounded shadow-xl text-white"
                  style={{
                    backgroundImage: `url(${paymentImg})`,
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {roomPayInfo.map((pay) => (
                    <div className=" bg-opacity-80 bg-black p-5">
                      <div class="md:col-span-5 p-5">
                        <h1>Order Summary</h1>
                      </div>

                      <div class="md:col-span-3 w-full">
                        <img
                          src={pay.room_img}
                          alt="hotel placeholder image"
                          className="rounded-2xl"
                        ></img>
                      </div>

                      <div class="md:col-span-5">
                        <table className="border-separate border-transparent p-4">
                          <tr>
                            <td>room type : {pay.room_type}</td>
                          </tr>

                          <tr>
                            <td>Guests : {pay.number_of_guests} </td>
                          </tr>
                          <tr>
                            <td>Total price : {pay.price}</td>
                          </tr>
                        </table>
                      </div>

                      <div class="md:col-span-3 p-3 ">
                        <hr />
                      </div>

                      <div class="md:col-span-5 text-right">
                        <table className="border-separate border-transparent p-4">
                          <tr>
                            <td>Total : {pay.price}</td>
                          </tr>
                        </table>
                      </div>
                      <div>
                        <span>Reservation Date</span>
                        <div>
                          <select
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            className="border-2 border-gray-200 rounded-md text-black m-1"
                          >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(
                              (day) => (
                                <option key={day} value={day}>
                                  {day}
                                </option>
                              )
                            )}
                          </select>

                          <select
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className="border-2 border-gray-200 rounded-md text-black m-1"
                          >
                            <option value="">Month</option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(
                              (month) => (
                                <option key={month} value={month}>
                                  {month}
                                </option>
                              )
                            )}
                          </select>

                          <select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="border-2 border-gray-200 rounded-md text-black m-1"
                          >
                            <option value="">Year</option>
                            {Array.from(
                              { length: 10 },
                              (_, i) => i + new Date().getFullYear()
                            ).map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
import React, { useState, useEffect,useReducer} from "react";
import HotelFormOnly from "./HotelFormOnly";
import RoomFormOnly from "./RoomFormOnly";
import axios from "axios";
const HotelForm = (props) => {
  const [isHotel, setIsHotel] = useState()
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    axios.get(`http://localhost:5500/rooms/hotelrooms/${props.userid}`).then((res) => {
      setIsHotel(res.data[0].hotel_id)
    });
  }, [reducer])
  return (
    <div>
      {!isHotel && <HotelFormOnly userid={props.userid} forceUpdate={forceUpdate} />}
      {isHotel && <RoomFormOnly userid={props.userid} />}
    </div>
  );
};

export default HotelForm;

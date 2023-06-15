
import {SiHotelsdotcom} from 'react-icons/si'
import {MdLocalHotel} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {CiInboxIn} from 'react-icons/ci'
import {BsFillTrashFill } from "react-icons/bs";
import { useEffect , useState , useReducer } from 'react'
import axios from 'axios'

export const Stats = () => {

  const [hotels, setHotels] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);


// get total of hotels
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/hotel/hotels")
      .then((response) => {
        setHotels(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  // get total of rooms
  const [rooms , setRooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/rooms/rooms")
      .then((response) => {
        setRooms(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  // total of users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/users/users")
      .then((response) => {
        setUsers(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

// total of requests
const [requests, setRequests] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:5500/admin/hotel/hotels/request")
    .then((response) => {
      setRequests(response.data);
      forceUpdate();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [reducer]);




// total of trashed hotels
const [trashHotels, setTrashHotels] = useState([]);
useEffect(() => {
  axios
  .get("http://localhost:5500/admin/hotel/hotels/retrev")
  .then((response) => {
    setTrashHotels(response.data);
    forceUpdate();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
},[reducer]);

// total of trashed users
const [trashUsers, setTrashUsers] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:5500/admin/users/users/retreived")
    .then((response) => {
      setTrashUsers(response.data);
      forceUpdate();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [reducer]);


  return (
    <div className="stats shadow stats-vertical xl:stats-horizontal md:stats-horizontal bg-[#5AA1C2]">
      <div className="stat">
        <div className="stat-figure text-[#222222]">
         
          <SiHotelsdotcom className='text-[40px]'/>
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Hotels</div>
        <div className="stat-value text-white">{hotels.length}</div>
        
      </div>

      <div className="stat">
        <div className="stat-figure  text-[#222222]">
         
          <MdLocalHotel className='text-[40px]'/>
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Rooms</div>
        <div className="stat-value text-white">{rooms.length}</div>
       
      </div>

      <div className="stat">
      <div className="stat-figure  text-[#222222] ">
        
          <FiUsers className='text-[40px] '/>
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Users</div>
        <div className="stat-value text-white">{users.length}</div>
      </div>
      <div className="stat">
      <div className="stat-figure  text-[#222222] ">
        
          <CiInboxIn className='text-[40px] '/>
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Requests</div>
        <div className="stat-value text-white">{requests.length}</div>
      </div>
      <div className="stat">
      <div className="stat-figure  text-[#222222] ">
        
          <BsFillTrashFill className='text-[30px] '/>
        </div>
        <div className="stat-title  text-[#222222] font-bold">Total Deleted</div>
        <div className="stat-value text-white">{trashHotels.length + trashUsers.length }</div>
      </div>
    </div>
  );
};

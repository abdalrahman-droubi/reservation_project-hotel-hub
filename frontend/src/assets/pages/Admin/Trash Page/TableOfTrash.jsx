
import { GrRevert } from "react-icons/gr";
import Swal from 'sweetalert2'
import { useEffect, useState , useReducer} from "react";
import axios from "axios";


export const TableOfTrash = () => {
  const [hotels, setHotels] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/hotel/hotels/retrev")
      .then((response) => {
        setHotels(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  

  const handleActivate =(id, name) => {
    Swal.fire({
      title: ` Do you want to retrev ${name}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} has been retreved `, "", "success");
        

        axios
          .put("http://localhost:5500/admin/hotel/hotels/retrev/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error.message));
          forceUpdate();
       
      } else Swal.fire(" Cancelled", "", "error");
    });
  };

  const tableRowsHotels = hotels.map((hotel) => {
    return (
      <tr key={hotel.hotel_id} className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {hotel.hotel_name}
                  </th>
                  <td className="px-4 py-3">{hotel.descriptions}</td>
                  <td className="px-4 py-3">{hotel.city}</td>
                  <td className="px-4 py-3">{hotel.phonehotel}</td>
                  <td className="px-4 py-3">{hotel.stars}</td>
                  <td className="px-4 py-3">{hotel.imagehotel ? '☕' : "❤️"}</td>
                  <td className="px-4 py-3 flex items-center justify-end">
                    <div
                      id=""
                      className="bg-white  rounded divide-y divide-gray-100 shadow "
                    >
                     
                      <div className="tooltip  text-white" data-tip="Revert">
                        <button onClick={()=> handleActivate(hotel.hotel_id , hotel.hotel_name)} className="btn bg-white hover:bg-gray-200 shadow-lg hover:shadow-xl border-none ">
                          <GrRevert className="text-red-500 text-[15px]"/>
                        </button>
                      </div>
                        
                    </div>
                  </td>
                </tr>
    );
  });

  //------------------------------------------------------------------------------
  const [users, setUsers] = useState([]);
//   const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);
 
  
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/users/users/retreived")
      .then((response) => {
        setUsers(response.data);
        forceUpdate();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  const handleRetreived = (id, name) => {
    console.log(id, name);
    Swal.fire({
      title: ` do you want to return ${name}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} has been retreived `, "", "success");

        axios
          .put("http://localhost:5500/admin/users/users/retreived/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error.message));
        forceUpdate();
      } else Swal.fire(" Cancelled", "", "error");
    });
  };

  const tableRowsUsers = users.map((user) => {
    return (
      <tr key={user.user_id} className="border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {user.user_name}
        </th>
        <td className="px-4 py-3">{user.user_email}</td>
        <td className="px-4 py-3">{user.user_gender}</td>
        <td className="px-4 py-3">{user.user_phone}</td>
        <td className="px-4 py-3">{user.user_password}</td>
        <td className="px-4 py-3">{user.user_type}</td>

        <td className="px-4 py-3 flex items-center justify-end">
          <div id="" className="bg-white flex gap-2 rounded ">
            
            <div className="tooltip  text-white" data-tip="Retrev">
              <button
                onClick={() => handleRetreived(user.user_id, user.user_name)}
                className="btn bg-white hover:bg-gray-200 shadow-lg hover:shadow-xl border-none "
              >
                <GrRevert className="text-red-500 text-[15px]" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <section className="w-full  mt-9 ">
     
      <div className="mb-8">
      {/* Start coding here */}
      <h1 className="text-[30px] font-bold py-3">Hotels Deleted</h1>
      <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-hidden">
      
        <div className="overflow-x-auto">
          
          <table className="w-full  text-sm text-left text-gray-500 table-zebra ">
            <thead className="text-xs text-white uppercase bg-[#222] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Hotel Name
                </th>
                <th scope="col" className="px-4 py-3">
Description                </th>
                <th scope="col" className="px-4 py-3">
                 City
                </th>
                <th scope="col" className="px-4 py-3">
Phone Number                </th>
                <th scope="col" className="px-4 py-3">
                  Stars
                </th>
                <th scope="col" className="px-4 py-3">
                  Img
                </th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
            {tableRowsHotels.length === 0 ? <div className="p-3 text-lg">There Are No Hotels Deleted</div> : tableRowsHotels }
            </tbody>
          </table>
        </div>
      
      </div>
    </div>



    <div className="mb-8">
        <h1 className="text-[30px] font-bold py-3">Users Deleted</h1>
        {/* Start coding here */}
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-zebra">
              <thead className="text-xs text-white uppercase bg-[#222] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-4 py-3">
                    User Type
                  </th>

                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRowsUsers.length === 0 ? (
                  <div className="p-3 text-lg">There are no users deleted</div>
                ) : (
                    tableRowsUsers
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

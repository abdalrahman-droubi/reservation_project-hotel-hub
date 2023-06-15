import { AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2'
import { useEffect, useState , useReducer} from "react";
import axios from "axios";
export const TableOfProviders = () => {
  const [hotels, setHotels] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/hotel/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  

  const handleDelete =(id, name) => {
    Swal.fire({
      title: ` do you want to remove ${name}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} has been removed `, "", "success");
        

        axios
          .put("http://localhost:5500/admin/hotel/hotels/deleted/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error.message));
          forceUpdate();
       
      } else Swal.fire(" Cancelled", "", "error");
    });
  };

  const tableRows = hotels.map((hotel) => {
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
                     
                      <div className="tooltip tooltip-error text-white" data-tip="Delete">
                        <button onClick={()=> handleDelete(hotel.hotel_id , hotel.hotel_name)} className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none ">
                          <AiOutlineDelete className="text-red-500 text-[15px]"/>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
     
      <div className="">
      {/* Start coding here */}
      <h1 className="text-[30px] font-bold py-3">Hotels</h1>
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
            {tableRows.length === 0 ? <div className="p-3 text-lg">There Are No Hotels</div> : tableRows }
            </tbody>
          </table>
        </div>
      
      </div>
    </div>
      
    </section>
  );
};

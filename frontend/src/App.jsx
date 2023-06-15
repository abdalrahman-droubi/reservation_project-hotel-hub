import "flowbite";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import Navbar from "./assets/layouts/Navbar";
import Footer from "./assets/layouts/Footer";
import AboutUs from "./assets/pages/AboutUs";
import ContactUs from "./assets/pages/ContactUs";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import Home from "./assets/pages/Home";
import HotelsProvider from "./assets/pages/HotelsProvider";
import HotelDetails from "./assets/pages/HotelDetails";
import Payment from "./assets/pages/Payment";
import ProfilePage from "./assets/pages/ProfilePage";
import { Main } from "./assets/pages/Admin/Main Page/Main";
import { DashBoard } from "./assets/pages/Admin/DashBoard";
import { Nav } from "./assets/pages/Admin/Nav";
import { Aside } from "./assets/pages/Admin/Aside";
import { Hotels } from "./assets/pages/Admin/Providers Page/Hotels";
import { Users } from "./assets/pages/Admin/Users Page/Users";
import { Rooms } from "./assets/pages/Admin/Rooms Page/Rooms";
import { Requests } from "./assets/pages/Admin/Requests Page/Requests";
import { Trash } from "./assets/pages/Admin/Trash Page/Trash";
import ProviderLogin from "./assets/pages/server_provider/ProviderLogin";
import ProviderSignup from "./assets/pages/server_provider/ProviderSignup";
import Profile from "./assets/pages/server_provider/Profile";
import NotFoundPage from "./assets/pages/NotFoundPage";
import NotAccessPage from "./assets/pages/NotAccessPage";
import Faq from "./assets/components/footer/Faq";
import Terms from "./assets/components/footer/Terms";
import { Message } from "./assets/pages/Admin/Meessages/Message";
import axios from "axios";
function App() {
  const [userType, setUserType] = useState("guest");
  const [userName, setUserName] = useState(false);
  const [userid, setUserid] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  useEffect(() => {
    axios
      .get("http://localhost:5500/api/auth/userType", {
        headers: {
          authorization:
            `Bearer ${JSON.parse(localStorage.getItem("token"))}` || null,
        },
      })
      .then((res) => {
        res.data.error == "Null token"
          ? setUserType("guest")
          : setUserType(res.data.user_type);
        setUserEmail(res.data.user_email);
        setUserid(res.data.user_id);
        setUserName(res.data.user_name);
      });
  }, [reducer]);

  return (
    <>
      {userType === "admin" && (
        <BrowserRouter>
          <Nav />
          <Aside />
          <Routes>
            <Route path="/" element={<DashBoard forceUpdate={forceUpdate} />} />
            <Route path="/main" element={<Main />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Message" element={<Message />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/trash" element={<Trash />} /> 
            <Route path="*" element={<NotFoundPage />} />
            {/* you don't have permission to access this resource */}
            <Route path="/contactus" element={<NotAccessPage />} />
            <Route path="/aboutus" element={<NotAccessPage />} />
            <Route path="/login" element={<NotAccessPage />} />
            <Route path="/signup" element={<NotAccessPage />} />
            <Route path="/hotelsprovider" element={<NotAccessPage />} />
            <Route path="/hoteldetails" element={<NotAccessPage />} />
            <Route path="/payment" element={<NotAccessPage />} />
            <Route path="/userprofile" element={<NotAccessPage />} />
            <Route path="/providerlogin" element={<NotAccessPage />} />
            <Route path="/providersignup" element={<NotAccessPage />} />
            <Route path="/providerprofile" element={<NotAccessPage />} />
            {/* you don't have permission to access this resource */}
          </Routes>
        </BrowserRouter>
      )}
      {userType == "guest" && (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
              path="/login/:id"
              element={<Login forceUpdate={forceUpdate} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/hotelsprovider" element={<HotelsProvider />} />
            <Route
              path="/hoteldetails/:id"
              element={<HotelDetails userType={userType} />}
            />
            <Route path="/userprofile" element={<ProfilePage />} />
            <Route
              path="/providerlogin"
              element={<ProviderLogin forceUpdate={forceUpdate} />}
            />
            <Route path="/providersignup" element={<ProviderSignup />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<Terms />} />
            {/* you don't have permission to access this resource */}
            <Route path="/payment/:id" element={<NotAccessPage />} />
            <Route path="/main" element={<NotAccessPage />} />
            <Route path="/hotels" element={<NotAccessPage />} />
            <Route path="/users" element={<NotAccessPage />} />
            <Route path="/rooms" element={<NotAccessPage />} />
            <Route path="/requests" element={<NotAccessPage />} />
            <Route path="/providerprofile" element={<NotAccessPage />} />
            {/* you don't have permission to access this resource */}
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      {userType == "client" && (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar
            userName={userName}
            userEmail={userEmail}
            forceUpdate={forceUpdate}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/hotelsprovider" element={<HotelsProvider />} />
            <Route
              path="/hoteldetails/:id"
              element={<HotelDetails userType={userType} />}
            />
            <Route path="/payment/:id" element={<Payment userid={userid} />} />
            <Route path="/userprofile" element={<ProfilePage userid={userid}/>} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<Terms />} />
            {/* you don't have permission to access this resource */}
            <Route path="/providerlogin" element={<NotAccessPage />} />
            <Route path="/providersignup" element={<NotAccessPage />} />
            <Route path="/login" element={<NotAccessPage />} />
            <Route path="/signup" element={<NotAccessPage />} />
            <Route path="/main" element={<NotAccessPage />} />
            <Route path="/hotels" element={<NotAccessPage />} />
            <Route path="/users" element={<NotAccessPage />} />
            <Route path="/rooms" element={<NotAccessPage />} />
            <Route path="/requests" element={<NotAccessPage />} />
            <Route path="/providerprofile" element={<NotAccessPage />} />
            {/* you don't have permission to access this resource */}
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      {userType == "provider" && (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/providerprofile"
              element={<Profile userid={userid} forceUpdate={forceUpdate} />}
            />
            <Route path="*" element={<NotFoundPage />} />
            {/* you don't have permission to access this resource */}
            <Route path="/contactus" element={<NotAccessPage />} />
            <Route path="/aboutus" element={<NotAccessPage />} />
            <Route path="/login" element={<NotAccessPage />} />
            <Route path="/signup" element={<NotAccessPage />} />
            <Route path="/hotelsprovider" element={<NotAccessPage />} />
            <Route path="/hoteldetails" element={<NotAccessPage />} />
            <Route path="/payment" element={<NotAccessPage />} />
            <Route path="/userprofile" element={<NotAccessPage />} />
            <Route path="/providerlogin" element={<NotAccessPage />} />
            <Route path="/providersignup" element={<NotAccessPage />} />
            <Route path="/main" element={<NotAccessPage />} />
            <Route path="/hotels" element={<NotAccessPage />} />
            <Route path="/users" element={<NotAccessPage />} />
            <Route path="/rooms" element={<NotAccessPage />} />
            <Route path="/requests" element={<NotAccessPage />} />
            <Route path="/providerprofile" element={<NotAccessPage />} />
            {/* you don't have permission to access this resource */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

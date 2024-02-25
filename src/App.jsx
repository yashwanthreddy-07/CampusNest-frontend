import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Policy from "./Components/Policy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./Components/Property";
import SearchProperty from "./Components/SearchProperty";
import StudentDetails from "./Profiles/Student/StudentDetails";
import OwnerProfile from "./Profiles/Owner/OwnerProfile";
import UpdateStudent from "./Profiles/Student/UpdateStudent";
import UpdateOwner from "./Profiles/Owner/UpdateOwner";
import StudentSecurity from "./Profiles/Student/StudentSecurity";
import OwnerSecurity from "./Profiles/Owner/Ownersecurity";
import StudentNotification from "./Dashboards/Student/StudentNotification";
import OwnerNotification from "./Dashboards/Owner/OwnerNotification";
import MyProperty from "./Dashboards/Owner/MyProperty";
import CreateProperty from "./Dashboards/Owner/CreateProperty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/property" element={<Property />} />
          <Route path="/searchproperty" element={<SearchProperty />} />
          <Route path="/profile" element={<OwnerProfile />} />
          <Route path="/updateprofile" element={<UpdateOwner />} />
          <Route path="/security" element={<OwnerSecurity />} />
          <Route
            path="/dashboard/notification"
            element={<OwnerNotification />}
          />
           <Route path="/dashboard/myproperty" element={<MyProperty/>}
        />  
        <Route path="/dashboard/createproperty" element={<CreateProperty/>}></Route>
        </Routes>
       
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;

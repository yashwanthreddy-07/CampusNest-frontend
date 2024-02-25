import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Policy from "./Components/Policy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import OwnerPayments from "./Dashboards/Owner/OwnerPayments";
import OwnerChat from "./Dashboards/Owner/Ownerchat";
import StudentLayout from "./Profiles/Student/StudentLayout";
import OwnerLayout from "./Profiles/Owner/OwnerLayout";
import StudentBooking from "./Dashboards/Student/StudentBooking";
import StudentPayments from "./Dashboards/Student/StudentPayment";
import StudentChat from "./Dashboards/Student/StudentChat";
import AdminLayout from "./Dashboards/Admin/AdminLayout";
import OwnerRequest from "./Dashboards/Admin/OwnerRequest";
import StudentRequest from "./Dashboards/Admin/StudentRequest";
import AdminNotification from "./Dashboards/Admin/AdminNotification";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/owner" element={<OwnerLayout />}>
            <Route path="profile" element={<OwnerProfile />} />
            <Route path="update-profile" element={<UpdateOwner />} />
            <Route path="security" element={<OwnerSecurity />} />
            <Route
              path="dashboard/notifications"
              element={<OwnerNotification />}
            />
            <Route path="dashboard/myproperty" element={<MyProperty />} />
            <Route
              path="dashboard/createproperty"
              element={<CreateProperty />}
            ></Route>
            <Route path="dashboard/payments" element={<OwnerPayments />} />
            <Route path="chat" element={<OwnerChat />} />
          </Route>
          <Route path="/user" element={<StudentLayout />}>
            <Route path="profile" element={<StudentDetails />} />
            <Route path="update-profile" element={<UpdateStudent />} />
            <Route path="security" element={<StudentSecurity />} />
            <Route
              path="dashboard/notifications"
              element={<StudentNotification />}
            />
            <Route path="dashboard/bookings" element={<StudentBooking />} />
            <Route path="dashboard/payments" element={<StudentPayments />} />
            <Route path="chat" element={<StudentChat />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="dashboard/notification"
              element={<AdminNotification />}
            />
            <Route
              path="dashboard/studentrequest"
              element={<StudentRequest />}
            />
            <Route path="dashboard/ownerrequest" element={<OwnerRequest />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/searchproperty" element={<SearchProperty />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;

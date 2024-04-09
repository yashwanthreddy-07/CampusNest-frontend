import React from "react";
import { Outlet } from "react-router-dom";

function StudentLayout() {
  const studenttoken = localStorage.getItem("user-token");
  return <>{studenttoken ? <Outlet /> : "Login in to account"}</>;
}

export default StudentLayout;

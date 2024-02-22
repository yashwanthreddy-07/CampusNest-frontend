import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layouts({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token =
      localStorage.getItem("user-token") || localStorage.getItem("owner-token");
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of the token
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* {isLoggedIn ? <HeaderUser setIsLoggedIn={setIsLoggedIn} /> : <Header setIsLoggedIn={setIsLoggedIn} />}
       <main>{children}</main>
       <Footer /> */}
    </>
  );
}

export default Layouts;

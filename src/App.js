import React, { useEffect, useState } from "react";
import Home from "./Home"
import SignInSignupWithLocalStorage from "./signinandup";

const App = () => {
 
  const [showlog, setshowlog] = useState(false);

  useEffect(() => {
    const islogged = localStorage.getItem("signUp");
    if (islogged === null) {
      setshowlog(true);
    } else {
      setshowlog(false);
    }
  }, [showlog]);
  return (
    <>
      {showlog ? (
        <SignInSignupWithLocalStorage />
      ) : (
        <Home/>
      )}
    </>
  );
};

export default App;

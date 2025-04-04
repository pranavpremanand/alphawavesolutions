import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import Footer from "../components/LandingPage/Footer";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5 relative">
      <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md">
        <div className="backdrop-blur-sm bg-black/50">
          <div className="flex w-full justify-between items-center gap-5 py-5 wrapper">
            <Link to="/">
              <img
                fetchPriority="high"
                src={logo}
                alt="logo"
                width="150"
                height="100"
                className="h-[4rem] object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="wrapper flex items-center pt-[6rem] h-[70vh]">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="heading text-center">Thank You!</h1>
          <p className="description text-center">
            Your message has been sent successfully. We will get back to you
            soon.
          </p>
          <Link to="/" className="primary-btn">
            Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thankyou;

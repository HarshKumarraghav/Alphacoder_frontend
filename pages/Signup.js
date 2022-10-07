import React, { useState } from "react";
import SignupImg from "../Assets/Auth/signup.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowBack } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FETCH_URI = "https://magnificent-gold-production.up.railway.app/";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType] = useState("USER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ClearFormData = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const router = useRouter();

  const userSignup = async (e) => {
    e.preventDefault();
    const RequestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        First_name: firstName,
        Last_name: lastName,
        Email: email,
        Password: password,
        User_type: userType,
      }),
    };
    const response = await toast.promise(
      fetch(FETCH_URI + "users/signup", RequestOption),
      {
        pending: "Promise is pending",
      }
    );

    if (response.status === 200) {
      router.push("/Login");
    }
    if (response.status === 500 || response.status === 400) {
      toast.error("Please! enter valid details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      ClearFormData();
    }
  };
  return (
    <>
      <div className="h-screen w-screen bg-primary text-text flex lg:flex-row flex-col font-main">
        <div className="w-full h-16 fixed lg:pl-5 flex items-center">
          <ArrowBack
            className="hover:scale-125 w-14 h-6 transition-all cursor-pointer "
            onClick={() => router.push("/")}
          />
        </div>
        <div className="lg:w-1/2 lg:h-full h-1/2 flex flex-col lg:justify-center items-center py-3 gap-3">
          <h1
            className="font-head text-4xl md:text-6xl lg:text-6xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="text-primary-color">&lt;/&gt;</span>Alphacoder
          </h1>
          <Image src={SignupImg} />
        </div>
        <div className="lg:w-1/2 lg:h-full lg:justify-evenly lg:bg-primary-light w-full h-1/2 flex flex-col items-center justify-between py-5">
          <div className="w-full flex items-center flex-col">
            <h1 className="text-2xl w-3/4">
              Start your Problem Solving journey with us.
            </h1>
          </div>
          <form className="flex flex-col items-center w-full gap-3">
            <div className="flex w-3/4 gap-x-3">
              <input
                type="text"
                required
                className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color  placeholder:font-bold placeholder:p-2  focus:outline-primary-color text-primary-color p-2"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color placeholder:font-bold placeholder:p-2 focus:outline-primary-color text-primary-color p-2"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              type="email"
              required
              className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color  placeholder:font-bold placeholder:p-2  focus:outline-primary-color text-primary-color p-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color placeholder:font-bold placeholder:p-2 focus:outline-primary-color text-primary-color p-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-3/4 text-center h-12 rounded-md bg-primary-color"
              onClick={userSignup}
            >
              Register
            </button>
          </form>
          <div className="">
            Have an account?&nbsp;
            <span
              className="text-primary-color font-bold cursor-pointer"
              onClick={() => router.push("/Login")}
            >
              Login
            </span>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Signup;

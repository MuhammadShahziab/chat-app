"use client";
import Form from "@app/components/Form";
import React, { useState } from "react";

const LoginPage = () => {
  const [auth, setAuth] = useState(null);
  return (
    <div className="flex min-h-screen relative overflow-hidden">
      <div className="w-[30%] max-md:hidden md:flex bg-orange rounded-tr-lg rounded-br-lg  ">
        <div className="flex flex-col gap-y-3 items-center w-full mt-11">
          <img src="/assets/logo.png" className="w-32 opacity-90"></img>
          <p className="text-white font-semibold capitalize text-2xl">{auth}</p>
          <p className="text-center text-white px-6">
            Share Your Smile with this World and your Friends.Your happiness can
            light up someone else's day!
          </p>

          <img src="/assets/hot_tea.svg" className="w-24 mt-16 "></img>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-start md:items-center ">
        <Form setAuth={setAuth}></Form>
      </div>
      <img
        src="/assets/circle.svg"
        className="absolute -bottom-9  md:-bottom-7 -right-9 w-40"
      ></img>
    </div>
  );
};

export default LoginPage;

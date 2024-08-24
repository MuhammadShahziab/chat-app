"use client";
import Form from "@app/components/Form";
import React, { useState } from "react";

const LoginPage = () => {
  const [auth, setAuth] = useState(null);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3  h-screen overflow-hidden relative">
      <div className=" col-span-1  hidden md:flex bg-orange rounded-tr-3xl rounded-br-3xl shadow-2xl">
        <div className="flex flex-col gap-y-3 items-center justify-center w-full p-8">
          <img src="/assets/logo.png" className="w-32 opacity-90" alt="Logo" />
          <p className="text-white font-semibold capitalize text-2xl">{auth}</p>
          <p className="text-center text-white px-6">
            Share Your Smile with this World and your Friends. Your happiness
            can light up someone else's day!
          </p>
          <img src="/assets/hot_tea.svg" className="w-24 mt-16" alt="Hot Tea" />
        </div>
      </div>
      <div className="md:col-span-2 col-span-3 ">
        <div className="flex  justify-center h-full items-start md:items-center">
          <Form setAuth={setAuth} />
        </div>
      </div>
      <img
        src="/assets/circle.svg"
        className="absolute top-[-65px] md:hidden left-[-50px] w-40"
        alt="Circle"
      />
      <img
        src="/assets/trianle.png"
        className="absolute top-2 left-4 md:hidden animate-rotate-left-right"
        alt="Chat"
      />

      <img
        src="/assets/circle.svg"
        className="absolute bottom-[-60px] right-[-50px] md:bottom-[-35px] md:right-[-36px] w-40"
        alt="Circle"
      />
      <img
        src="/assets/chat.png"
        className="absolute bottom-4 right-3  animate-rotate-left-right"
        alt="Chat"
      />
    </div>
  );
};

export default LoginPage;

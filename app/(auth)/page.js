"use client";
import Form from "@app/components/Form";
import React, { useState } from "react";

const LoginPage = () => {
  const [auth, setAuth] = useState(null);
  return (
    <div className="flex min-h-screen relative overflow-hidden">
      {/* Left Section - Hidden on smaller screens */}
      <div className="w-[30%] hidden md:flex bg-orange rounded-tr-3xl rounded-br-3xl shadow-2xl">
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

      {/* Form Section */}
      <div className="flex flex-1 justify-center lg:items-center p-4 md:p-0">
        <Form setAuth={setAuth} />
      </div>

      {/* Decorative Images */}

      <img
        src="/assets/circle.svg"
        className="absolute top-[-36px] lg:hidden left-[-36px] w-40"
        alt="Circle"
      />
      <img
        src="/assets/chat.png"
        className="absolute top-6 left-6 lg:hidden animate-rotate-left-right"
        alt="Chat"
      />

      <img
        src="/assets/circle.svg"
        className="absolute bottom-[-36px] md:bottom-[-28px] right-[-36px] w-40"
        alt="Circle"
      />
      <img
        src="/assets/chat.png"
        className="absolute bottom-8 right-5  animate-rotate-left-right"
        alt="Chat"
      />
    </div>
  );
};

export default LoginPage;

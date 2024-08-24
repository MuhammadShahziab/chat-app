"use client";
import React, { useEffect, useState } from "react";

import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsPerson } from "react-icons/bs";
const Form = ({ setAuth }) => {
  const [currState, setCurrState] = useState("login");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setAuth(currState);
  }, [currState]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (currState === "sign up") {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setCurrState("login");
          reset({
            username: "",
            email: "",
            password: "",
          });
        } else {
          const errorData = await res.text();
          toast.error(errorData);
        }
      }

      if (currState === "login") {
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (res.ok) {
          toast.success("login");
          router.push("/chats");
        } else {
          toast.error(res?.error);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex  flex-col gap-y-3 px-6 max-md:mt-20 relative  "
    >
      <div className="flex justify-center items-center w-full mb-8 md:hidden">
        <img src="/assets/logo.png" className="w-16  "></img>
      </div>

      {currState === "sign up" && (
        <div>
          <div className="input">
            <input
              type="text"
              className="input_field"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
                validate: (value) => {
                  if (value.length < 3) {
                    return "Username must be atleast 3 characters";
                  }
                },
              })}
            ></input>
            <BsPerson className=" text-2xl text-gray-500" />
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm ml-4 mt-1">
              {errors.username.message}
            </p>
          )}
        </div>
      )}
      <div>
        <div className="input">
          <input
            type="email"
            className="input_field"
            placeholder="Email address"
            {...register("email", { required: "Email is required" })}
          ></input>
          <CiMail className=" text-2xl text-gray-500" />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm ml-4 mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <div className="input">
          <input
            type="password"
            className="input_field"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              validate: (value) => {
                if (value.length < 5) {
                  return "Password must be alteast 5 characters";
                }
              },
            })}
          ></input>
          <CiLock className=" text-2xl text-gray-500" />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm ml-4 mt-1">
            {errors.password.message}
          </p>
        )}
      </div>
      <div>
        <div className="flex gap-x-2 text-[#808080] text-[12px] md:text-sm mx-3 mt-2">
          <label className="flex items-center gap-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="outline-none border"
              {...register("term", {
                required: "Checked terms and conditions",
              })}
            />
            <p>Agree to the terms of use & privacy policy</p>
          </label>
        </div>
        {errors.term && (
          <p className="text-red-500 text-sm ml-8 mt-1 ">
            {errors.term.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-full text-white flex items-center gap-x-2 justify-center shadow-lg bg-orange px-4 py-2 border-none"
      >
        {currState === "sign up" ? "Join Free" : "Let's Chat"}{" "}
        {loading && <ClipLoader size={20} color="#ffff" />}
      </button>

      <div className="text-center">
        {currState === "sign up" ? (
          <p className="text-[#5c5c5c] text-[12px] md:text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-500 font-medium cursor-pointer"
              onClick={() => setCurrState("login")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p className="text-[#5c5c5c] text-[12px]  md:text-sm">
            Create an account?{" "}
            <span
              className="text-blue-500 font-medium cursor-pointer"
              onClick={() => setCurrState("sign up")}
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;

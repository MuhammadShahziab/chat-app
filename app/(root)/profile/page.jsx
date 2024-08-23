"use client";
import Box from "@app/components/Box";
import { useSession } from "next-auth/react";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsPerson } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { GoInfo } from "react-icons/go";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) {
      reset({
        username: user?.username,
        profileImage: user?.profileImage,
        phone: user?.phone,
        bio: user?.bio,
      });
    }
    setPageLoading(false);
  }, [user]);
  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { error },
  } = useForm();

  const uploadProfile = async (data) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/users/${user?.id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res, "hek client side res");
      if (res.ok) {
        toast.success("Profile Updated");
      }
      if (res.error) {
        toast.error("Failed");
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {pageLoading ? (
        "loading"
      ) : (
        <>
          <Link href="/chats">
            <IoMdArrowRoundBack className="text-orange text-2xl absolute z-50 ml-6 mt-6 " />
          </Link>
          <div className="w-[80%] justify-evenly items-center md:h-[85vh] flex md:flex-row flex-col h-[100vh] mx-auto">
            <div className="flex flex-col justify-center md:bg-[#F3F0EB] md:px-10 md:h-[100%]">
              <div className="flex flex-col md:mb-10 gap-y-4">
                <img
                  src={
                    watch("profileImage") ||
                    user?.profileImage ||
                    "/assets/person.jpg"
                  }
                  alt="profile"
                  className="md:w-44 md:h-44 h-36 w-36 object-cover  rounded-full"
                />

                <CldUploadWidget
                  onSuccess={({ event, info }) => {
                    if (event === "success") {
                      setValue("profileImage", info?.secure_url);
                    }
                  }}
                  uploadPreset="yubtmliv"
                >
                  {({ open }) => (
                    <p
                      onClick={() => open()}
                      className="bg-sky-100 text-sky-500 gap-x-2 cursor-pointer rounded-full py-2 flex justify-center items-center"
                    >
                      <IoCamera className="text-3xl" />{" "}
                      <span className="text-sm font-semibold ">Upload</span>
                    </p>
                  )}
                </CldUploadWidget>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(uploadProfile)}
              className="flex flex-col gap-y-2 max-md:mb-20"
            >
              <div className="flex md:flex-row flex-col gap-2">
                <div className="input py-1">
                  <input
                    {...register("username", {
                      required: "Username is required",
                      validate: (value) => {
                        if (value.length < 3) {
                          return "Username must be at least 3 characters";
                        }
                      },
                    })}
                    type="text"
                    placeholder="Username"
                    className="input_field text-sm "
                  />
                  <BsPerson className="text-2xl text-[#c4c4c4]" />
                </div>
                <div className="input py-1">
                  <input
                    type="email"
                    className="input_field text-sm "
                    style={{ color: "#c4c4c4" }}
                    value={user?.email}
                    disabled
                    placeholder="Email address"
                  />
                  <CiMail className="text-2xl text-[#c4c4c4]" />
                </div>{" "}
              </div>
              <div className="flex md:flex-row flex-col gap-2">
                <div className="input py-1">
                  <input
                    type="text"
                    {...register("phone")}
                    className="input_field text-sm"
                    placeholder="Phone"
                  />
                  <MdOutlinePhoneEnabled className="text-2xl text-[#c4c4c4]" />
                </div>
                <div className="input py-1">
                  <input
                    type="text"
                    className="input_field text-sm"
                    placeholder="Bio"
                    {...register("bio", { required: "Bio is required" })}
                  />
                  <GoInfo className="text-2xl text-[#c4c4c4]" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-orange rounded-full mt-4 px-4 py-2 text-white flex justify-center items-center gap-x-2"
              >
                Save changes {loading && <ClipLoader size={20} color="#ffff" />}
              </button>
            </form>
          </div>
        </>
      )}
    </Box>
  );
};

export default ProfilePage;

import React, { useEffect, useRef } from "react";
import GetColor from "./GetColor";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Skeleton } from "@components/ui/skeleton";

const ContactBox = ({
  contact,
  group = false,
  createGroup,
  setSelectedContacts,
  selectedContacts,
  currentUser,
  loading,
}) => {
  const router = useRouter();
  const checkboxRef = useRef(null);

  const isSelected = selectedContacts?.some(
    (item) => item?._id === contact?._id
  );

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = isSelected;
    }
  }, [isSelected]);

  const handleDivClick = async () => {
    try {
      if (group && !createGroup && checkboxRef.current) {
        checkboxRef.current.checked = !checkboxRef.current.checked;
        if (checkboxRef.current.checked) {
          setSelectedContacts((prevContacts) => [...prevContacts, contact]);
        } else {
          setSelectedContacts((prevContacts) =>
            prevContacts.filter((item) => item._id !== contact._id)
          );
        }
      } else {
        const res = await fetch("/api/chats", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentUserId: currentUser?.id,
            members: [contact._id],
            isGroup: false,
            name: "",
          }),
        });
        const chat = await res.json();
        if (res?.ok) {
          toast.success("Created");
          router.push(`/chats/${chat._id}`);
        } else {
          toast.error(chat.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        !loading && "hover:bg-gray-100"
      } flex mr-3 items-center gap-x-4 cursor-pointer py-1 px-2 rounded-lg`}
      onClick={handleDivClick}
    >
      <div className="flex items-center gap-x-3">
        {group && (
          <input
            type="checkbox"
            className="cursor-pointer"
            disabled={createGroup}
            ref={checkboxRef} // Attach the ref to the checkbox
          />
        )}
        {loading ? (
          <Skeleton className="w-9 h-9 md:h-11 md:w-11 rounded-full" />
        ) : contact?.profileImage ? (
          <img
            src={contact?.profileImage}
            className="w-9 h-9 md:h-11 md:w-11 aspect-square rounded-full object-cover"
          />
        ) : (
          <div
            className={`w-9 h-9 md:h-11 md:w-11 capitalize rounded-full flex justify-center items-center text-white ${GetColor(
              contact?.username
            )}`}
          >
            {contact?.username.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-1">
        {loading ? (
          <Skeleton className="w-44 h-3" />
        ) : (
          <span className="text-sm font-medium">{contact?.username}</span>
        )}
      </div>
    </div>
  );
};

export default ContactBox;

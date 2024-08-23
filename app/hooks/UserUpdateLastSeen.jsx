import { useEffect } from "react";

export const UserUpdateLastSeen = (userId) => {
  useEffect(() => {
    if (!userId) return; // Exit early if userId is undefined

    const updateLastSeen = async () => {
      try {
        await fetch(`/api/users/${userId}/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lastSeen: Date.now() }),
        });
      } catch (error) {
        console.error("Error updating last seen:", error);
      }
    };

    updateLastSeen();
    const intervalId = setInterval(updateLastSeen, 60000);

    return () => clearInterval(intervalId);
  }, [userId]);
};
export const checkUserStatus = async ({ members }) => {
  if (members && members.length > 0) {
    try {
      const res = await fetch(`/api/users/${members[0]?._id}/lastSeen`);
      const data = await res.json();
      const otherUserLastSeen = new Date(data?.lastSeen).getTime();

      const currentTime = Date.now();
      const lastSeenDifference = currentTime - otherUserLastSeen;

      return lastSeenDifference <= 70000; // Consider online if lastSeen is within the last 70 seconds
    } catch (error) {
      console.log("Error checking user status:", error);
      return false;
    }
  } else {
    return false;
  }
};

const GetColor = (username) => {
  const colors = [
    "bg-sky-400",
    "bg-[#FFA429]",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-yellow-400",
  ];

  const index = username?.charCodeAt(0) % colors?.length;

  return colors[index];
};

export default GetColor;

import Image from "next/image";
import React from "react";

const MovieCard = ({ item }) => {
  return (
    <div className="bg-red-200 capitalize flex justify-center  rounded-md px-2 py-5 lg:min-w-[250px] lg:h-[170px] min-w-[140px] h-[150px]">
      {/* <Image
        className="   rounded-md  w-[130px] h-[170px] "
        src={item.image}
        width={100}
        height={100}
      /> */}
      <h1 className="text-xl lg:text-2xl font-bold text-black">{item.name}</h1>
    </div>
  );
};

export default MovieCard;

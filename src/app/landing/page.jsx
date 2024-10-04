import Navbar from "@/components/Navbar";
import TrendingNow from "@/components/TrendingNow";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" ">
      <Image
        className="  bg-red-400 -p-5 h-screen w-full op opacity-[0.5] object-cover"
        src="/assets/pic.jpg"
        width={900}
        height={900}
      />
      <div className="flex mx-auto lg:max-w-xl absolute p-5 flex-col justify-center items-center lg:bg-black/80 lg:inset-10 bg-black/50 inset-0 top-0">
        {/* <Navbar /> */}
        <h1 className="text-4xl text-center font-bold">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-center my-5 text-sm">
          Starts at ₦2,200. Cancel anytime.
        </p>
        <p className="text-center mt-3 text-sm">
          Starts at ₦2,200. Cancel anytime. Ready to watch? Enter your email to
          create or restart your membership.
        </p>
        <input
          placeholder="Search for a movie/tv show"
          className="my-5 px-3 border-white border-[1px] w-full py-4 rounded-md bg-gray-600"
        />
        <button className="bg-red-500 my-5 rounded-md py-3 w-[80%] text-xl">
          Get Started
        </button>
      </div>

      <TrendingNow />
    </div>
  );
};

export default page;

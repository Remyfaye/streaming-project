"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" p-5 lg:flex  gap-10  text-white">
      <div className="flex mr-20 flex-col justify-between gap-3 mt-5 w-[100%]">
        <h1 className="text-red-700 text-3xl text-center my-5">KDNPLUS</h1>
        <p>Get started Now</p>
        <div className="">
          <div className="flex flex-col ">
            <label className="text-gray-400">Name</label>
            <input
              placeholder="enter your name"
              className="rounded-md py-2 bg-gray-500 px-3"
            />
          </div>

          <div className="flex flex-col  my-5">
            <label className="text-gray-400">Email</label>
            <input
              placeholder="enter your name"
              className="rounded-md py-2 bg-gray-500 px-3"
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-gray-400">Password</label>
            <input
              placeholder="enter your name"
              className="rounded-md py-2 bg-gray-500 px-3"
            />
          </div>

          <button
            onClick={() => router.push("/landing")}
            className="bg-red-600 my-20 py-3 w-[100%] text-xl"
          >
            Get Started
          </button>
        </div>
      </div>
      <Image
        className="hidden lg:flex  -mx-20 -my-10"
        src="/assets/pic.jpg"
        width={900}
        height={900}
      />
    </div>
  );
}

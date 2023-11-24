"use client";
import CountUp from "react-countup";

export const Counting = ({ count, text, icon }) => {
  return (
    <div className="grid gap-1 place-items-center">
      <div className="p-3 rounded-full bg-transparent border border-orange-400 text-4xl mb-6 hover:bg-white transition cursor-pointer">
        {icon}
      </div>
      <div className="flex items-center gap-1 text-2xl">
        <CountUp end={count} className="text-2xl text-orange-500" />
        <span className="text-orange-500">+</span>
      </div>
      <p className="text-xl text-center text-black">{text}</p>
    </div>
  );
};

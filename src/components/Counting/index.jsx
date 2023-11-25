"use client";
import CountUp from "react-countup";

export const Counting = ({ count, text, icon }) => {
  return (
    <div className="grid gap-1 place-items-center">
      <div className="p-6 rounded-3xl bg-transparent border border-blue-400 text-xl sm:text-3xl md:text-7xl hover:bg-white transition cursor-pointer">
        {icon}
      </div>
      <div className="flex items-center gap-1 text-2xl">
        <CountUp end={count} className="text-2xl text-blue-500" />
        <span className="text-blue-500">+</span>
      </div>
      <p className="text-xl text-center text-black">{text}</p>
    </div>
  );
};

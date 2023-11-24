"use client";
import CountUp from "react-countup";

export const Counting = ({ count, text, icon }) => {
  return (
    <div className="grid gap-1 place-items-center">
      <div className="p-3 rounded-full bg-transparent border border-orange-400 text-4xl mb-6 hover:bg-white transition cursor-pointer">
        {icon}
      </div>
      <div className="flex items-center gap-1 text-2xl">
        <CountUp end={count} className="text-2xl text-cyan-300" />
        <span className="text-cyan-300">+</span>
      </div>
      <p className="text-xl text-center text-cyan-300">{text}</p>
    </div>
  );
};

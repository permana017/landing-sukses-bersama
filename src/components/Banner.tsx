/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";

const inter = Roboto({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-inter",
});

interface Igalery {
  style: any;
  url: any;
}

const galery: Array<Igalery> = [
  {
    style: "scale-[1] z-40 ",
    url: "https://indonesiacomiccon.com/img/gallery/thumb/JSS05386.jpg",
  },
  {
    style: "scale-[.9] z-30 top-8 ",
    url: "https://indonesiacomiccon.com/img/gallery/thumb/JSS05396.jpg",
  },
  {
    style: "scale-[.8] z-20 top-16",
    url: "https://indonesiacomiccon.com/img/gallery/thumb/JSS05423.jpg",
  },
];

function Banner() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const move = (event: any) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  return (
    <>
      <div className="relative mt-20">
        <div className="bg-[url('https://indonesiacomiccon.com/_nuxt/img/icc-2023-bg-pattern.38380c4.svg')] w-full h-[calc(100vh-76px)] bg-cover opacity-20 absolute"></div>
        <div className="container relative z-20 grid grid-cols-3 pt-5 gap-5">
          <div className=""></div>
          <div
            className={` ${inter.variable} bg-[#b91c1c]  rounded-xl h-[40vh] p-10 text-white flex flex-col justify-center items-center`}
          >
            <p className="text-3xl font-bold text-center">Nov 4-5, 2023</p>
            <p className="text-center">
              Jakarta Convention Center (JCC) Senayan, Assembly, Cendrawasih,
              and Plenary Hall
            </p>
          </div>
          <div className="bg-[#fbb83b]  rounded-xl h-[40vh] flex flex-col justify-center items-center gap-2">
            <p className="text-center capitalize text-sm">
              The Biggest Event in the year to celebrate
            </p>
            <p className="text-4xl font-extrabold text-center capitalize w-[70%]">
              5 people culture pillars
            </p>
            <p className="text-4xl font-extrabold text-center capitalize w-[70%] text-white">
              movies
            </p>
          </div>
          <div className="h-[40vh] font-extrabold text-white text-5xl flex flex-col gap-2">
            <p>BRINGiNG</p>
            <p>TEH BEST</p>
            <p className="text-[#b91c1c]">
              POP <span className="text-[#fbb83b]">CULTURE</span>
            </p>
            <p>EXPPERIENCE</p>
          </div>
          <div className="rounded-xl h-[40vh] relative">
            <a href="https://indonesiacomiccon.com/gallery">
              {galery.map((item, i) => (
                <img
                  onMouseMove={move}
                  key={i}
                  src={item.url}
                  alt="sdasd"
                  width={100}
                  height={100}
                  className={`w-full rounded-xl absolute hover:rotate-1 cursor-pointer transition duration-300 ${item.style}`}
                />
              ))}
            </a>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            {[1, 2].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-3xl border border-red-500 bg-slate-900 flex justify-between"
              >
                <div>
                  <p className="text-2xl font-bold text-white mb-1">
                    DG Awards 2023
                  </p>
                  <p className="text-base  text-slate-300 ">
                    The biggest gaming award event in Indonesia is coming.
                  </p>
                </div>
                <div className="h-14 rounded-full w-16 bg-slate-50 "></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

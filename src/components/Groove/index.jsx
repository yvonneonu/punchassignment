import React from "react";
import Applogo from "../../asset/applogo.svg";
import third from "../../asset/third.svg";
import GrooveName from "../../asset/Groove.svg";
import Right from "../../asset/Right.svg";
import GroveName from "../../asset/GroveName.svg";

function Groove() {
  return (
    <section className=" w-full bg-rwilt-tone-60 -skew-y-[2.9deg] flex justify-center">
      <div class="max-w-[1300px] relative w-full pb-[100px]">
        <img
          src={Applogo}
          alt="Applogo"
          className="absolute top-0 right-[40px]"
        />

        <div className=" skew-y-[2.9deg] flex flex-row items-end justify-between">
          <div className="flex flex-col px-8 w-full justify-center mt-[155px] flex-col">
            <div className="font-switBold whitespace-nowrap text-[54px] leading-[64px] w-[376px] gap-2 flex flex-col">
              <div className="text-white">
                <div> How it worked </div>
                <div className="flex flex-row gap-3">
                  for Jason
                  <img src={third} alt="third" />
                  <div>at</div>
                </div>
              </div>
              <img src={GrooveName} alt="third" className="w-[193px]" />
            </div>
            <div className="mt-5 w-[461px] text-white text-[22px] font-switReg">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </div>

            <div className="mt-8 flex gap-3">
              <img src={Right} alt="third" />
              <img src={Right} alt="third" className="-rotate-180" />
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-4">
              <img src={GroveName} alt="" />
              <div className="gap-1 flex flex-col text-start">
                <div className="text-white font-switSbold text-3xl">
                  Jason Makki
                </div>
                <div className="font-switMed text-base text-slate-600">
                  Engineer at GROOVE
                </div>
                <div className="font-switMed text-base text-slate-600">
                  San Francisco
                </div>
              </div>
            </div>
            <div className="w-[500px] text-white text-[22px] font-switReg mt-8">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Groove;

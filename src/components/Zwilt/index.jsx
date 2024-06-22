import React from "react";
import Onbard from "../../asset/onbard.svg";

function Zwilt() {
  return (
    <section className="-skew-y-[2.9deg] h-[600px] bg-rwilt-tone-105 w-full flex justify-center mt-[105px] ">
      <div class=" px-5 h-full pb-[150px] flex justify-center px-8 w-full">
        <div className="max-w-[1300px] relative w-full mt-[95px] skew-y-[2.9deg] flex items-center flex-row gap-48">
          <div className="w-[380px] ">
            <div className="text-[54px] leading-[64px] font-switBold">
              Why choose Zwilt?
            </div>
            <div className="mt-4 text-xl font-switReg">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </div>
          </div>
          <div className="flex flex-row overflow-x-auto hide-scrollbar w-[700px] absolute right-[-100px]">
            <img src={Onbard} alt="Onbard" className="w-[1300px] h-[652px]" />
            <img src={Onbard} alt="Onbard" className="w-[1300px] h-[652px]" />
            <img src={Onbard} alt="Onbard" className="w-[1300px] h-[652px]" />
            <img src={Onbard} alt="Onbard" className="w-[1300px] h-[652px]" />
            <img src={Onbard} alt="Onbard" className="w-[1300px] h-[652px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Zwilt;

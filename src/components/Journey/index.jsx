import React from "react";
import Group from "../../asset/Group.svg";
import One from "../../asset/1.svg";
import Evaluate from "../../asset/Evaluate.svg";
import Two from "../../asset/2.svg";
import Three from "../../asset/3.svg";
import BlackArrow from "../../asset/BlackArrow.svg";

function Journey() {
  return (
    <section className=" w-full flex justify-center flex-col items-center">
      <div className="text-[54px] leading-[64px] font-switBold">
        Start your journey today.
      </div>
      <div className="flex px-8 w-full flex-col gap-3 mt-5 items-center">
        <div class="max-w-[1300px] w-full flex justify-center bg-rwilt-tone-101 -skew-y-[2.9deg] mt-8">
          <div className="w-full flex flex-row justify-between items-center px-5">
            <div className="skew-y-[2.9deg]">
              <div className="flex flex-row items-start gap-2">
                <img src={One} alt="Group" />
                <div className="w-[405px] flex flex-col gap-3">
                  <div className="text-3xl font-switSbold">
                    Find your next star performer.
                  </div>
                  <div className="text-base font-switReg">
                    Explore the vast Zwilt marketplace to find the candidate
                    that meets your needs.
                  </div>
                  <div className="w-[139px] flex h-[74px] items-center gap-2 flex-row text-sm font-switMed">
                    <img
                      src={BlackArrow}
                      alt="Shopify"
                      className="w-[49px] h-[49px]"
                    />
                    <div>Join Now</div>
                  </div>
                </div>
              </div>
            </div>
            <img src={Group} alt="Group" />
          </div>
        </div>
        <div class="max-w-[1300px] w-full flex justify-center bg-rwilt-tone-103 -skew-y-[2.9deg] mt-8">
          <div className="w-full flex flex-row justify-between items-center px-5">
            <div className="skew-y-[2.9deg]">
              <div className="flex flex-row items-start gap-2">
                <img src={Two} alt="Group" />
                <div className="w-[405px] flex flex-col gap-3">
                  <div className="text-3xl font-switSbold">
                    Evaluate to your heart’s content.{" "}
                  </div>
                  <div className="text-base font-switReg">
                    Assess the candidate through work history, transparent tests
                    and video interviews.
                  </div>
                  <div className="w-[139px] flex h-[74px] items-center gap-2 flex-row text-sm font-switMed">
                    <img
                      src={BlackArrow}
                      alt="Shopify"
                      className="w-[49px] h-[49px]"
                    />
                    <div>Browse More</div>
                  </div>
                </div>
              </div>
            </div>
            <img src={Evaluate} alt="Group" />
          </div>
        </div>
        <div class="max-w-[1300px] w-full flex justify-center bg-rwilt-tone-104 -skew-y-[2.9deg] mt-8">
          <div className="w-full flex flex-row justify-between items-center px-5">
            <div className="skew-y-[2.9deg]">
              <div className="flex flex-row items-start gap-2">
                <img src={Three} alt="Group" />
                <div className="w-[405px] flex flex-col gap-3">
                  <div className="text-3xl font-switSbold">
                    Start building your team.
                  </div>
                  <div className="text-base font-switReg">
                    Onboard your candidate right away and start creating the
                    next big thing.
                  </div>
                  <div className="w-[139px] flex h-[74px] items-center gap-2 flex-row text-sm font-switMed">
                    <img
                      src={BlackArrow}
                      alt="Shopify"
                      className="w-[49px] h-[49px]"
                    />
                    <div>Join Now</div>
                  </div>
                </div>
              </div>
            </div>
            <img src={Group} alt="Group" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;

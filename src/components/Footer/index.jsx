import React from "react";
import BlackArrow from "../../asset/BlackArrow.svg";
import logo from "../../asset/logo.svg";

function Footer() {
  return (
    <section className=" relative w-full flex flex-col items-center justify-center">
      <div className="-skew-y-[2.9deg] bg-rwilt-tone-107 w-full absolute h-[600px] top-[-8px] "></div>

      <div className="-skew-y-[2.9deg] mt-[80px] w-full max-w-[1300px] h-[400px] bg-rwilt-tone-50 flex justify-center ">
        <div className=" px-5 h-full skew-y-[2.9deg] flex flex-col justify-center items-center w-full">
          <div className="  w-[683px] text-[54px] leading-[64px] font-switSbold text-white">
            Need a job done, and done well? Get started
          </div>
          <img
            src={BlackArrow}
            alt="Shopify"
            className="w-[75px] h-[75px] pt-8 rotate-90"
          />
        </div>
      </div>
      <div className="h-[600px] pt-[150px] text-white flex justify-center bg-rwilt-tone-107 w-full ">
        <div className=" w-full flex flex-row gap-20 max-w-[1300px]  px-8">
          <div className="w-[350px]">
            <img src={logo} alt="logo" className=" h-[27px]" />
            <div className="mt-5 text-sm font-switReg">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </div>
            <div className="mt-8 text-sm switSbold">LINKS AND REDIRECTS</div>

            <div className="flex flex-row mt-8 gap-2">
              <div className="w-[165px] h-[50px] flex text-sm font-switMed justify-center items-center rounded-[20px] bg-rwilt-tone-108">
                Hire now
              </div>
              <div className="w-[165px] h-[50px] flex text-sm font-switMed justify-center items-center rounded-[20px] bg-rwilt-tone-108">
                Apply now
              </div>
            </div>
          </div>
          <div className="w-[880px]">
            <div className="w-[779px] font-switSbold text-[54px] leading-[64px]">
              Connecting the right people to the right businesses.
            </div>
            <div className="flex flex-row mt-5 justify-between">
              <div>
                <div className="text-sm font-switSbold mt-5">PLATFORM</div>
                <div className="space-y-4 text-lg font-switReg mt-4">
                  <div>Find Work</div>
                  <div>Find Talent</div>
                  <div>Categories</div>
                  <div>About Us</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-switSbold mt-5">CATEGORIES</div>
                <div className="space-y-4  mt-4">
                  <div>Data Science</div>
                  <div>IT & Networking</div>
                  <div>Web & Mobile</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-switSbold mt-5">HELP</div>
                <div className="space-y-4  mt-4">
                  <div>FAQ's</div>
                  <div>Contact Us</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-switSbold mt-5">
                  GET IN TOUCH @
                </div>
                <div className="space-y-4  mt-4">
                  <div>Instagram</div>
                  <div>LinkedIn</div>
                  <div>Twitter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 flex justify-center border-sky-500 bg-rwilt-tone-107 ">
        <div className="w-full max-w-[1300px] px-8 justify-between py-4 text-white flex ">
          <div className="text-base font-switMed">
            All rights reserved by Zwilt
          </div>
          <div className="flex flex-row gap-5 text-base font-switMed">
            <div className="underline-offset-1 underline">Privacy Policy</div>
            <div className="underline-offset-1 underline">
              Terms and Conditions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

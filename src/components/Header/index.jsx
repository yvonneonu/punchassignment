import React from "react";
import logo from "../../asset/logo.svg";

function Header() {
  return (
    <header className="max-w-[1300px] w-full mt-7 bg-rwilt-tone-50 p-4 rounded-[15px] drop-shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className=" h-[27px]" />
        </div>
        <div className="font-switMed text-white flex items-center gap-8">
          <div>Find Work</div>
          <div>Find Talent</div>
          <div>Articles</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className="flex items-center justify-center font-switMed text-sm gap-5">
          <div className="text-white">Log In</div>
          <div className="w-[102px] h-[43px] rounded-2xl bg-white justify-center flex items-center text-rwilt-tone-60 ">
            Join Now
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import HeroImg from "../../asset/Hero.svg";
import Frame from "../../asset/Frame.svg";
function Hero() {
  const [selectedId, setSelectedId] = useState(0);
  const [selectedRole, setSelectedRole] = useState(0);

  const heroDate = [
    { id: 0, name: "IT & Development" },
    { id: 1, name: "Design and Creative" },
  ];

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const handleClickRole = (id) => {
    setSelectedRole(id);
  };
  const developerRoles = [
    [
      { id: 0, role: "Python Developer" },
      { id: 1, role: "Shopify Developer" },
      { id: 2, role: "MERN Stack Developer" },
      { id: 3, role: "Full Stack Developer" },
    ],
    [
      { id: 4, role: "Data Scientist" },
      { id: 5, role: "Front End Developer" },
      { id: 6, role: "Shopify Developer" },
      { id: 7, role: "Python Developer" },
    ],
    [
      { id: 8, role: "Shopify Developer" },
      { id: 9, role: "Python Developer" },
      { id: 10, role: "Full Stack Developer" },
      { id: 11, role: "Explore More" },
    ],
  ];

  return (
    <section className="max-w-[1300px] w-full flex justify-center flex-col items-center">
      <div className="whitespace-nowrap mt-36 font-switBold text-[44px] w-[510px] text-center">
        <div className="flex flex-row">
          Finding the right fit
          <img src={HeroImg} alt="heroimg" />
          has
        </div>
        <div>never been easier.</div>
      </div>
      <div className="w-[520px] font-switReg text-center mt-3 text-xl text-rwilt-tone-60">
        With our rigorous pre-vetting process, you'll never have to worry about
        finding the ideal candidate ever again.
      </div>

      <div className="w-[520px] h-[74px] flex flex-row mt-6 flex items-center border-[1.5px] rounded-[15px] p-5 relative">
        <div className="gap-1 flex">
          <span className="font-switSbold text-base">Looking for</span>
          <input
            type="text"
            maxLength={10}
            className="border-0 outline-none font-switReg text-rwilt-tone-70"
          />
        </div>
        <div className="absolute right-0">
          <img src={Frame} alt="frame" />
        </div>
      </div>

      <div className="w-[920px] rounded-[15px] h-[230px] flex items-center flex-col justify-center bg-rwilt-tone-80 mt-5">
        <div className="flex justify-center mt-5 rounded-[15px] bg-rwilt-tone-100 h-[44px]">
          {heroDate.map((data) => (
            <div
              key={data.id}
              className={`w-[192px] h-[44px] rounded-[15px] items-center flex text-sm justify-center cursor-pointer text-rwilt-tone-60 ${
                selectedId === data.id
                  ? "bg-rwilt-tone-90 font-switSbold "
                  : "bg-rwilt-tone-100 font-switMed"
              }`}
              onClick={() => handleClick(data.id)}
            >
              {data.name}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between p-8 gap-2 items-center  max-w-[920px] flex-row">
          {developerRoles.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="gap-y-2 w-[200px] items-start cursor-pointer text-base justify-between flex flex-col"
            >
              {column.map(({ id, role }) => (
                <div
                  key={id}
                  onClick={() => handleClickRole(id)}
                  id={`role-${id}`}
                  className={`${
                    selectedRole === id
                      ? "font-switMed text-rwilt-tone-60"
                      : "font-switReg text-rwilt-tone-70"
                  }`}
                >
                  {role}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

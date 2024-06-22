import React from "react";
import Header from "./components/Header";
import Union from "./asset/Union.svg";
import Accordion from "./components/Accordion";
import Hero from "./components/Hero";
import MarketPlace from "./components/MarketPlace";
import Groove from "./components/Groove";
import Journey from "./components/Journey";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import Zwilt from "./components/Zwilt";

function App() {
  const accordionItems = [
    {
      title: "Step 1",
      des: "Resume Screening",
      content: "Content for accordion item 1.",
    },
    {
      title: "Step 2",
      des: "Video Interview",
      content:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      title: "Step 3",
      des: "Technical Evaluation",
      content: "Content for accordion item 3.",
    },
    {
      title: "Step 4",
      des: "Application Review",
      content: "Content for accordion item 3.",
    },
    {
      title: "Step 5",
      des: "Lets get to work",
      content: "Content for accordion item 3.",
    },
  ];

  return (
    <div className="lg:flex hidden mx-auto w-full">
      <div className=" flex flex-col items-center w-full justify-center">
        <Header />

        <Hero />

        <img src={Union} alt="union" className="mt-8 w-full" />
        <MarketPlace />
        <Groove />

        <section className="-skew-y-[2.9deg] w-full flex justify-center ">
          <div class=" px-5 h-full pb-[150px] flex justify-center px-8 w-full">
            <div className="max-w-[1300px] w-full mt-[155px] skew-y-[2.9deg] flex flex-row items-end justify-between">
              <div className="w-[650px] ">
                <div className="text-[54px] leading-[64px] font-switBold">
                  How we ensure you’re in good hands.
                </div>
                <div className="mt-4 text-xl font-switReg">
                  With our comprehensive screening process, we hand-pick highly
                  skilled candidates so you can onboard them in a matter of
                  days.
                </div>

                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </section>

        <Journey />

        <Zwilt />
        <Faq />

        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Button, Header } from "../../components";
import hero from "../../components/assets/images/hero.jpg";

const Welcome = () => {
  return (
    <div>
      <Header />
      <div className=" px-8 h-screen flex-row md:flex items-center justify-center md:justify-evenly">
        <div className="px-[50px]">
          <div className="flex flex-col max-w-[400px] ">
            <h1 className="md:text-[44px] text-[30px] font-bold text-primary-8">
              The Better Way to Save & Invest.
            </h1>
            <span className="text-primary-8 mt-10">
              IfeanyiApp helps over 4 million customers achieve their financial
              goals by helping them save and invest with ease.
            </span>
            <div className="max-w-[200px] pt-8">
              <Button label="Create free account" variant="primary" size="sm" />
            </div>
          </div>
        </div>
        <div className="max-w-[362px] md:m-0 m-auto h-[500px] flex items-center justify-center rounded-[16px] py-8 ">
          <img
            className="w-full h-full object-cover rounded-[16px]"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

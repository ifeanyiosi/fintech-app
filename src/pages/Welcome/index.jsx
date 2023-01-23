import React from "react";
import { Button, Header } from "../../components";
import hero from "../../components/assets/images/hero.jpg";

const Welcome = () => {
  return (
    <div>
      <Header />
      <div className="my-[120px] flex items-center justify-evenly">
        <div className="">
          <div className="flex flex-col left-0">
            <h1 className="text-[24px]">The Better Way to Save & Invest.</h1>
            <span>
              PiggyVest helps over 4 million customers achieve their financial
              goals by helping them save and invest with ease.
            </span>
            <div>
              <Button label="Create free account" variant="primary" size="sm" />
            </div>
          </div>
        </div>
        <div className="max-w-[362px] h-[500px] rounded-[16px] py-8 ">
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

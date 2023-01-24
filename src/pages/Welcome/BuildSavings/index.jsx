import React from "react";
import { GiArmorUpgrade } from "react-icons/gi";
import { GiPadlock } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Button } from "../../../components";

const BuildSavings = () => {
  return (
    <div className="h-screen bg-red-white px-10">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex flex-col px-8 items-start justify-center gap-4 max-w-[350px]">
          <span className="text-primary-8 text-[30px] font-bold">
            4 ways to build your savings
          </span>
          <span className="text-primary-8 text-[16px]">
            Earn 5%-15% when you save with any of these PiggyVest plans.
          </span>

          <div className="pt-4">
            <Button label="Start Saving" variant="primary" size="sm" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 bg-[#f9f9f9] cursor-pointer py-8 max-h-[450px] px-10 max-w-[350px] rounded-[16px]">
            <div>
              {" "}
              <GiArmorUpgrade className="text-[50px] text-primary-5" />{" "}
            </div>
            <span className="font-bold text-[20px]">Automated Savings</span>
            <span>
              Build a dedicated savings faster on your terms automatically or
              manually.
            </span>
            <div className="flex items-center gap-4">
              <div className="bg-primary-5 w-[30px] rounded-full">
                <MdOutlineArrowRightAlt className="text-[30px] text-white" />
              </div>
              <span>Piggybank</span>
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-[#f9f9f9] cursor-pointer py-8 px-8 max-w-[350px] rounded-[16px]">
            <div>
              {" "}
              <FiTarget className="text-[50px] text-success-1" />{" "}
            </div>
            <span className="font-bold text-[20px] ">
              Goal-oriented Savings
            </span>
            <span>
              Reach all your savings goals faster. Save towards multiple goals
              on your own or with a group.
            </span>
            <div className="flex items-center gap-4">
              <div className="bg-success-1 w-[30px] rounded-full">
                <MdOutlineArrowRightAlt className="text-[30px] text-white" />
              </div>
              <span>Target Savings</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {" "}
          <div>
            <div className="flex flex-col gap-8 bg-[#f9f9f9] cursor-pointer py-8 px-8 max-w-[350px] rounded-[16px]">
              <div>
                {" "}
                <GiPadlock className="text-[50px] text-primary-8" />{" "}
              </div>
              <span className="font-bold text-[20px]">Fixed Savings</span>
              <span>
                Lock money away for a fixed duration with no access to it until
                maturity. It’s like having a custom fixed deposit.
              </span>
              <div className="flex items-center gap-4">
                <div className="bg-primary-8 w-[30px] rounded-full">
                  <MdOutlineArrowRightAlt className="text-[30px] text-white" />
                </div>
                <span>Safelock</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-8 bg-[#f9f9f9] cursor-pointer py-8 px-8 max-w-[350px] rounded-[16px]">
              <div>
                {" "}
                <FaSave className="text-[50px] text-[#FF69B4]" />{" "}
              </div>
              <span className="font-bold text-[20px]">Flexible Savings</span>
              <span>
                Save, transfer, withdraw, manage and organise your money for
                free at any time.
              </span>
              <div className="flex items-center gap-4">
                <div className="bg-[#ff69b4]  w-[30px] rounded-full">
                  <MdOutlineArrowRightAlt className="text-[30px]  text-white " />
                </div>
                <span>Flex Naira</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSavings;

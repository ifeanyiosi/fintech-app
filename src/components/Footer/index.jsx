import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f9f9f9] py-[100px] flex md:flex-col flex-row items-center mt-[100px] ">
      <div className="flex md:flex flex-col md:flex-row  gap-[80px] w-full items-start justify-center">
        <div>
          <span className="font-bold">IfeanyiApp</span>
        </div>
        <div>
          <span className="font-bold">Products</span>
          <ul className="flex flex-col gap-4 pt-4">
            <li className="cursor-pointer">Piggybank</li>
            <li className="cursor-pointer">Invest</li>
            <li className="cursor-pointer">Safelock</li>
            <li className="cursor-pointer">Target Savings</li>
            <li className="cursor-pointer">Flex Naira</li>
          </ul>
        </div>
        <div>
          <span className="font-bold">Company</span>
          <ul className="flex flex-col gap-4 pt-4">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <span className="font-bold">Legal</span>
          <ul className="flex flex-col gap-4 pt-4">
            <li className="cursor-pointer">Terms</li>
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Security</li>
          </ul>
        </div>
        <div>contact</div>
      </div>
      <div>bio</div>
    </div>
  );
};

export default Footer;

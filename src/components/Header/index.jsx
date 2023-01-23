import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <header className="fixed z-50 p-3 py-[32px]  w-screen px-[32px] drop-shadow-sm top-0 mt-0 bg-white">
      <div className="flex items-center justify-between ">
        <div>
          <span>Ifeanyi Fintech App</span>
        </div>
        <div className="flex items-center ">
          <ul className="flex gap-8">
            <li>Save</li>
            <li>Invest</li>
            <li>Stories</li>
            <li>Blogs</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="w-[100px]">
            <Button label="Sign In" variant="secondary" size="sm" />
          </div>
          <div className="w-[250px] ">
            <Button label="Create Free Account" variant="primary" size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Button from "../Button";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="fixed z-50 p-3 py-[32px]  w-screen px-[32px] drop-shadow-sm top-0 mt-0 bg-white">
      {/* tabs and laptops */}
      <div className="hidden md:flex items-center justify-between ">
        <div>
          <span>Ifeanyi Fintech App</span>
        </div>
        <div className="flex items-center ">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex gap-8"
          >
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              Save
            </li>
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              Invest
            </li>
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              Stories
            </li>
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              Blogs
            </li>
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              FAQs
            </li>
          </motion.ul>
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
      {/* mobile view */}
      <div className="md:hidden flex items-center justify-between">
        <div>
          <span>Ifeanyi Fintech App</span>
        </div>
        <div onClick={() => setMenu(!menu)}>
          <FiMenu />
        </div>
        {menu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-full h-screen items-center absolute bg-white flex flex-col top-[90px] right-0"
          >
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex flex-col gap-8 py-4"
            >
              <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
                Save
              </li>
              <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
                Invest
              </li>
              <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
                Stories
              </li>
              <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
                Blogs
              </li>
              <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
                FAQs
              </li>
            </motion.ul>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-[100%]">
                <Button label="Sign In" variant="secondary" size="sm" />
              </div>
              <div className="w-[100%] ">
                <Button
                  label="Create Free Account"
                  variant="primary"
                  size="sm"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import logo from "../Assets/Image/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-bgColor text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4">
        {/*Logo and Description */}
        <div className="w-100 sm:w-1/2 mb-6 sm:mb-0 pr-40">
            <img src={logo} alt="AT Logo" />
          <p className="text-sm mt-6">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective – your
            business results.
          </p>
        </div>

        <div className="flex w-full sm:w-1/2 flex-wrap ">
            {/*Our Technologies */}
            <div className="w-full  sm:w-1/2 mb-6 sm:mb-0">
            <h3 className=" font-semibold mb-4 text-xl">Our Technologies</h3>
            <ul className="space-y-2 text-sm">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
            </ul>
            </div>

            {/* Our Services */}
            <div className="w-full sm:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
            </ul>
            </div>
        </div>

      </div>

      {/*Bottom */}
      <div className="border-t border-white w-[90%] md:w-[60%] sm:w-[80%] mt-8 pt-4 mx-auto">
        <div className="container mx-auto flex justify-center font-medium items-center text-sm px-8">
          <p>Privacy Policy</p>
          <p className="px-4">|</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

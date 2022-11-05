import React from "react";
import vector from '../assets/images/vector.png'
import vector_dot from '../assets/images/vector-dot.png'
import i4g from '../assets/images/I4G.png'

const Footer = () => {
  return (
    <footer className="mx-auto container px-4 py-8">
      <div className="flex flex-col space-y-6 items-start pt-6 px-2 border-t-2 border-dark-grey md:flex-row md:justify-between md:items-center md:space-y-0">
        <div className="relative">
          <div className="">
            <img src={vector} alt="" />
          </div>
          <div className="absolute left-[51px] bottom-1">
            <img src={vector_dot} alt="" />
          </div>
        </div>
        <p className="text-light-grey">HNG Internship 9 Frontend Task</p>
        <div className="">
          <img src={i4g} alt="i4g logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

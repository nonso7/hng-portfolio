import React from "react";
import chino from '../assets/images/chino.jpg';
import p_icon from '../assets/images/photo-icon.png';
import share_icon from '../assets/images/avatar-share-button.png';
import share_icon_full from '../assets/images/avatar-share-button-full.png';

const Header = () => {
  return (
    <section className="p-6 max-w-[500px] mx-auto">
      {/* image contaiber */}
      <div className=" flex justify-center mt-8 relative md:mt-4">
        <div className="flex flex-col space-y-6 items-center">
          <div className="img-container">
            <img
              id="profile__img"
              className="h-24 w-24 rounded-full"
              src={chino}
              alt="profile picture"
            />
            <img className="camera" src={p_icon} alt="" />
          </div>
          <p id="twitter" className="text-xl font-bold">
            Chinonso Nwajagu
          </p>
        </div>
        <p id="slack" className="text-xl font-bold hidden">
          Chinonso Nwajagu
        </p>
        {/* Share Icon */}
        <div className="shareFull absolute md:right-[-40%] lg:[-120%]  md:top-[-14px] ">
          <p className="sharelink">Share Link</p>
          <img
            className="arrowShare"
            src={share_icon_full}
            alt="share profile icon"
          />
          <img
            className="dotShare"
            src={share_icon}
            alt="more options icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;

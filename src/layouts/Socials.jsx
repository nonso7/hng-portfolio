import React from "react";
import slack from '../assets/images/slack.png';
import github from '../assets/images/github.png';

const Socials = () => {
  return (
    <section className="mx-auto container px-8 py-8 md:px-16 md:pb-32">
      <div className="flex flex-row space-x-4 items-center justify-center ">
        <div>
          <img src={slack} alt="slack icon" />
        </div>
        <div>
          <img src={github} alt="github icon" />
        </div>
      </div>
    </section>
  );
};

export default Socials;

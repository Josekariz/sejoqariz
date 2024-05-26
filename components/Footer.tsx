import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data/idx";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full mb-[100px] md:mb-5 pb-10">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          🚀 Ready to skyrocket <span className="text-purple">your</span>{" "}
          digital game?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          write Reach out to me today, and together, let&apos;s bring your goals
          to life.
        </p>
        <a href="mailto:sejokarizz@gmail.com">
          <MagicButton
            title="Let's Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col sm:justify-evenly md:justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; {currentYear} Joseph
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={link} target="_blank">
                <img src={img} alt="socials" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

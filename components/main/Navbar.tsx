import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-brown-10/50 bg-transparent backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Evolvix
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-center">
          <div className="flex items-center justify-between w-full h-auto border border-brown-10 bg-darkb-90/60 mr-[15px] px-[20px] py-[10px] rounded-full text-white">
            <a href="#about" className="cursor-pointer">
              About
            </a>
            <a href="#services" className="cursor-pointer">
              Services
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

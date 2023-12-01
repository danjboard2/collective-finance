import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full h-full px-4 py-10 text-[#EDEDED] bg-[#131313] min-h-[260px]">
      <div className="lg:ml-20 justify-between flex flex-col self-stretch xs:self-center md:self-start xs:text-center md:text-left">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <a
            className="link-underline link-underline-black flex"
            href="/"
            target="_self"
            rel="noreferrer"
          >
           <Image src="/media/images/collective-finance-logo-with-text.png" alt="Collective Finance" width={200} height={50} className="xs:w-[160px] xs:mb-4 md:mb-20 w-[75%] lg:w-full"/>
          </a>
          <div>
          <p className="px-4 text-base lg:text-lg">Collective Finance.</p>
          <p className="px-4 xs:text-sm lg:text-base xs:mb-6 md:mb-0">&copy; 2023</p>
          </div>
      </div>

      <ul className="flex xs:self-center md:self-start xs:text-center md:text-left">
      <li
            className="nav-links px-4 cursor-pointer font-medium text-xl text-[#EDEDED] link-underline"
          >
            <p className="text-lg lg:text-xl font-bold md:mb-2">Contact us</p>
            <Link className="text-base lg:text-lg block xs:mb-6 md:mb-0 hover:underline " href="#">info@collectivefinance.io</Link>
          </li>
      </ul>
      <ul className="flex xs:self-center md:self-start xs:text-center md:text-left">
      <li
            className="nav-links px-4 cursor-pointer font-medium text-xl text-[#EDEDED] link-underline"
          >
            <p className="text-lg lg:text-xl font-bold md:mb-2">More info</p>
            <Link className="text-base lg:text-lg block xs:mb-6 md:mb-0 hover:underline" href="#">Whitepaper</Link>
          </li>
      </ul>
      <ul className="flex xs:self-center md:self-start xs:text-center md:text-left">
          <li
            className="nav-links px-4 cursor-pointer font-medium text-xl text-[#EDEDED] link-underline flex flex-col lg:mr-20"
          >
            <p className="text-lg lg:text-xl font-bold md:mb-2">Follow us</p>
            <Link className="text-base lg:text-lg md:mb-2 hover:underline" href="#">Twitter</Link>
            <Link className="text-base lg:text-lg md:mb-2 hover:underline" href="#">Discord</Link>
            <Link className="text-base lg:text-lg md:mb-2 hover:underline" href="#">Medium</Link>
            <Link className="text-base lg:text-lg md:mb-2 hover:underline" href="#">Youtube</Link>
          </li>
      </ul>
    </div>
  );
};

export default Footer;
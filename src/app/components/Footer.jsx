import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {

  return (
    <div className="flex justify-between items-center w-full h-full px-4 py-10 text-[#EDEDED] bg-[#131313] min-h-[260px]">
      <div className="lg:ml-20 justify-between flex flex-col self-stretch">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <a
            className="link-underline link-underline-black flex"
            href="/"
            target="_self"
            rel="noreferrer"
          >
           <Image src="/media/images/collective-finance-logo-with-text.png" alt="Collective Finance" width={200} height={50} className="w-[75%] lg:w-full"/>
          </a>
          <div>
          <p className="text-base lg:text-lg">Collective Finance.</p>
          <p className="text-sm lg:text-base">&copy; 2023</p>
          </div>
      </div>

      <ul className="flex self-start">
      <li
            className="nav-links px-4 cursor-pointer font-medium text-xl text-[#EDEDED] link-underline"
          >
            <p className="text-lg lg:text-xl font-bold mb-2">Contact us</p>
            <Link className="text-base lg:text-lg mb-2 hover:underline" href="#">info@collectivefinance.io</Link>
          </li>
      </ul>
      <ul className="flex self-start">
      <li
            className="nav-links px-4 cursor-pointer font-medium text-xl text-[#EDEDED] link-underline"
          >
            <p className="text-lg lg:text-xl font-bold mb-2">More info</p>
            <Link className="text-base lg:text-lg mb-2 hover:underline" href="#">Whitepaper</Link>
          </li>
      </ul>
      <ul className="flex self-start">
          <li
            className="nav-links px-4 cursor-pointer font-medium text-xl text-[#EDEDED] link-underline flex flex-col lg:mr-20"
          >
            <p className="text-lg lg:text-xl font-bold mb-2">Follow us</p>
            <Link className="text-base lg:text-lg mb-2 hover:underline" href="#">Twitter</Link>
            <Link className="text-base lg:text-lg mb-2 hover:underline" href="#">Discord</Link>
            <Link className="text-base lg:text-lg mb-2 hover:underline" href="#">Medium</Link>
            <Link className="text-base lg:text-lg mb-2 hover:underline" href="#">Youtube</Link>
          </li>
      </ul>
    </div>
  );
};

export default Footer;
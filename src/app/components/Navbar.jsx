import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Whitepaper",
      link: "https://collectivefi.gitbook.io/docs/welcome/overview",
    },
    {
      id: 2,
      name: "Discord",
      link: "https://discord.gg/collective-finance-1036736915556282380",
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://twitter.com/collectiveFi",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-[100px] px-4 text-[#EDEDED] bg-gradient-to-b from-[#1F1F1F] to-[#191919] fixed nav z-50">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
            target="_self"
            rel="noreferrer"
          >
           <Image src="/media/images/collective-finance-logo-with-text.png" alt="Collective Finance" width={200} height={50}/>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-[#EDEDED] hover:scale-105 duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex pl-[2.5%] pr-[2.5%] items-center h-1/2 border-l-[2px] border-[#333]">
          <li
            className="nav-links px-4 cursor-pointer font-medium text-[#EDEDED] hover:scale-105 duration-200 link-underline"
          >
            <Link href="#">dApp</Link>
          </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#1F1F1F] to-[#191919] text-[#EDEDED]">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
            
          ))}
         <li
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link href="#">dApp</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
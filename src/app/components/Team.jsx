"use client"
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Hexagons from './Hexagons'
import Image from "next/image";

const teamMembers = [
   {
     name: `"Crypzom"`,
     jobTitle: "Zach",
     linkedinURL: "https://www.linkedin.com/in/member1",
     bio: "North American Entrepreneur and a Green Earth Enthusiast. Zach aka Crypzomhas diversified himself with many different skill sets such as Ag Research and Regenerative Farming Consulting, Renewable Energy, and Finance. He is also an Owner/Operator of a highly successful Automotive Repair and Performance Facility. Zach has had great success at fundraising and has been a Seed investor in DeFi for about three years now.",
     imageUrl: "/media/images/team/crypzom.png", // Replace with the actual image URL
   },
   {
    name: `"Doc"`,
     jobTitle: "Bryan",
     linkedinURL: "https://www.linkedin.com/in/member2",
     bio: "Real-world physician and clinical scientist. Entrepreneur and multi-national business owner. Experience with executive-level management with multi-million-dollar business operations. Extensive experience with fundraising and seed round investing as well as product development. Defi and Angel investor. Precious metals enthusiast.",
     imageUrl: "/media/images/team/doc.png", // Replace with the actual image URL
   },
   {
    name: `"NP"`,
     jobTitle: "Xiong",
     linkedinURL: "https://www.linkedin.com/in/member3",
     bio: "DeFi operator with executive-level experience in protocol initiation, development and oversight. Technical expert with coding experience and integration as well as developer management. Entrepreneur and owner of multiple businesses in the Asia Pacific region with successful capital raise experience. Non-degen crypto trader and investor.",
     imageUrl: "/media/images/team/np.png", // Replace with the actual image URL
   },
 ];



const Team = () => {
   const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
   const handleMemberClick = (index) => {
     setSelectedMemberIndex(index);
   };
    return (
        <>
        <section className="w-full flex min-h-full sm:min-h-screen overflow-hidden relative bg-[#131313] z-10" id="team">
        <Hexagons startingI={130} startingJ={160} />
        <article className="flex flex-col w-full lg:mx-[40px] xl:mx-[93px] items-center sm:justify-center relative">
            <div className="team-inner-left xs:opacity-100 sm:opacity-0 flex w-full xl:w-[85%] flex-col pt-12 sm:pb-14 px-8 lg:px-0">
          <div className="member-wrap md:w-full flex flex-col sm:flex-row items-center mb-6 md:mb-0 md:min-h-[350px] justify-center">
            <div className="profile-photo  xs:scale-50 sm:scale-0 sm:hidden w-[250px] h-[250px] md:flex justify-center items-center  rounded-full mr-10 ">
            <Image
                src={teamMembers[selectedMemberIndex]?.imageUrl}
                alt={`Picture of ${teamMembers[selectedMemberIndex]?.name}`}
                width={250}
                height={250}
                className="max-w-full"
              />
            </div>
            <div className="member-info xs:-mt-10 sm:mt-0 md:w-3/5">
              <div className="member-names flex flex-row xs:pb-2 sm:pb-8 items-center">
                <div className="names mr-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white"> {teamMembers[selectedMemberIndex]?.name}</h3>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{teamMembers[selectedMemberIndex]?.jobTitle}</h4>
                </div>
              {/*  <div className="linkedin">
                  <a href={teamMembers[selectedMemberIndex]?.linkedinURL}><Image src="/media/images/linkedin.svg" width={60} height={60} alt="LinkedIn" className="max-w-[25px] sm:max-w-[0px] sm:min-w-[30px]"/></a>
    </div> */}
              </div>
              <div className="member-desc md:text-base xs:text-sm sm:text-xl text-white">
                <p className="min-h-[130px] xs:text-sm sm:text-base md:text-base lg:text-xl">{teamMembers[selectedMemberIndex]?.bio}</p>
                </div>
          </div>
          </div>
          </div>  
          <div className="team-inner-right flex w-11/12 flex-wrap justify-evenly xl:justify-around">

            {/* team member */}
            {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`member-wrap single-member xs:pt-14 sm:pt-24 opacity-100 sm:opacity-50 z-10 cursor-pointer xs:w-[30%] sm:w-1/3 lg:w-[20%] lg:mr-[3%] xxl:max-w-[200px] mt-0 md:my-4 flex flex-col items-center ${
                selectedMemberIndex === index ? "active" : ""
              }`}
              onClick={() => handleMemberClick(index)}
            >
              <div className="member-thumb rounded-full mb-2 sm:w-[100px] sm:h-[100px] md:w-[200px]  md:h-[200px]">
                <Image
                  src={member.imageUrl}
                  alt={`Picture of ${member.name}`}
                  width={220}
                  height={220}
                  className="w-full"
                />
              </div>
              <div className="member-details flex flex-col-reverse md:flex-row justify-between sm:pb-8 items-center sm:mb-4 md:mb-0">
                <div className="names-small">
                  <h3 className="text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <h4 className="text-base font-bold text-white">
                    {member.jobTitle}
                  </h4>
                </div>
              {/* <div className="linkedin-small ml-3">
                  <a href={member.linkedinURL}>
                    <Image
                      src="/media/images/linkedin.svg"
                      width={30}
                      height={30}
                      alt="LinkedIn"
                      className="min-w-[20px]"
                    />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
          {/* end team member */}

          </div>
          </article>
         </section>
         </>
    )
}

export default Team
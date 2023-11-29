"use client"
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Hexagons from './Hexagons'
import Image from "next/image";

const teamMembers = [
   {
     name: "Name Surname",
     jobTitle: "CEO & Founder",
     linkedinURL: "https://www.linkedin.com/in/member1",
     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit pharetra mattis. Ut euismod malesuada ligula id dapibus. Fusce finibus felis nunc, et elementum dui commodo sit amet. Nullam est tortor, feugiat sed justo nec, ornare vestibulum velit. Pellentesque vitae turpis a urna hendrerit dictum. Nulla faucibus ante urna, in interdum leo vehicula eu. Donec vitae risus eget sapien rhoncus luctus vitae a turpis. Etiam faucibus leo at sem consectetur feugiat. Pellentesque facilisis eu est eget mattis.",
     imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
   },
   {
     name: "Name Surname",
     jobTitle: "Job title 2",
     linkedinURL: "https://www.linkedin.com/in/member2",
     bio: "Aenean accumsan tellus a libero vulputate, id congue elit suscipit. Fusce ligula quam, porttitor id enim eu, facilisis commodo lorem. Vestibulum semper interdum mauris vitae tincidunt. Aliquam a mollis leo. Pellentesque vehicula accumsan libero in aliquet. Nullam dignissim maximus tincidunt. Nullam viverra neque quis mattis tincidunt. ",
     imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
   },
   {
     name: "Name Surname",
     jobTitle: "Job title 3",
     linkedinURL: "https://www.linkedin.com/in/member3",
     bio: "Donec imperdiet, sem vitae rutrum condimentum, nulla erat laoreet libero, in accumsan mauris ante vulputate lorem. Duis ipsum sem, dapibus id pharetra vel, porta at leo. Sed eleifend tristique euismod. Nam venenatis, elit sit amet rhoncus suscipit, lectus libero ultrices velit, quis pretium neque nulla id dui. Nullam tincidunt mattis varius. ",
     imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
   },
   {
     name: "Name Surname",
     jobTitle: "Job title 4",
     linkedinURL: "https://www.linkedin.com/in/member4",
     bio: "Aliquam leo tellus, efficitur sit amet vulputate nec, auctor eget metus. Aenean aliquam nibh neque. Phasellus quis nulla id mi sodales malesuada non vitae quam. Vivamus vitae odio mattis, lacinia neque ut, imperdiet augue. Donec est lectus, ultrices in pellentesque id, rutrum nec erat. Vivamus condimentum purus nulla, eu lobortis mi luctus nec. Morbi laoreet elit et eleifend porttitor.",
     imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
   },
   {
     name: "Name Surname",
     jobTitle: "Job Title 5",
     linkedinURL: "https://www.linkedin.com/in/member5",
     bio: "Sed sed dapibus justo. Aenean lobortis et risus at semper. Donec sed aliquet eros. Aenean tincidunt bibendum vulputate. Quisque nec efficitur augue. Etiam et eros eget neque pellentesque commodo at sit amet erat. Mauris eu sodales felis, et dignissim augue. Curabitur quis orci suscipit ante semper condimentum.",
     imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
   },
   {
     name: "Name Surname",
     jobTitle: "Job Title 6",
     linkedinURL: "https://www.linkedin.com/in/member6",
     bio: "Sed tincidunt turpis et varius scelerisque. Ut porttitor tincidunt vestibulum. Aenean tincidunt quam eget elit commodo facilisis. Sed aliquet vehicula enim. Aliquam eu leo sapien. Maecenas vitae felis fermentum, dictum diam nec, vestibulum massa.",
     imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
   },
 ];



const Team = () => {
   const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
   const handleMemberClick = (index) => {
     setSelectedMemberIndex(index);
   };
    return (
        <>
        <section className="w-full flex min-h-full h-screen overflow-hidden relative bg-[#131313] z-10" id="team">
        <Hexagons startingI={130} startingJ={160} />
        <article className="flex flex-col w-full lg:mx-[40px] xl:mx-[93px] items-center justify-center">
            <div className="team-inner-left opacity-0 flex w-full xl:w-[85%] flex-col pt-12 pb-24 px-8 lg:px-0">
          <div className="member-wrap md:w-full flex flex-row items-center mb-14 md:mb-0 md:min-h-[350px] justify-center">
            <div className="profile-photo scale-0 hidden w-[250px] h-[250px] md:flex justify-center items-center border-4 border-white rounded-full mr-10  bg-white">
            <Image
                src={teamMembers[selectedMemberIndex]?.imageUrl}
                alt={`Picture of ${teamMembers[selectedMemberIndex]?.name}`}
                width={200}
                height={200}
                className="-mt-10 pb-4 max-w-full"
              />
            </div>
            <div className="member-info md:w-3/5">
              <div className="member-names flex flex-row pb-8 items-center">
                <div className="names mr-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white"> {teamMembers[selectedMemberIndex]?.name}</h3>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{teamMembers[selectedMemberIndex]?.jobTitle}</h4>
                </div>
                <div className="linkedin">
                  <a href={teamMembers[selectedMemberIndex]?.linkedinURL}><Image src="/media/images/linkedin.svg" width={60} height={60} alt="LinkedIn" className="max-w-[25px] sm:max-w-[0px] sm:min-w-[30px]"/></a>
                </div>
              </div>
              <div className="member-desc md:text-base xl:text-xl text-white">
                <p className="min-h-[130px]">{teamMembers[selectedMemberIndex]?.bio}</p>
                </div>
          </div>
          </div>
          </div>  
          <div className="team-inner-right flex w-11/12 flex-wrap justify-evenly xl:justify-around">

            {/* team member */}
            {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`member-wrap single-member pt-24 opacity-50 z-10 cursor-pointer w-1/3 lg:w-[20%] lg:mr-[3%] xxl:max-w-[200px] mt-0 md:my-4 flex flex-col items-center ${
                selectedMemberIndex === index ? "active" : ""
              }`}
              onClick={() => handleMemberClick(index)}
            >
              <div className="member-thumb border-4 border-white rounded-full mb-2 bg-white w-[150px] h-[150px]">
                <Image
                  src={member.imageUrl}
                  alt={`Picture of ${member.name}`}
                  width={200}
                  height={200}
                  className="-mt-10 pb-4 w-full"
                />
              </div>
              <div className="member-details flex flex-row justify-between pb-8 items-center">
                <div className="names-small">
                  <h3 className="text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <h4 className="text-base font-bold text-white">
                    {member.jobTitle}
                  </h4>
                </div>
                <div className="linkedin-small ml-3">
                  <a href={member.linkedinURL}>
                    <Image
                      src="/media/images/linkedin.svg"
                      width={30}
                      height={30}
                      alt="LinkedIn"
                      className="min-w-[20px]"
                    />
                  </a>
                </div>
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
import TimelineAnims from './timelineanim'
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/TimelineAnims.css";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
    return (
        <>
        <section className="timeline bg-[#131313] w-full block pb-[100px]">
        <TimelineAnims/>
        </section>
        <div id="team-pin"></div>
        </>
    )
};
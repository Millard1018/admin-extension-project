import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll(".sectionContainer");
const listItems = document.querySelectorAll(".navlistContainer li");


sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      listItems[index].classList.add("bg-slate-900", "rounded-4xl", "text-slate-100", "px-3");
    },

     onEnterBack: () => {
      listItems[index].classList.add("bg-slate-900", "rounded-4xl", "text-slate-100", "px-3");
    },
    onLeaveBack: () => {
      listItems[index].classList.remove("bg-slate-900", "rounded-4xl", "text-slate-100", "px-3");
    },

    onLeave: () => {
       listItems[index].classList.remove("bg-slate-900", "rounded-4xl", "text-slate-100", "px-3");
    }
  });
});
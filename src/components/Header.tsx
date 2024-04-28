import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import AppContext from "./AppContext";

const Header = (props: { finishedLoading: boolean; sectionsRef: any }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const context = useContext(AppContext);
  const scrollSizeY = useRef<number>(0);

  useEffect(() => {
    if (context?.sharedState?.portfolio?.NavBar?.IntervalEvent == null) {
      context.sharedState.portfolio.NavBar.IntervalEvent = () => {
        if (scrollSizeY.current === 0) {
          scrollSizeY.current = window.scrollY;
        } else {
          if (window.scrollY > 50) {
            if (window.scrollY > scrollSizeY.current) {
              if (RefNavBar.current) {
                RefNavBar.current.classList.remove("translate-y-0");
                RefNavBar.current.classList.add("-translate-y-full");
              }
            } else {
              RefNavBar.current?.classList.add("translate-y-0");
              RefNavBar.current?.classList.remove("-translate-y-full");
            }
            scrollSizeY.current = window.scrollY;
          }
        }
        console.log("Scrolling checking for NavBar ", scrollSizeY.current);
      };
    }
  }, [
    context?.sharedState?.portfolio?.NavBar,
    context?.sharedState?.portfolio?.NavBar?.IntervalEvent,
  ]);

  useEffect(() => {
    if (context?.sharedState?.portfolio?.NavBar?.scrolling == null) {
      context.sharedState.portfolio.NavBar.scrolling = true;
      scrollSizeY.current = 0;
      if (typeof window !== "undefined") {
        window.addEventListener(
          "scroll",
          context?.sharedState?.portfolio?.NavBar?.IntervalEvent
        );
      }
    }
  }, [
    context?.sharedState?.portfolio?.NavBar,
    context?.sharedState?.portfolio?.NavBar?.scrolling,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 10400);
  }, []);

  console.log("rotate from header : ", rotate);

  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: 0 },
        }}
        className={`fixed w-full ${
          ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
        } duration-4000 z-20 
      flex translate-y-0 justify-between bg-AAprimary px-6  py-2 transition sm:px-12 sm:py-4`}
      >
        <Logo finishedLoading={props.finishedLoading} />
        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />
        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};

export default Header;

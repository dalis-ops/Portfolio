import Header from "../components/Header";
import Startup from "../components/Startup";
import MyName from "../components//MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/SocialMediaArround";
import AboutMe from "../components/AboutMe";
import ThisCantBeReached from "../components/ThisCantBeReached";
import WhereIHaveWorked from "../components/WhereIHaveWorked/WhereIHaveWorked";
// import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import AppContext, { AppContextType } from "../components/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import SomethingIveBuilt from "~/components/SomethingIveBuilt/SomethingIveBuilt";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext<AppContextType>(AppContext);
  // const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if context is truthy before accessing its properties
    if (context) {
      clearInterval(context?.sharedState?.userdata?.timerCookieRef?.current);
      setTimeout(() => {
        setShowElement(true);
      }, 4500);
      setTimeout(() => {
        setShowThisCantBeReached(false);
      }, 5400);
      // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
      setTimeout(() => {
        setShowElement(false);
        setShowMe(true);
        if (context.sharedState) {
          context.sharedState.finishedLoading = true;
          context.setSharedState(context.sharedState);
        }
      }, 10400);
    }
  }, [context, context?.sharedState]);
  

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

 

  console.log("Portfolio Rendered...");
  const meta = {
    title: "Yugansh Agrawal - Software Developer",
    description: `I've been working on Software development for 2 years straight. Get in touch with me to know more.`,
    image: "/favicon.ico",
    type: "website",
  };
 
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>}
        {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        {context.sharedState.finishedLoading ? <AboutMe /> : <></>}
         {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
        {/* {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>} */}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
        {context.sharedState.finishedLoading ? (
          <Footer githubUrl={"https://github.com/dalis-ops/portfolio"} hideSocialsInDesktop={true} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}


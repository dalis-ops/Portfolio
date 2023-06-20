import React from "react";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";

export default function ThisCantBeReached() {
  const [ShowText, setShowText] = React.useState(false);
  let CenterWidth = 0;
  let CenterHeight = 0;
  React.useEffect(() => {
    setTimeout(function () {
      setShowText(true);
    }, 1000);
  }, []);
  if (typeof window !== "undefined") {
    if (window.innerHeight > 640) {
      CenterHeight = window.innerHeight / 2 - 160 - 20;
    } else {
      CenterHeight = window.innerHeight / 2 - 64 - 20;
    }
    if (window.innerWidth > 1280) {
      CenterWidth = window.innerWidth / 2 - 384 - 18;
    } else if (window.innerWidth > 1024) {
      CenterWidth = window.innerWidth / 2 - 192 - 18;
    } else if (window.innerWidth > 768) {
      CenterWidth = window.innerWidth / 2 - 144 - 18;
    } else if (window.innerWidth > 640) {
      CenterWidth = window.innerWidth / 2 - 96 - 18;
    } else {
      CenterWidth = window.innerWidth / 2 - 16 - 18;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.5 }}
      className="absolute flex h-screen w-full 
      flex-col space-y-5 
      bg-white px-4 py-16 sm:space-y-10 sm:px-24 
      sm:py-40 md:px-36 lg:px-48 xl:px-96
      "
    >
      <div className="relative flex  w-full flex-col space-y-4">
        {/* Icon for Desktop and Table */}

        <motion.div
          animate={{ y: CenterHeight, x: CenterWidth, scale: 2 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative h-10 w-9 "
        >
          <div className="absolute h-1 w-1/2 bg-gray-600"></div>
          <div className="absolute h-full w-1 bg-gray-600"></div>
          <div className="absolute bottom-0 h-1 w-full bg-gray-600"></div>
          <div className="absolute bottom-0 right-0 h-6 w-1 bg-gray-600"></div>

          {/* Left Eye */}

          <motion.div
            animate={{
              scaleY: [
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
              ],
            }}
            transition={{ scaleY: { delay: 1.5, duration: 1 } }}
            className="absolute left-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
          ></motion.div>

          {/* Right Eye */}
          <motion.div
            initial={{ opacity: 0, scaleY: "100%" }}
            animate={{
              opacity: 1,
              scaleY: [
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
              ],
            }}
            transition={{
              opacity: { delay: 1, duration: 0 },
              scaleY: { delay: 1.5, duration: 1 },
            }}
            className="absolute right-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
          ></motion.div>

          {/* Corner */}

          <motion.div
            animate={{ rotate: -90, x: 9, y: -7 }}
            transition={{
              rotate: { delay: 0.5, duration: 0.5 },
              x: { delay: 0.5, duration: 0.5 },
              y: { delay: 0.5, duration: 0.5 },
            }}
            className="absolute right-4 top-0 h-[18px] w-1 bg-gray-600"
          ></motion.div>
          <motion.div
            animate={{ rotate: 90, x: 6, y: -7 }}
            transition={{
              rotate: { delay: 0.5, duration: 0.5 },
              x: { delay: 0.5, duration: 0.5 },
              y: { delay: 0.5, duration: 0.5 },
            }}
            className="absolute right-0 top-[14px] h-1 w-4 bg-gray-600"
          ></motion.div>
          <motion.div
            initial={{ opacity: "100%" }}
            animate={{ opacity: "0%" }}
            transition={{ opacity: { delay: 0.5, duration: 0 } }}
            className=""
          >
            <div className="absolute right-3 top-0 h-1 w-1 bg-gray-600"></div>
            <div className="absolute right-0 top-[10px] h-1 w-1 bg-gray-600"></div>
            <div className="absolute right-1 top-[7px] h-[4px] w-[4px] bg-gray-600"></div>
            <div className="absolute right-2 top-[4px] h-[4px] w-[4px] bg-gray-600"></div>
          </motion.div>

          {/* Smile */}

          <div className="absolute bottom-[10px] left-3 h-[3px] w-3 bg-gray-600"></div>
          <motion.div
            animate={{ y: [0, -5, 0, -5, 0, -5] }}
            transition={{ y: { delay: 3, duration: 0.5 } }}
            className="absolute bottom-[7px] left-[9px] h-[3px] w-[3px] bg-gray-600"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -5, 0, -5, 0, -5, 0, -5],
            }}
            transition={{ y: { delay: 3, duration: 0.5 } }}
            className="absolute bottom-[7px] right-[9px] h-[3px] w-[3px] bg-gray-600"
          ></motion.div>
          {/* ! Hello animation text */}
        </motion.div>
        <motion.span
          initial={{
            y: CenterHeight + 50 - 20,
            x: CenterWidth - 13,
            opacity: 0,
          }}
          animate={{ y: CenterHeight + 50, opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.3 }}
          className="absolute text-2xl font-bold text-gray-600"
        >
          Hello!
        </motion.span>

        {/* Text start from here */}

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ opacity: { delay: 2, duration: 0.5 } }}
          className="flex  w-full flex-col space-y-8"
        >
          <span className="font-Header text-2xl text-gray-600">
            This site{" "}
            {ShowText ? (
              <motion.span
                animate={{ scale: ["100%", "120%"] }}
                transition={{ scale: { delay: 4, duration: 0.5 } }}
                className="font-bold"
              >
                actually can
              </motion.span>
            ) : (
              <span>can&apos;t</span>
            )}{" "}
            be reached
          </span>
          <span className="text-md text-gray-500">
            <span className="font-bold">www.anaflous.com </span>
            unexpectedly{" "}
            {ShowText ? (
              <motion.span
                animate={{ scale: ["100%", "140%"] }}
                transition={{ scale: { delay: 4, duration: 1 } }}
                className="font-bold"
              >
                opened
              </motion.span>
            ) : (
              <span>closed</span>
            )}{" "}
            the connection.
          </span>
          <div className="flex flex-col space-y-3">
            <span className="font-Header text-lg text-gray-400">Try:</span>
            <div className="flex flex-col space-y-2 pl-10">
              <span className="text-Header font-Header text-sm text-gray-400 sm:text-base">
                <span className="text-bold text-gray-500">&bull;</span> Checking
                the connection
              </span>
              <span className="text-Header font-Header text-sm text-blue-500 sm:text-base">
                <span className="text-bold text-gray-500">&bull;</span> Checking
                the proxy and the firewall
              </span>
              <span className="text-Header font-Header sm:text-bdase text-sm text-blue-500">
                <span className="text-bold text-gray-500">&bull;</span> Running
                Windows Network Diagnostics
              </span>
            </div>
          </div>
          <span className="text-sm text-gray-400">
            {ShowText ? (
              <motion.span
                animate={{ scale: ["100%", "120%"] }}
                transition={{ scale: { delay: 4, duration: 0.5 } }}
                className="font-bold"
              >
                SUCC_CONNECTION_OPENED
              </motion.span>
            ) : (
              <span>ERR_CONNECTION_CLOSED</span>
            )}
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ opacity: { delay: 2, duration: 0.5 } }}
        className=""
      >
        <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white sm:text-base">
          {ShowText ? "Start" : "Reload"}
        </button>
      </motion.div>
    </motion.div>
  );
}

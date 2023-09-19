import React from "react";
import ArrowIcon from "./Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex h-96 w-full flex-col items-center space-y-4 bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="h-5 w-5 flex-none text-AAsecondary md:h-6 md:w-5" />
        <div className="flex flex-row items-center space-x-2">
          <span className="font-sans text-sm text-AAsecondary  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-base text-AAsecondary">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="opacity-85 text-3xl font-bold tracking-wider text-gray-200 sm:text-4xl">
        Get In Touch
      </span>
      <p className="flex px-6 text-center font-Header tracking-wider text-gray-400 sm:px-16 md:w-[600px] md:px-0">
        Although I&apos;m currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi,
        I&apos;ll try my best to get back to you!
      </p>
      <div className="pt-4">
        <a
          href="mailto:yugchap@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <button
            className="rounded border-[1.5px] border-AAsecondary px-8 
                            py-4 font-mono text-sm text-AAsecondary "
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}

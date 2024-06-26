import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function GeospatialWorld() {
  const tasks = [
    {
      text: "Led the developement of Web applicaion using T3 Stack (Next JS, tRPC, Prisma and MongoDB), showcasing details of Company, User profiles and Case Studies.",
      keywords: ["T3 Stack", "Next JS", "Prisma", "MongoDB", "tRPC"],
    },
    {
      text: "This web app allow user to search by apply different filter and with help of map and also save their recent search and use it for later uses.",
      keywords: ["filter", "map"],
    },
    {
      text: "Led the developement of cross-platform mobile applicaion using React Native, showcasing details from Various events conducted.",
      keywords: ["React Native"],
    },
    {
      text: "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Next.js/React, AWS and Vercel.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Interfaced with developers on a daily basis, providing technological expertise.",
      keywords: ["Soft skills"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Development <span className="text-AAsecondary">@ App and Web Developer </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2022 - Present</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

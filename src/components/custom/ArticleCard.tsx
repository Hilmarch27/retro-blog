// src/components/ArticleCard.js
import React from "react";
// import Image from "next/image";
const ArticleCard = ({ title, author, date, content, imgSrc }: any) => {
  return (
    <div className="max-w-sm group border cursor-pointer hover:bg-[#FFC72C] border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] p-4 h-96 overflow-hidden">
      <div className=" w-full rounded-t-lg overflow-hidden ">
        <img src={imgSrc} alt={title} className="h-40 w-full object-cover   " />
      </div>
      <div className="px-4 py-2">
        <div className="flex justify-between items-center">
          <span className="text-black font-medium">{author}</span>
          <span className="text-black font-medium">{date}</span>
        </div>
        <div className="">
          <div className="font-bold text-xl mt-2">{title}</div>
          <p className="text-black text-base mt-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

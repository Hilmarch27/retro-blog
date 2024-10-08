import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroTop from "./(blog)/HeroTop";
import ArticleCard from "@/components/custom/ArticleCard";
const articles = [
  {
    title: "Power of JavaScript",
    author: "Rico Kurnia",
    date: "12 Juni 2024",
    content: "Learn about the reduce method in JavaScript arrays and how it.",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  },
  {
    title: "Understanding React",
    author: "Jane Doe",
    date: "20 Mei 2024",
    content: "A comprehensive guide to the fundamentals of React.",
    imgSrc: "https://reactjs.org/logo-og.png",
  },
  {
    title: "Understanding React",
    author: "Jane Doe",
    date: "20 Mei 2024",
    content: "A comprehensive guide to the fundamentals of React.",
    imgSrc: "https://reactjs.org/logo-og.png",
  },
  {
    title: "Understanding React",
    author: "Jane Doe",
    date: "20 Mei 2024",
    content: "A comprehensive guide to the fundamentals of React.",
    imgSrc: "https://reactjs.org/logo-og.png",
  },
  {
    title: "Understanding React",
    author: "Jane Doe",
    date: "20 Mei 2024",
    content: "A comprehensive guide to the fundamentals of React.",
    imgSrc: "https://reactjs.org/logo-og.png",
  },
  {
    title: "Understanding React",
    author: "Jane Doe",
    date: "20 Mei 2024",
    content: "A comprehensive guide to the fundamentals of React.",
    imgSrc: "https://reactjs.org/logo-og.png",
  },
  {
    title: "Understanding React",
    author: "Jane Doe",
    date: "20 Mei 2024",
    content: "A comprehensive guide to the fundamentals of React.",
    imgSrc: "https://reactjs.org/logo-og.png",
  },
  {
    title: "Understanding React",
    author: "Jane Doe",
    date: "20 Mei 2024",
    content: "A comprehensive guide to the fundamentals of React.",
    imgSrc: "https://reactjs.org/logo-og.png",
  },
  // Add 6 more articles here...
];

const MainPage = () => {
  return (
    <section>
      {/* <HeroSection/> */}
      {/* top hero */}
      <HeroTop />

      {/* end of top hero */}
      <div className="flex gap-4 justify-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="grid grid-cols-12 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="col-span-12 lg:col-span-4">
                  <ArticleCard
                    title={article.title}
                    author={article.author}
                    date={article.date}
                    content={article.content}
                    imgSrc={article.imgSrc}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MainPage;

"use client";
import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6ed9a447bec3496c970f7d99dff64156"
      );
      const data = await response.json();
      setNews(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="w-[100%] bg-blue-100">
      <marquee direction="right">Bulletin</marquee>
      <h1 className="flex justify-center items-center text-4xl">News</h1>
      <div className="flex justify-center items-center">
        {news && (
          <div className="flex flex-wrap justify-center items-center">
            {news.articles.map((article, index) => {
              if (article.title !== "[Removed]") {
                return (
                  <a
                    href={article.url}
                    target="_blank"
                    className="w-96 h-[409px] m-4 border-black border-2 flex-col shadow-lg"
                    key={index}
                  >
                    <img
                      src={article.urlToImage}
                      alt="1"
                      className="h-48 w-[100%] object-right-bottom "
                    ></img>
                    <h3>
                      <b>Source :</b> {article.source.name}
                    </h3>
                    <h3>
                      <b>Author :</b>
                      {article.author}
                    </h3>
                    <h3>
                      <b>Title :</b>
                      {article.title}
                    </h3>
                  </a>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

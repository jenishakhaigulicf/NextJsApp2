import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = async ({ params }) => {
  const newsSlug = params.news_slug;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className={"news-article"}>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          ></img>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetails;

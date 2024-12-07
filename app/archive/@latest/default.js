import NewsList from "@/component/news-list";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList newsList={latestNews} />
    </>
  );
};

export default LatestNewsPage;
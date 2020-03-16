import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const mapper = news => {
  console.log("articles ------>", news);
  return news.map(article => ({ ...article, id: uuidv4() }));
};

export const fetcher = async () => {
  const data = await axios.get(
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-16&sortBy=publishedAt&apiKey=138be9da72774ac5acbd0267b4890105"
  );
  return mapper(data.data.articles);
};

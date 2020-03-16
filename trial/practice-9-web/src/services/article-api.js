import axios from "axios";

// const BASE_URL = "https://hn.algolia.com/api/v1/search?query=";
const BASE_URL = "http://newsapi.org/v2/everything?q=";

/* eslint-disable-next-line */
export const fetchArticles = (query = "react") => axios.get(BASE_URL + query);

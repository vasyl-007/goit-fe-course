import axios from "axios";

axios.default.baseURL = "http://localhost:3000";

export const fetchArticles = () => {
  return axios.get(`/articles`).then(response => response.data);
};

export const fetchArticleWithId = (id) => {
  return axios.get(`/articles/${id}`).then(response => response.data);
};


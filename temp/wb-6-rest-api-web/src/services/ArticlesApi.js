import axios from "axios";

const fetchArticlesWithQuery = searchQuery => {
  return axios
    .get("https://hn.algolia.com/api/v1/search?query=react")
    .then(response => response.data.hits);
};

export default { fetchArticlesWithQuery };

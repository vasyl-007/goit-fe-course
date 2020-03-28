import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "react";

export const fetchArticlesWithQuery = (searchQuery = DEFAULT_QUERY) => {
  return (
    axios
      .get(`${BASE_URL}${searchQuery}`)
      // .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then(response => response.data.hits)
  );
};


// const fetchArticlesWithQuery = (searchQuery = DEFAULT_QUERY) => {
//   return (
//     axios
//       .get(`${BASE_URL}${searchQuery}`)
//       // .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
//       .then(response => response.data.hits)
//   );
// };

// export default { fetchArticlesWithQuery };

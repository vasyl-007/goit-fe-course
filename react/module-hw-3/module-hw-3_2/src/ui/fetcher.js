import axios from "axios";

export const fetchArticles = async (query, page) => {
  try {
    const data = await axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=15165152-90267132384ce65561ea758b7&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => data.data.hits);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

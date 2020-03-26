import axios from "axios";

export const fetchNews = async (value, page) => {
  try {
    const data = await axios
      .get(
        `https://pixabay.com/api/?q=${value}&page=${page}&key=15165152-90267132384ce65561ea758b7&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => data.data.hits);
    // console.log("data", data);
    //   `${process.env.REACT_APP_BASE_URL}/everything?q=${param}&from=2020-01-06&sortBy=publishedAt&apiKey=${process.env.REACT_APP_KEY}`,

    // const data = await axios.get(`https://pixabay.com/api/?q=${searchWord}&page=${pageNumber}&key=${15165152-90267132384ce65561ea758b7}_type=photo&orientation=horizontal&per_page=12}`
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

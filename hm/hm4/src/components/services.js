import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "5d541b775537fe62598d0f7b97768427";
const params = {
  api_key: API_KEY,
  language: "ru-RU"
};

export default {
  async getTrending() {
    try {
      const data = await axios.get("trending/all/day", { params });
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  },
  async getMovieDetails(id) {
    try {
      const data = await axios.get(`movie/${id}`, { params });
      return data;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  }
};

// ==================================
// import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";
// //   "https://api.themoviedb.org/3/trending/movie/day?api_key=c919f8b8c63efb348cc4277d55a583df";

// const API_KEY = "c919f8b8c63efb348cc4277d55a583df";

// const params = {
//   api_key: API_KEY,
//   language: "ru-RU"
// };

// export default {
//   getTrending() {
//     const data = axios.get("trending/all/day", { params });
//     return data;
//   }
// };

import React, { Component } from "react";
import s from "./App.module.css";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Button from "./components/button/Button";
import { fetchArticles } from "./ui/fetcher";
import Searchbar from "./components/searchbar/Searchbar";

class App extends Component {
  state = {
    searchValue: "",
    articles: [],
    pageNumber: 1,
    loading: false
  };
  //   async componentDidMount() {
  //     try {
  //       const data = await fetchArticles();
  //       this.setState({
  //         articles: data,
  //         loading: false
  //       });
  //     } catch (er) {
  //       console.log(er);
  //     }
  //   }

  getData = async e => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    try {
      const articles = await fetchArticles(
        this.state.searchValue,
        this.state.pageNumber
      );
      this.setState({
        articles: articles,
        loading: false
      });
    } catch (er) {
      console.log(er);
    }
  };
  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  handleLoadMore = async () => {
    console.log("wewewewew");
    try {
      const articles = await fetchArticles(
        this.state.searchValue,
        this.state.pageNumber + 1
      );
      console.log("articles", articles);

      // window.scrollTo({
      //   top: document.documentElement.scrollHeight,
      //   behavior: "smooth"
      // });

      this.setState(prevState => ({
        articles: [...prevState.articles, ...articles],
        pageNumber: prevState.pageNumber + 1
      }));
    } catch (er) {
      console.log(er);
    }
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar
          onSubmit={this.getData}
          onChange={this.handleChange}
          value={this.state.searchValue}
        />
        <ImageGallery articles={this.state.articles} />
        <Button onLoadMore={this.handleLoadMore} />
      </div>
    );
  }
}

export default App;

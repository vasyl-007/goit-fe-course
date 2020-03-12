import React, { Component } from "react";
import { fetchNews } from "../ui/fetcher.js";
import ImageGallery from "./ImageGallery";
import Button from "./Button.js";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchValue: "",
    articles: [],
    pageNumber: 1
  };
  //   async componentDidMount() {
  //     try {
  //       const data = await fetchNews();
  //       this.setState({
  //         articles: data,
  //         loading: false
  //       });
  //     } catch (er) {
  //       console.log(er);
  //     }
  //   }

  getData = async e => {
    e.preventDefault();
    try {
      const articles = await fetchNews(
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
  onLoadMore = async () => {
    console.log("wewewewew");
    try {
      const articles = await fetchNews(
        this.state.searchValue,
        this.state.pageNumber + 1
      );
      console.log("articles", articles);
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
      <>
        <header className={style.Searchbar}>
          <form className={style.Searchbar} onSubmit={this.getData}>
            <button type="submit" className={style.SearchFormButton}>
              <span className={style.SearchFormButtonLabel}>Search</span>
            </button>
            <input
              className={style.SearchFormInput}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.searchValue}
            />
          </form>
        </header>
        <ImageGallery articles={this.state.articles} />
        <Button onLoadMore={this.onLoadMore} />
      </>
    );
  }
}

export default Searchbar;

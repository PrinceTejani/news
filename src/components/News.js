import React, { Component } from "react";
import Spinner from "../Spinner";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";

export default class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 6
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number
  }
  constructor() {
    super();
    console.log("constructor is consoled");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalPages: 8,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }


  fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aa1ef540843e4e46849f715c4b3b039e&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          loading: false,
          totalPages: Math.ceil(json.totalResults / 8)
        });
      });
  };

  onClkPrev = () => {
    this.setState(
      {
        page: this.state.page - 1,
        loading: true,
      },
      () => this.fetchNews()
    );
  };

  onClkNext = () => {
    this.setState(
      {
        page: this.state.page + 1,
        loading: true,
      },
      () => this.fetchNews()
    );
  };

  render() {
    let aligne = {
      color: "#6e17b5",
    };
    const { page, totalPages } = this.state;
    const isFirstPage = page === 1;
    const isLastPage = page === totalPages;

    console.log("rndr");
    return (
        <div>
        <h2 className="mx-3 my-3">
          News APP - <b style={aligne}>Trendings</b>
        </h2>
        {this.state.loading && <Spinner />}

        <div className="container my-2">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <NewsItems
                  key={element.url}
                  imageUrl={element.urlToImage}
                  title={element.title ? element.title.slice(0, 43) : ""}
                  description={element.description ? element.description.slice(0,88) : ""}
                  newsUrl={element.url}
                />
              );
            })}
        </div>

        <div className="container d-flex justify-content-between my-5">
          <button
            className="my-button"
            onClick={this.onClkPrev}
            disabled={isFirstPage}
          >
            ← Previous
          </button>
          <button
            className="my-button"
            onClick={this.onClkNext}
            disabled={isLastPage}
          >
            Next →
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./News.css";

class NewsItems extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    
    let a = {
        cursor : "pointer",
        
    }
    return (
      <>
        <div className="card ">
          <img src={!imageUrl?"./src/logo.png":imageUrl} alt="..." />
          <div className="card-content">
            <h2>{title} ...</h2><br/>
            <p>{description} ...</p>
            <a href={newsUrl} className="read-more" style={a}>
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;

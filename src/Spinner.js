import React, { Component } from 'react'
import loading from "./Spinner.gif";
export default class Spinner extends Component {
  render() {

    let spinStyle = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }
    return (
      <div className='container' style={spinStyle}>
        <img src={loading} alt="Loading" width={70}/>
      </div>
    )
  }
}

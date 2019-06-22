import React, { Component } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default class Home extends Component {
  render() {
    return (
      <div className="container home-page">
        <div className="row justify-content-center  px-5">
          <h2>Home page</h2>
          {/* Textarea with icon prefix--> */}
          <div className="add-posts"></div>
        </div>
      </div>
    );
  }
}

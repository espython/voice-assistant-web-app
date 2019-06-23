import React, { Component } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default class Home extends Component {
  /**
   * Define our state
   */
  state = {
    posts: [],
  };

  post = null;

  onChange = e => {
    this.post = e.target.value;
  };

  onSubmit = e => {
    e.preventDefault();
    const { posts } = this.state;
    posts.push(this.post);
    this.setState({ posts });
    e.target.reset();
    console.log('Posts == ', posts);
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="container home-page">
        <div className="row justify-content-center  px-5">
          <div className="col-lg-12 text-center py-3">
            <h2>Home page</h2>
            {/* Post Form */}
            <div className="mt-3">
              <div className="card bg-dark p-3">
                <form onSubmit={e => this.onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What'sUp?"
                      id="mainInput"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="d-flex flex-row-reverse">
                    <button className="btn btn-dark" type="submit">
                      Add Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container justify-content-center">
          {posts.map((post, i) => (
            <div key={i} className="card bg-dark p-3 m-3">
              <p className="mx-auto my-auto">{post}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

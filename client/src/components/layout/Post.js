import React, { Component } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { createPost } from '../../utils/ApiReq';

export default class Post extends Component {
  state = { post: null, posts: [], postData: null };

  onChange = e => {
    this.post = e.target.value;
    this.setState({ post: this.post });
  };

  onSubmit = (e, context) => {
    e.preventDefault();
    const { post, posts } = this.state;

    posts.push(post);
    // const {posts} = context.state;
    context.setPosts(posts);

    // create post
    const userId = context.state.userData.id;
    const postData = { postText: post, author: userId };
    createPost(postData, context);

    e.target.reset();
  };

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="card bg-dark p-3">
          <form onSubmit={e => this.onSubmit(e, data)}>
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
      </React.Fragment>
    );
  }
}

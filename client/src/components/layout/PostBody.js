import React, { Component } from 'react';

import { FaRegThumbsUp, FaComment } from 'react-icons/fa';

export default class PostBody extends Component {
  state = {
    styles: {
      like: '',
    },
    isClicked: false,
    post: null,
    posts: [],
    showComment: false,
  };

  post = null;

  like = () => {
    const { isClicked } = this.state;
    console.log('isClicked1', isClicked);
    if (!isClicked) {
      const styles = { like: 'active-icon' };
      this.setState({ styles });
      this.setState({ isClicked: true });
    } else {
      const styles = { like: '' };
      this.setState({ styles });
      this.setState({ isClicked: false });
    }
  };

  addComment = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.post = e.target.value;
    this.setState({ post: this.post });
  };

  onChangeComment = e => {};

  showComment = (e, context) => {
    e.preventDefault();
    const { post, posts, showComment } = this.state;
    !showComment
      ? this.setState({ showComment: true })
      : this.setState({ showComment: false });
  };

  render() {
    const { post, i } = this.props;
    const { styles, showComment } = this.state;
    return (
      <div>
        <div key={i} className="card bg-dark p-3 m-3">
          <div className="card-body">
            <p className="card-text">{post}</p>
          </div>

          <div className="d-flex flex-row justify-content-end mt-2">
            <div className="d-flex flex-column px-2 ml-3 post-icon">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={e => this.like()}
              >
                <FaRegThumbsUp className={styles.like} />
              </button>
            </div>
            <div className="d-flex flex-column px-2 mx-3 post-icon">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={e => this.showComment(e)}
              >
                <FaComment />
              </button>
            </div>
          </div>
          {/* add comment componnent */}
          {showComment && (
            <div className="card bg-dark p-3">
              <form onSubmit={e => this.addComment(e, data)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Comment?"
                    id="mainInput"
                    onChange={this.onChange}
                  />
                </div>

                <div className="d-flex flex-row-reverse">
                  <button className="btn btn-dark" type="submit">
                    Add Comment
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

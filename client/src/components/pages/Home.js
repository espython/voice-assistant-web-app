import React, { Component, Fragment } from 'react';

import { createPost } from '../../utils/ApiReq';
import { AppConsumer } from '../../ContextProvider';
import { Post, Comment, PostBody } from '../layout';

export default class Home extends Component {
  /**
   * Define our state
   */
  state = {
    styles: {
      like: '',
    },
    isClicked: false,
    post: null,
    posts: [],
    showModal: false,
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

  addComment = () => {
    const { showModal } = this.state;
    !showModal
      ? this.setState({ showModal: true })
      : this.setState({ showModal: false });
    console.log('showModel', showModal);
  };

  render() {
    const { styles, showModal } = this.state;
    return (
      <Fragment>
        <div className="container home-page">
          <div className="row justify-content-center py-3">
            <h2 className="home-page-title">Home page</h2>
          </div>
          <div className="row justify-content-center  px-5">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Connecting"
            />

            <div className="col-lg-12 text-center py-3">
              {/* Post Form */}
              <div className="mt-3">
                <AppConsumer>{context => <Post data={context} />}</AppConsumer>
              </div>
            </div>
          </div>
          <AppConsumer>
            {context => {
              const { posts } = context.state;
              return (
                <div className="container justify-content-center">
                  {posts
                    ? posts.map((post, i) => (
                        <PostBody post={post} i={i} styles={styles} />
                      ))
                    : null}
                </div>
              );
            }}
          </AppConsumer>
        </div>
      </Fragment>
    );
  }
}

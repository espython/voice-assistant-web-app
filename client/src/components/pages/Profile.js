import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { AppConsumer, AppContext } from '../../ContextProvider';
import { PostBody } from '../layout';

export default class Profile extends Component {
  /**
   * Define state & Member vars
   */
  state = {};

  static contextType = AppContext;

  componentDidMount() {
    const { context } = this;
    const userId = context.state.userData.id;
    console.log('Context', context);

    this.getUserPosts(userId, context);
  }

  getUserPosts = async (userId, context) => {
    try {
      const userPosts = await axios.get(`/api/posts/user/${userId}`);
      const { data, status } = await userPosts;
      console.log('userPosts', { data, status });
      context.setProfilePosts(data);
    } catch (error) {
      console.log('profile page', error.response);
    }
  };

  render() {
    return (
      <Fragment>
        <AppConsumer>
          {context =>
            context.state.userPosts ? (
              <div className="container  profile-page">
                {context.state.userPosts.map((post, i) => (
                  <PostBody key={i} post={post.post} i={i} />
                ))}
              </div>
            ) : (
              <h2 className="profile-page">Loading ...</h2>
            )
          }
        </AppConsumer>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { AppConsumer, AppContext } from '../../ContextProvider';
import { PostBody } from '../layout';

import profileImage from '../../static/profile.jpg';

export default class Profile extends Component {
  /**
   * Define state & Member vars
   */

  static contextType = AppContext;

  state = {};

  componentDidMount() {
    const { context } = this;
    const userId = context.state.userData.id;
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
    const { context } = this;
    const userName = context.state.userData.name;
    return (
      <Fragment>
        <AppConsumer>
          {context =>
            context.state.userPosts ? (
              <div className="container  profile-page">
                <div className="text-center mt-5 p-3">
                  <img src={profileImage} className="profile-img" alt="..." />
                  <div className="container text-center mt-2 p-2">
                    <h5 className="profile-text">{userName}</h5>
                  </div>
                </div>
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

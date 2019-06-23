import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { AppConsumer } from '../../ContextProvider';
import { Post } from '../layout';

export default class Profile extends Component {
  /**
   * Define state & Member vars
   */
  state = {};

  componentDidMount() {}

  getUserPosts = async (userId, context) => {
    try {
      const userPosts = await axios.get(`/api/posts/user:${userId}`);
      console.log('userPosts', userPosts);
      context.setProfilePosts(userPosts);
    } catch (error) {
      console.log('profile page', error.response);
    }
  };

  render() {
    return (
      <Fragment>
        <AppConsumer>
          {context => {
            const userId = context.state.userData.id;
            console.log('Context', context);

            this.getUserPosts(userId, context);
            return context.state.userPosts ? (
              <div className="row justify-content-center profile-page">
                {context.profilePosts.map((post, i) => (
                  <Post />
                ))}
              </div>
            ) : (
              <h2 className="profile-page">Loading ...</h2>
            );
          }}
        </AppConsumer>
      </Fragment>
    );
  }
}

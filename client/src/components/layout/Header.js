import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Artyom from 'artyom.js';
import { AppConsumer, AppContext } from '../../ContextProvider';
/**
 * custom modules
 */
import { logoutUser } from '../../utils/ApiReq';

/**
 * starting of our class
 */
export default class Header extends Component {
  /**
   * Manage state & live cycle Method
   */
  static contextType = AppContext;

  Jarvis = new Artyom();

  componentDidMount() {
    console.log('hello fro header');
    window.addEventListener('load', this.Jarvis.say('Hello world !'));
    this.Jarvis.say('Hello world !');
    console.log('hello fro header22');

    // this.jarvisGoodMorningCommand();
    this.onDocumentLoadEventListener();
  }

  jarvisGoodMorningCommand = () => {
    // Or the artisan mode to write less
    console.log('Iam Jarvis');
    this.Jarvis.on(['Good morning']).then(function(i) {
      console.log('Triggered');
    });
  };

  onDocumentLoadEventListener = () => {};

  render() {
    return (
      <nav className="header-banner pt-2">
        <div className="container">
          <div className="row nav-row">
            <Link to="/" className="logo">
              <h4>Social-Network</h4>
            </Link>
            <AppConsumer>
              {context => (
                <Fragment>
                  {context.state.isAuthenticated ? (
                    <div className="d-flex flex-row align-items-center p-2">
                      <Link to="/home">
                        <h5 className="mr-3">Home</h5>
                      </Link>
                      <Link to="/profile">
                        <h5>profile</h5>
                      </Link>
                      <Link to="/" onClick={e => logoutUser(context)}>
                        <h5 className="ml-3 logout-btn">logout</h5>
                      </Link>
                    </div>
                  ) : (
                    <div className="menu-items">
                      <Link to="/login">
                        <h6>Login</h6>
                      </Link>
                      <Link to="/signup">
                        <h6>Signup</h6>
                      </Link>
                    </div>
                  )}
                </Fragment>
              )}
            </AppConsumer>
          </div>
        </div>
      </nav>
    );
  }
}

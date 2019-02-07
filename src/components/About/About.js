import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { selectPostAction, removePostAction } from '../../actions/simpleAction';
import { getPosts, getSelectedPosts } from '../../selectors/selectedPosts';

import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Image src="assets/person-girl-flat.png" className="about-profile-pic" rounded />
            <h3>Frank THE Tank</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation
               ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}


const mapToProps = state => ({
  allPosts: getPosts(state),
  selectedPosts: getSelectedPosts(state),
});


const mapDispatchToProps = {
  selectPostAction,
  removePostAction,
};

export default connect(mapToProps, mapDispatchToProps)(About);

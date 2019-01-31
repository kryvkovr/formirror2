import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Jumbotron, Button, Grid, Row, Col, Image } from 'react-bootstrap';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        HOME
      </div>
    );
  }
}





const mapToProps = state => ({
  // allPosts: getPostsSelector(state),
  // selectedPosts: getSelectedPostsSelector(state),
})


const mapDispatchToProps = {
  // selectPostAction,
  // removePostAction,
}

export default connect(mapToProps, mapDispatchToProps)(Home);
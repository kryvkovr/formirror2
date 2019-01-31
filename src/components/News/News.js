import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPostAction, removePostAction } from '../../actions/simpleAction'
import { getPostsSelector, getSelectedPostsSelector } from '../../selectors/selectedPosts';


import { Button } from 'react-bootstrap';

class News extends Component {

  render() {
    return (
      <div className="container">
        NEWS
      </div>
    );
  }
}





const mapToProps = state => ({
  allPosts: getPostsSelector(state),
  selectedPosts: getSelectedPostsSelector(state),
})


const mapDispatchToProps = {
  selectPostAction,
  removePostAction,
}

export default connect(mapToProps, mapDispatchToProps)(News);
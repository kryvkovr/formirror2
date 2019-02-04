import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPostAction, removePostAction } from '../../actions/simpleAction';
import { getPostsSelector, getSelectedPostsSelector } from '../../selectors/selectedPosts';


class News extends Component {
  constructor() {
    super();
    this.state = { page: 'news' };
  }

  render() {
    return (
      <div className="container">
        NEWS {this.state.page}
      </div>
    );
  }
}


const mapToProps = state => ({
  allPosts: getPostsSelector(state),
  selectedPosts: getSelectedPostsSelector(state),
});


const mapDispatchToProps = {
  selectPostAction,
  removePostAction,
};

export default connect(mapToProps, mapDispatchToProps)(News);

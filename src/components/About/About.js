import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPostAction, removePostAction } from './actions/simpleAction'
import { getPostsSelector, getSelectedPostsSelector } from './selectors/selectedPosts';

import { Button } from 'react-bootstrap';

class App extends Component {


  // renderAllPosts = (posts) => {
  //   return posts.map(post => (
  //     <div key={`${post.id}-post`} style={styles.post}>
  //       <Button
  //         variant="success"
  //         onClick={() => this.props.selectPostAction(post.id)}
  //         style={styles.addButton}
  //       >

  //         Success
  //       </Button>
  //       {post.post}
  //     </div>
  //   ))
  // }

  // renderSelectedPosts = (posts) => {
  //   return posts.map(post => (
  //     <div key={`${post.id}-post`} style={styles.post}>
  //       <Button
  //         variant="danger"
  //         onClick={() => this.props.removePostAction(post.id)}
  //         style={styles.removeButton}
  //       >
  //         Danger
  //       </Button>
  //       {post.post}
  //     </div>
  //   ))
  // }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            1
          </div>
          <div className="col">
            2
          </div>
        </div>

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

export default connect(mapToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { selectPostAction, removePostAction } from './actions/simpleAction'

import { getPostsSelector, getSelectedPostsSelector } from './selectors/selectedPosts';

class App extends Component {


  renderAllPosts = (posts) => {
    return posts.map(post => (
      <div key={`${post.id}-post`} style={styles.post}>
        <button
          onClick={() => this.props.selectPostAction(post.id)}
          style={styles.addButton}>
          +
        </button>
        {post.post}
      </div>
    ))
  }

  renderSelectedPosts = (posts) => {
    return posts.map(post => (
      <div key={`${post.id}-post`} style={styles.post}>
        <button
          onClick={() => this.props.removePostAction(post.id)}
          style={styles.removeButton}>
          -
        </button>
        {post.post}
      </div>
    ))
  }


  render() {
    return (
      <div style={styles.mainContainer}>
        <header style={styles.container}>
          Hello world
        </header>
        <button onClick={this.simpleAction}>Test redux action</button>

        <h1>All posts</h1>
        <div style={styles.allPosts}>
          {this.renderAllPosts(this.props.allPosts)}
        </div>

        <h1>Selected posts</h1>
        <div style={styles.allPosts}>
          {this.renderSelectedPosts(this.props.selectedPosts)}
        </div>

      </div>
    );
  }
}


const styles = {
  mainContainer: {
    height: '100%',
    backgroundColor: '#333',
  },
  post: {
    height: 50,
    backgroundColor: '#999',
    border: '1px solid #444',
    margin: 10,
    position: 'relative',
  },
  container: {
    backgroundColor: '#888',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
  },
  addButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'green',
    width: 40,
    height: 40,
  },
  removeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'red',
    width: 40,
    height: 40,
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
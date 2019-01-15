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
          Available script
        </header>

        <div style={styles.textContainer}>
          <div style={styles.leftContainer}>

            <h1>All posts</h1>
            <div style={styles.allPosts}>
              {this.renderAllPosts(this.props.allPosts)}
            </div>

            <h1>Selected posts</h1>
            <div style={styles.allPosts}>
              {this.renderSelectedPosts(this.props.selectedPosts)}
            </div>
          </div>

          <div style={styles.rightContainer}>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
            explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          </div>
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
    width: 40,
    height: 40,
  },
  textContainer: {
    fontSize: 20,
    display: 'flex',
    paddingBottom: 30,
  },
  leftContainer: {
    flex: 3,
    // float: 'left',
    // width: '30%',
    backgroundColor: '#888',
  },
  rightContainer: {
    flex: 2,
    // float: 'left',
    // width: '70%',
    backgroundColor: '#777',
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
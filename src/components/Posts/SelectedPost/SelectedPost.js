import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getSelectedPosts } from '../../../selectors/selectedPosts';
import './SelectedPost.css';

const SelectedPost = (props) => {
  return (
    <div>
      <h3>SELECTED POSTS</h3>
      {props.posts.map(post => (
        <Row>
          <Col className="post-title">
            <Link to={`/posts/${post.id}`}>
              <Button>{post.title}</Button>
            </Link>
          </Col>
        </Row>
      ))}
    </div>
  );
}


const mapToProps = state => ({
  posts: getSelectedPosts(state),
});


const mapDispatchToProps = {

};

export default connect(mapToProps, mapDispatchToProps)(SelectedPost);

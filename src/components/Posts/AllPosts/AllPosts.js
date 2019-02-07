import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPosts } from '../../../selectors/selectedPosts';
import './AllPosts.css';

const AllPosts = (props) => {
  return (
    <div>
      <h3>ALL POSTS</h3>
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
  posts: getPosts(state),
});


const mapDispatchToProps = {

};

export default connect(mapToProps, mapDispatchToProps)(AllPosts);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { getPostFromUrl } from '../../../selectors/selectedPosts';
import './Post.css';

class Post extends Component {
  constructor() {
    super();
    this.state = { page: 'news' };
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        <Jumbotron>
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.post}</p>
          <Button onClick={this.goBack}>Go back</Button>
        </Jumbotron>
      </Container>
    );
  }
}


const mapToProps = (state, props) => ({
  post: getPostFromUrl(state, props),
});


const mapDispatchToProps = {

};

export default connect(mapToProps, mapDispatchToProps)(Post);

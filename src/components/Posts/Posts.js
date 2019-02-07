import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import queryString from 'query-string';
import AllPosts from './AllPosts/AllPosts';
import { getLocation } from '../../selectors/navigationSelector';
import SelectedPost from './SelectedPost/SelectedPost';
import './Posts.css';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      showOnlySelectedPosts: false,
    };
  }

  componentDidMount = () => {
    const query = queryString.parse(this.props.location.search);
    if (query.onlyselected) {
      const bool = query.onlyselected === 'true';
      this.showOnlySelectedPosts(bool);
    }
  }

  showOnlySelectedPosts = (bool) => {
    this.setState({ showOnlySelectedPosts: bool });
  }

  renderAllPosts = posts => posts.map(post => (
    <Row>
      <Col className="post-title">
        <Link to={`/posts/${post.id}`}>
          <Button>{post.title}</Button>
        </Link>
      </Col>
    </Row>
  ));


  render() {
    return (
      <Container>
        <Link
          to={{ pathname: '/posts', search: '?onlyselected=false' }}
          onClick={() => this.showOnlySelectedPosts(false)}
        >
          <Button>All Posts</Button>
        </Link>
        <Link
          to={{ pathname: '/posts', search: '?onlyselected=true' }}
          onClick={() => this.showOnlySelectedPosts(true)}
        >
          <Button>Selected Posts</Button>
        </Link>
        {this.state.showOnlySelectedPosts ? <SelectedPost /> : <AllPosts />}
      </Container>
    );
  }
}


const mapToProps = (state, props) => ({
  pathURL: getLocation(state, props),
});

export default connect(mapToProps, null)(Posts);

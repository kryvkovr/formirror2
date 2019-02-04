import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { selectPostAction, removePostAction } from '../../actions/simpleAction';
import { getPostsSelector, getSelectedPostsSelector } from '../../selectors/selectedPosts';

import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',

      loading: false,
      errors: {},
    };
  };

  onChange = (e) => {
    this.setState({
      email: e.target.value;
    })
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
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

export default connect(mapToProps, mapDispatchToProps)(Login);

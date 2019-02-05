import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, Image, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../InlineErrors/InlineError';
import './Login.css';
import { login } from '../../actions/auth';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: '',
        password: '',
      },
      loading: false,
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({
      errors,
    });
    if (!errors.email && !errors.password) {
      this.props.login(this.state.data)
        .then(() => this.props.history.push('/'))
        .catch((err) => {
          const message = err.response.data.errors.global;
          this.setState({
            errors: {
              email: message,
              password: message,
            },
          });
        });
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'No password';
    return errors;
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit} noValidate>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={this.state.data.email}
                onChange={this.onChange}
                isValid={this.state.data.email && !this.state.errors.email}
                isInvalid={this.state.errors.email}
              />
              {this.state.errors.email && <InlineError text={this.state.errors.email} />}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.data.password}
                onChange={this.onChange}
                isValid={this.state.data.password && !this.state.errors.password}
                isInvalid={this.state.errors.password}
              />
              {this.state.errors.password && <InlineError text={this.state.errors.password} />}
            </Form.Group>
          </Form.Row>

          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);

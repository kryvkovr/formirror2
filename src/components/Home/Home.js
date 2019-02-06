import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = { page: 'home' };
  }

  render() {
    return (
      <div>
        <Container>
          {/* Jumbtron */}
          <Row>
            <Col>
              <Jumbotron>
                <h2> WElcome to {this.state.page}</h2>
                <p>How to buikd site with react router and bootstrap</p>

                {!this.props.isAuthorized ?
                  (
                    <Link to="/login">
                      <Button>Login</Button>
                    </Link>
                  ) : (
                    <Button onClick={this.props.logout}>LogOut</Button>
                  )
                }
              </Jumbotron>
            </Col>
          </Row>

          {/* main content */}
          <Row>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/person-girl-flat.png" circle className="profile-pic" />
              <h3>Frank</h3>
              <p>Thats acroolet threee. We will send him to wathington</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/person-girl-flat.png" circle className="profile-pic" />
              <h3>John</h3>
              <p>Thats acroolet threee. We will send him to wathington</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/person-girl-flat.png" circle className="profile-pic" />
              <h3>Debbie</h3>
              <p>Thats acroolet threee. We will send him to wathington</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapToProps = state => ({
  isAuthorized: !!state.userReducer.token,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapToProps, mapDispatchToProps)(Home);

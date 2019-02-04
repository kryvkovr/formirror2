import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = { page: 'home' };
  }

  render() {
    console.log(process.env.REACT_APP_API_URL);
    console.log(process.env.NODE_ENV);
    return (
      <div>
        <Container>
          {/* Jumbtron */}
          <Row>
            <Col>
              <Jumbotron>
                <h2> WElcome to {this.state.page}</h2>
                <p>How to buikd site with react router and bootstrap</p>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </Jumbotron>
            </Col>
          </Row>

          {/* main content */}
          {/* <Row>
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
          </Row> */}
        </Container>
      </div>
    );
  }
}

const mapToProps = state => ({

});


const mapDispatchToProps = {
};

export default connect(mapToProps, mapDispatchToProps)(Home);

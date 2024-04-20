import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {

    return (
      <Container>
        {/* Jumbtron */}
        <Row>
          <Col>
            <Jumbotron>
              <h2> Welcome2</h2>
              <p>How to buikd site with react router and bootstrap</p>
              <Link to='/about'>
                <Button >About</Button>
              </Link>
            </Jumbotron>
          </Col>
        </Row>

        {/* main content */}
        <Row>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/avatar-1.png" circle className="profile-pic" />
            <h3>Frank</h3>
            <p>Thats acroolet threee. We will send him to wathington</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/avatar-2.png" circle className="profile-pic" />
            <h3>John</h3>
            <p>Thats acroolet threee. We will send him to wathington</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/avatar-3.png" circle className="profile-pic" />
            <h3>Debbie</h3>
            <p>Thats acroolet threee. We will send him to wathington</p>
          </Col>


        </Row>


      </Container>

    );
  }
}





const mapToProps = state => ({

})


const mapDispatchToProps = {
}

export default connect(mapToProps, mapDispatchToProps)(Home);
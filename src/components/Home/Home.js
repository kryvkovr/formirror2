import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {

    return (

      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h2> WElcome to code life</h2>
              <p>How to buikd site with react router and bootstrap</p>
            </Jumbotron>
            <Link to='/about'>
              <Button variant="success">About</Button>
            </Link>
          </Col>
        </Row>



        <Jumbotron>
          <h2> WElcome to code life</h2>
          <p>How to buikd site with react router and bootstrap</p>
        </Jumbotron>
        <Link to='/about'>
          <Button variant="success">About</Button>
        </Link>



      </Container>

    );
  }
}





const mapToProps = state => ({

})


const mapDispatchToProps = {
}

export default connect(mapToProps, mapDispatchToProps)(Home);
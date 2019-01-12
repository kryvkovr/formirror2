import React, { Component } from 'react';

import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction'

class App extends Component {


  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div style={styles.mainContainer}>
        <header style={styles.container}>
          Hello world
        </header>
        <button onClick={this.simpleAction}>Test redux action</button>

        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}



const styles = {
  mainContainer: {
    height: '100%',
    backgroundColor: '#483',
  },
  container: {
    backgroundColor: '#555',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
  }
}


const mapStateToProps = state => ({
  ...state
})


const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
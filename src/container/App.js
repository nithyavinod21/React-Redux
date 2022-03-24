import React, { Component } from 'react';
// All action disptach
// display the food items
// import the connect method from react redux

import * as actions from '../actions';
import DisplayItems from '../components/DisplayItems';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

 class App extends Component {
    componentDidMount(){
        // dispatch the action here
        this.props.getFoodItems();
    }
  render() {
    return (
      <div>
        <h1>React Redux Component</h1>
        <DisplayItems list={this.props.finalState} />
      </div>
    );
  }
}
App.propTypes ={
    getFoodItems:PropTypes.func.isRequired
}

const mapStateToProps = (state) =>{
    return({
        //state.food is reducer , reducer is the one maintains state transition
        finalState:state.food,       
    })
}
export default connect(mapStateToProps,actions)(App);
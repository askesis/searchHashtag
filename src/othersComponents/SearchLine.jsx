import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import * as Actions from '../actions/Actions.js';
import { connect } from 'react-redux';

class SearchLine extends Component{

  handleInput(e){
    this.props.setQuestions(e.target.value);
 
    console.log('3', this.props.questions)
    
  }

  formSubmit(e){
    e.preventDefault();
    
  }

  render(){
    return(
      <Panel>
        <form onSubmit={this.formSubmit}>
          <input type="text" name="questions" placeholder="search" value={this.props.questions} onChange={this.handleInput.bind(this)}/>
          <input type="submit"/>
        </form>
      </Panel>
      
    )
  }
}

const SearchLineWithRedux = connect(
  state => ({
     questions : state.questions,
    }),
    {
      setQuestions: Actions.setQuestions,
      setAnswer: Actions.setAnswer,
    }
)(SearchLine)

export default SearchLineWithRedux;
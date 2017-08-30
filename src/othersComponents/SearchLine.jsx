import React, { Component } from 'react';
import { Panel,FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

import * as Actions from '../actions/Actions.js';
import { connect } from 'react-redux';

class SearchLine extends Component{

  handleInput(e){
    this.props.setQuestions(e.target.value);    
  }

  formSubmit(e){
    e.preventDefault();
    
  }

  render(){
    return(
      <Panel>
        <form onSubmit={this.formSubmit.bind(this)}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>#</InputGroup.Addon>
              <FormControl placeholder="search" type="text" value={this.props.questions} onChange={this.handleInput.bind(this)} />
            </InputGroup>
          </FormGroup>
          <Button type="submit">показать алерт</Button>
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
      showAlert: Actions.showAlert,
    }
)(SearchLine)

export default SearchLineWithRedux;
import React, { Component } from 'react';
// import { Panel } from 'react-bootstrap';
// import VK from 'vk-api-help';
import * as Actions from '../actions/Actions.js';
import { connect } from 'react-redux';

class GetResultSearch extends Component {
 
  render(){
    const template = this.props.data.map( (item, index) =>{
      const {owner_id, text} = item;
      const owner_id_mutation = (owner_id < 0 )? "group" + String(owner_id).substring(1) : "user" + owner_id;
      return (
        <p key={index} > {owner_id_mutation}: {text} </p>
      )
    });
    return(
      <div>
       
        {template}
      </div>
    )
  }
}

const GetResultSearchWithRedux = connect(
  state => ({
     questions : state.questions,
     answer: state.answer
    }),
    {
    setQuestions: Actions.setQuestions,
    }
)(GetResultSearch)

export default GetResultSearchWithRedux;
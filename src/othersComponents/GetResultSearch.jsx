import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import VK from 'vk-api-help';
import * as Actions from '../actions/Actions.js';
import { connect } from 'react-redux';

import Alert from 'react-s-alert';

// mandatory
import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';


class GetResultSearch extends Component {
   
  handleClick3(e) {
        e.preventDefault();
        Alert.error('', {
            position: 'bottom-right',
            effect: 'slide',
            timeout: 'none'
        });
    }

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
        <Alert stack={{limit: 3}} /> 
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
    setAnswer: Actions.setAnswer,
    }
)(GetResultSearch)

export default GetResultSearchWithRedux;
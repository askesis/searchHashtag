import React, {Component} from 'react';
 //var VK = require('vk-api-help');
import GetResultSearch from './GetResultSearch';
import { Button } from 'react-bootstrap';
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

// import getDataFromVk from './getDataFromVk.js';
import VK from 'vk-api-help';

class SearchResult extends Component {
  constructor(props){
    super(props);

    this.state={
      answer:[],
    }
  }

getDataFromVk(q){
 const vkRequest = new VK.VkRequest('eccf4148e22b7e6127d164a77305dd373d9b0c4c19d99166b310d61e9d763e2af4d7a7f81a416439bc353');
 const self = this;
  vkRequest.method('newsfeed.search', { q:"#"+q, count:3 })
  .then(function(response) {
    const a = response.response.items.map( (item, index) => {
      return item; 
    });
   console.log(a);
    self.setState({
      answer: a,
    });
    return a;
  })
  .catch({ name: 'VkApiError' }, function(error) {
    console.log(`VKApi error ${error.error_code} ${error.error_msg}`);
      switch(error.error_code) {
        case 14:
            console.log('Captcha error');
        break;	
        case 5:
            console.log('No auth');
        break;
        default:
          console.log(error.error_msg);
      }
  })
  .catch(function(error) {
    console.log(`Other error ${error.error_msg}`);
  });
}

clickBtn(){
  this.getDataFromVk(this.props.questions);
  console.log(this.props.answer)
}

  render(){
    return(
      <div>
        <p>some paragraph</p>
      
        <Alert stack={{limit: 3}} />
        <Button onClick={ this.clickBtn.bind(this) }>go find!</Button>
        <GetResultSearch data={this.state.answer} />
      </div>
    )
  }
}

const SearchResultWithRedux = connect(
  state => ({
     questions : state.questions,
     answer: state.answer,
    }),
    {
      setQuestions: Actions.setQuestions,
      setAnswer: Actions.setAnswer,
    }
)(SearchResult)

export default SearchResultWithRedux;
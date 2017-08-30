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
  const vkRequest = new VK.VkRequest('0036c8ba02b2ba29e60ef424aea05ffd165123dfdddad8e0ceb318b8c5e9a5c2b249979a183d4743321de');
  const self = this;
  let countN = 0;
  vkRequest.method('newsfeed.search', { q:"#"+q, count:100 })
  
  .then(function(response) {
    const a = response.response.items.map( (item, index) => {
      countN +=1;
      return item; 
    });
    self.props.countGetPosts(countN);
    //console.log(a);
    self.props.showAlert(true);
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
    console.log(`Other error ${error}`);
  });
}



clickBtn(){ 
  
  const timerId = setInterval( ()=>this.getDataFromVk(this.props.questions), 3000);
  //this.getDataFromVk(this.props.questions);
  console.log(timerId)
}

  render(){
    return(
      <div>
           
        
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
      countGetPosts: Actions.countSetPosts,
      setQuestions: Actions.setQuestions,
      showAlert:Actions.showAlert,
    }
)(SearchResult)

export default SearchResultWithRedux;
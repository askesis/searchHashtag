// import * as Actions from '../actions/Actions.js';
// import { connect } from 'react-redux';
import VK from 'vk-api-help';

export default function getDataFromVk(q){
  const vkRequest = new VK.VkRequest('00e523606079d1dac5fa8d2a98f2ac23c7f714d039b38f6e8999d67eb355d05026bca251a336e77e00b2c');
 
  vkRequest.method('newsfeed.search', { q:q, count:3 })
  .then(function(response) {
    const a = response.response.items.map( (item, index) => {
      return item
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

// const getDataFromVkWithRedux = connect(
//   state => ({
//      questions : state.questions,
//     }),
//     {
//       setQuestions: Actions.setQuestions,
//       setAnswer: Actions.setAnswer,
//     }
// )(getDataFromVk)

// export default getDataFromVkWithRedux;
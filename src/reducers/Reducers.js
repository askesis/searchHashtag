const initialState = {
  //answer: [],
  questions: {},
};

export default function separateDataWithRedux(state = initialState, action) {
  switch (action.type){
    case 'QUESTIONS': 
      return {...state.questions, questions: action.questions};

    // case 'ANSWER': 
    //   return {...state.answer , id:action.answer.from_id, text: action.answer.text}];
      
    default:
      return state
  }
}
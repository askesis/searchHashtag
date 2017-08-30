const initialState = {
  notification:
    { 
      show: false, 
      count:0,
    },
  questions:'',
};

export default function separateDataWithRedux(state = initialState, action) {
  switch (action.type){
    case 'QUESTIONS': 
      return {...state, questions: action.questions};

    case 'COUNT_GET_POSTS': 
      return { ...state, notification:{...state.notification, count:action.number}};

    case 'ALERT_SHOW':
      return { ...state, notification:{...state.notification, show:action.show}};

    // case 'ALERT_SHOW':
    //   return {...state, test:action.show}

    default:
      return state
  }
}
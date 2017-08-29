import { createStore } from 'redux'
import separateDataWithRedux from '../reducers/Reducers'

export default function configureStore(initialState) {
  const store = createStore(separateDataWithRedux, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
  return store
}
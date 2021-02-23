import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Like:
// const [clickCount, setClickCount] = useState(0)

// This is a 'Reducer'
// It returns the value of our 'clickCount' state
const clickCount = (state = 0, action) => {
  console.log('clickCount action:', action, 'state', state);

  if(action.type === 'INCREASE_CLICK_COUNT') {
    return state + 1;
  }
  if(action.type === 'DECREASE_CLICK_COUNT') {
    return state - 1;
  }

  return state;
};

const elementList = (state = ['Hydrogen', 'Helium'], action) => {
  switch(action.type) {
    case 'ADD_ELEMENT':
      console.log(action);

      // This mutates the original array:
      // state.push(action.payload);

      // Instead make a clone of state
      return [...state, action.payload];
  }
  return state;
}

// "store" === "global state"
const store = createStore(
  combineReducers({
    // This is what the store will look like
    clickCount,   // same as clickCount: clickCount
    elementList,  // same as elementList: elementList
  })
);

ReactDOM.render(
  <React.StrictMode>
    {/* Share our redux store with our React app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

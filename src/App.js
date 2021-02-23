import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // If we were using local state...
  // const [clickCount, setClickCount] = useState(0);

  // Give us access to the Redux dispatch() function
  const dispatch = useDispatch();

  // Track value of new element input field
  const [newElement, setNewElement] = useState('');

  // Grab the clickCount from our redux store
  const clickCount = useSelector((store) => {
    // This return value will be assigned to 'clickCount'
    return store.clickCount;
  });

  //  Grab elementList from our redux store
  const elementList = useSelector((store) => {
    // This return value will be assigned to 'elementList'
    return store.elementList;
  })

  const increase = () => {
    // This is what we'd do before in React useState()-land
    // setClickCount(clickCount + 1)

    // In Redux we dispatch an action
    // calls my reducer with this action
    dispatch({
      // Telling Redux I want to increase the click count
      type: 'INCREASE_CLICK_COUNT'
    });
  };

  const decrease = () => {
    dispatch({
      type: 'DECREASE_CLICK_COUNT'
    });
  };

  const addChlorinonium = () => {
    dispatch({
      type: 'ADD_ELEMENT',
      payload: 'Chlorinonium'
    });
  };

  const addElement = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_ELEMENT',
      payload: newElement,
    })
    setNewElement('');
  }

  return (
    <>
      <h1>🎉 FIRST REDUX APP!!!! 🎉</h1>
      <h2>Button Clicker / Periodic Table of Elements App</h2>
      <div>You clicked that button {clickCount} times!</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h2>Table of Elements</h2>
      <form onSubmit={addElement}>
        <h3>Add a new element</h3>
        <input 
          type="text"
          placeholder="Element name"
          // These two lines bind our local state to this input field
          value={newElement}
          onChange={(event) => setNewElement(event.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {elementList.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
      <button onClick={addChlorinonium}>🦠 MORE CHLORINONIUM 🦠</button>
    </>
  );
}

export default App;

import { useDispatch } from 'react-redux';
import { useState } from 'react';


function ElementForm() {
  // Track value of new element input field
  const [newElement, setNewElement] = useState('');

  const dispatch = useDispatch();

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
    </>
  );
}

export default ElementForm;
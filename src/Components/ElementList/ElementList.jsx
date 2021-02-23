import { useSelector, useDispatch } from 'react-redux';
import ElementItem from '../ElementItem/ElementItem';

function ElementList() {
  // Give us access to the Redux dispatch() function
  const dispatch = useDispatch();
  // Grab elementList from our redux store
  const elementList = useSelector((store) => {
    // This return value will be assigned to 'elementList'
    return store.elementList;
  });



    const addChlorinonium = () => {
      dispatch({
        type: 'ADD_ELEMENT',
        payload: 'Chlorinonium'
      });
    };
  
  return (
    <>
      <ul>
        {elementList.map((element, index) => {
          return <ElementItem key={index} element={element} />
        })}
      </ul>
      <button onClick={addChlorinonium}>🦠 MORE CHLORINONIUM 🦠</button>
    </>
  )
}

export default ElementList;
import { useSelector, useDispatch } from 'react-redux';

function Clicker() {
  const dispatch = useDispatch();

  // Grab the clickCount from our redux store
  const clickCount = useSelector((store) => {
    // This return value will be assigned to 'clickCount'
    return store.clickCount;
  });

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

  return (
    <>
      <div>You clicked that button {clickCount} times!</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default Clicker;
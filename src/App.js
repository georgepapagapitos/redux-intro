import './App.css';
import { useSelector } from 'react-redux';

function App() {
  // If we were using local state...
  // const [clickCount, setClickCount] = useState(0);

  // Grab the clickCount from our redux store
  const clickCount = useSelector((store) => {
    console.log('store.clickCount:', store.clickCount);
    // This return value will be assigned to 'clickCount'
    return store.clickCount;
  });

  //  Grab elementList from our redux store
  const elementList = useSelector((store) => {
    console.log('store.elementList', store.elementList);
    // This return value will be assigned to 'elementList'
    return store.elementList;
  })

  console.log('clickCount is:', clickCount);

  const onButtonClick = () => {
    console.log('onButtonClick');
  };

  return (
    <>
      <h1>🎉 FIRST REDUX APP!!!! 🎉</h1>
      <h2>Button Clicker / Periodic Table of Elements App</h2>
      <div>You clicked that button 0 times!</div>
      <button onClick={onButtonClick}>Click Me!</button>
      <h2>Some Elements</h2>
      <ul>
        {elementList.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
    </>
  );
}

export default App;

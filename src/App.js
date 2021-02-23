import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import ElementForm from './Components/ElementForm/ElementForm';
import ElementList from './Components/ElementList/ElementList';
import Clicker from './Components/Clicker/Clicker';

function App() {
  // If we were using local state...
  // const [clickCount, setClickCount] = useState(0);



  return (
    <>
      <h1>🎉 FIRST REDUX APP!!!! 🎉</h1>
      <h2>Button Clicker / Periodic Table of Elements App</h2>
      <Clicker />
      <ElementForm />
      <ElementList />
    </>
  );
}

export default App;

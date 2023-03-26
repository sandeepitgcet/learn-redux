import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './redux/slice/ValueSlice'
function App() {
  const value = useSelector(state => state.value.myVal);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button type='button' onClick={()=>dispatch(increment())}>INCREMENT</button>
      <input type={"number"} value={value}/>
      <button type='button' onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;

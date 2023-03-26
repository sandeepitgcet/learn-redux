import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament } from './redux/actions/actions1';

function App() {
  const value = useSelector(state => state.reducer.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button type='button' onClick={()=>dispatch(increament())}>INCREMENT</button>
      <input type={"number"} value={value}/>
      <button type='button' onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;

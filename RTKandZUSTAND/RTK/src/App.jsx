import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice'; 
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  return (
    <div className='counter'>
      <h1>RTK Counter Example</h1>
      <button onClick={handleIncrement}> + </button>
      <br />
      <p>Count : {count}</p>
      <button onClick={handleDecrement}> - </button>
      <br /> <br />
      <button onClick={handleReset}> Reset </button>
    </div>
  );
}

export default App;

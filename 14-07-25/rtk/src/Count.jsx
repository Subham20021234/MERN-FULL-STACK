import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment , decrement, incrementByAmount} from './redux/reducer';

function Count() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => dispatch(increment())}>Increment +1</button>
      <button onClick={() => dispatch(decrement())}>decrement -1</button>
      <br />
      <br />
      <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
      <h4>User:</h4>
    </div>
  );
}

export default Count;

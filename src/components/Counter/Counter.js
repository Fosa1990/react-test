import { useDispatch, useSelector } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import { increment, decrement } from '../../redux/counter/counter-actions';
import './Counter.css';

export default function Counter() {
  const dispatch = useDispatch();
  const { value, step } = useSelector(state => state.counter);
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(increment(step))}
        onDecrement={() => dispatch(decrement(step))}
      />
    </div>
  );
}

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onDecrement}>
      Decrese by {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Increse by {step}
    </button>
  </div>
);

export default Controls;

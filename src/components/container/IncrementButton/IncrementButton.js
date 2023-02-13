import React, { useContext } from 'react';
import Actions from '../../../state/Actions';
import { StateContext } from '../App';

function IncrementButton() {
  const {state, dispatch} = useContext(StateContext);

  return (
    <button onClick={() => dispatch({type: Actions.Increment})}>{state.counter} Increment</button>
  );
}

export default IncrementButton;

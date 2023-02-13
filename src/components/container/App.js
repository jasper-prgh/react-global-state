import { useReducer, createContext, useState } from "react";
import initialState from "../../state/initialState";
import stateReducer from "../../state/reducers/stateReducer";
import Actions from "../../state/Actions";
import IncrementButton from "./IncrementButton/IncrementButton";

const StateContext = createContext();

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [number, setNumber] = useState(0);

  const n = 23;

  return (
    <StateContext.Provider value={{state, dispatch}}>
      <input type={'number'}></input>
      <IncrementButton />
      <button onClick={() => dispatch({type: Actions.Decrement})}>Decrement</button>
      <span>{state.counter}</span>
      <button onClick={() => dispatch({type: Actions.Reset})}>Reset</button>
      <button onClick={() => dispatch({type: Actions.AddNumber, payload: {number: n}})}>Add {n}</button>
    </StateContext.Provider>
  );
}

export default App;

export {StateContext};

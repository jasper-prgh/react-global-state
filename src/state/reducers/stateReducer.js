import Actions from "../Actions";
import initialState from "../initialState";

export default function stateReducer(state, action) {
    switch (action.type) {
        case Actions.Increment:
            return { ...state, counter: state.counter + 1 };
        case Actions.Decrement:
            return { ...state, counter: state.counter - 1 };
        case Actions.Reset:
            return initialState;
        case Actions.AddNumber:
            return { ...state, counter: state.counter + action.payload.number };
        default:
            return state;
    }
}

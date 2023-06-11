// import useCounterAndLog from '../hooks/use-counter';
import produce from 'immer';
import Button from '../components/Button'
import { useReducer } from 'react';
import Panel from '../components/Panel.js'

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ON_SUBMIT = 'on-submit';

const reducer = (state, action) => {

    // UPDATING USING IMMER
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ON_SUBMIT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return;
    }

    // //UPDATED REDUCER FUNCTION USING SWITCH STATEMENTS
    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count + 1,
    //         }
    //     case DECREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count - 1,
    //         }
    //     case SET_VALUE_TO_ADD:
    //         return {
    //             ...state,
    //             valueToAdd: action.payload,
    //         }
    //     case ON_SUBMIT:
    //         return {
    //             ...state,
    //             count: state.count + state.valueToAdd,
    //             valueToAdd: 0,
    //         }
    //     default:
    //         return state;
    // }


    // NORMAL REDUCER FUNCTION
    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1,
    //     }
    // }
    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count - 1,
    //     }
    // }
    // if (action.type === SET_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload,
    //     }
    // }

    // return state;
};

function CounterPage({ initialCount }) {
    // const { count, increment } = useCounterAndLog(initialCount);
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        // setCount(count + 10)
        dispatch({
            type: 'increment',
        });
    };

    const decrement = () => {
        // setCount(count - 1)
        dispatch({
            type: 'decrement',
        })
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        // setValueToAdd(value)
        dispatch({
            type: 'change-value-to-add',
            payload: value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0)
        dispatch({
            type: 'on-submit',
        })
    }

return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;



//   const increment = () => {
//     dispatch({
//       type: INCREMENT_COUNT,
//     });
//   };
//   const decrement = () => {
//     dispatch({
//       type: DECREMENT_COUNT,
//     });
//   };
//   const handleChange = (event) => {
//     const value = parseInt(event.target.value) || 0;

//     dispatch({
//       type: SET_VALUE_TO_ADD,
//       payload: value,
//     });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     dispatch({
//       type: ADD_VALUE_TO_COUNT,
//     });
//   };



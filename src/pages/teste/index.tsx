import { useReducer } from "react";


type State = {
    counter: number;
}

type Action = { type: "inc" } | { type: "dec" };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'inc':
            return { counter: state.counter + 1 }
        case 'dec':
            return { counter: state.counter - 1 }
        default:
            return state;
    }

}

const TesteReducer = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    function increment() {
        console.log('sss')
        dispatch({ type: "inc" })
    }

    function decrement() {
        dispatch({ type: "dec" })
    }

    return (
        <div>
            <p>contator <span>{state.counter}</span></p>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
        </div>
    )
}


export default TesteReducer;
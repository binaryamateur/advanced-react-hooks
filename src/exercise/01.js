// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


function countReducer(state, newState){
  switch(newState.type){
    case "INCREMENT" : return {count: state.count + newState.step};
    default: return undefined;
  }
}

function Counter({initialCount = 0, step = 6}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

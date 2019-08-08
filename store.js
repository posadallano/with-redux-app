import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const InitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  const { count } = InitialState;
  console.log(state);

  switch (type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + payload
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - payload
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: count
      })
    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}

export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = (amount) => {
  return {
    type: actionTypes.INCREMENT,
    payload: amount
  }
}

export const decrementCount = (amount) => {
  return { 
    type: actionTypes.DECREMENT,
    payload: amount
  }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}

export function initializeStore (initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}

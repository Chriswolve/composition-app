import { useStateCounter, increment, decrement } from '../store/CounterState'

const useDecrement = () => {
  if (useStateCounter.count > 0) {
    decrement()
  } else {
    console.info('You cannot decrement below 0')
  }
}

export const useCounter = () => {
  return {
    counterState: useStateCounter,
    increment,
    decrement: useDecrement,
  }
}

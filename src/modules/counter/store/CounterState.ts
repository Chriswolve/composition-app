import { reactive } from 'vue'
import type { CounterState } from '../interfaces/Counter'

export const useStateCounter = reactive<CounterState>({
  count: 0,
})

export const increment = () => {
  useStateCounter.count++
}

export const decrement = () => {
  useStateCounter.count--
}

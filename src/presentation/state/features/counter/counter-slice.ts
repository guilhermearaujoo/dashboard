// DUCKS pattern
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 10
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      // its ok to do this because immer makes it imutable under the hood
      state.value++
    }
  }
})

export const { incremented } = counterSlice.actions
export default counterSlice.reducer

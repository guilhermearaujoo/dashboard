// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    }
  }
})

export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer

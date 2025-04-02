// automatically turn on redux devtoolls, redux thunks, and combine redux automatically
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counter-slice'
import registrationReducer from './features/registration/registration-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    registration: registrationReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

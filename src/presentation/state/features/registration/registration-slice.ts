// DUCKS pattern
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { NewRegistration, RegistrationResult } from '@/domain/models'
import { makeRemoteRegisterUser } from '@/main/factories/usecases'

export interface RegistrationState {
  value: RegistrationResult
  loading: boolean
}

const initialState: RegistrationState = {
  value: {} as RegistrationResult,
  loading: true
}

export const addAccount = createAsyncThunk('registration/addAcount', async (user: NewRegistration) => {
  const response = await makeRemoteRegisterUser().register(user)
  return response
})

const registrationSlice = createSlice({
  name: 'addAcount',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addAccount.fulfilled, (state, action) => {
        state.value = action.payload
        state.loading = false
      })
      .addCase(addAccount.pending, state => {
        state.loading = true
      })
  }
})

export default registrationSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formError: false
}

export const formStatusSlice = createSlice({
  name: 'formStatus',
  initialState,
  reducers: {
    setFormErrorTrue: (state, action) => ({
      formError: true
    }),
    setFormErrorFalse: (state, action) => ({
      formError: false
    })
  }
})

export const {setFormErrorFalse, setFormErrorTrue} = formStatusSlice.actions
export const formStatusReducer = formStatusSlice.reducer

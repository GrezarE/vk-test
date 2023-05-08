import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tower: '',
  floor: '',
  meetingRoom: '',
  dateStart: null,
  dateEnd: null,
  textArea: '',
}

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeTower: (state, action) => ({
      ...state,
      tower: action.payload
    }),
    changeFloor: (state, action) => ({
      ...state,
      floor: action.payload
    }),
    changeMeetingRoom: (state, action) => ({
      ...state,
      meetingRoom: action.payload
    }),
    changeDateStart: (state, action) => ({
      ...state,
      dateStart: action.payload
    }),
    changeDateEnd: (state, action) => ({
      ...state,
      dateEnd: action.payload
    }),
    changeTextArea: (state, action) => ({
      ...state,
      textArea: action.payload
    }),
    reset: () => ({
      tower: '',
      floor: '',
      meetingRoom: '',
      dateStart: null,
      dateEnd: null,
      textArea: ''
    }),
    getFormFromLocal: (state, action) => ({
      tower: action.payload.tower,
      floor: action.payload.floor,
      meetingRoom: action.payload.meetingRoom,
      dateStart: action.payload.dateStart,
      dateEnd: action.payload.dateEnd,
      textArea: action.payload.textArea,
    })
  }
})

export const { changeFloor, changeMeetingRoom, changeTextArea, changeTower, reset, getFormFromLocal, changeDateStart, changeDateEnd } = formSlice.actions
export const formReducer = formSlice.reducer

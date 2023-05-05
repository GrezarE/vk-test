import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    tower: 'А',
    floor: 3,
    meetingRoom: 1,
    date: '',
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
        changeDate: (state, action) => ({
            ...state,
            date: action.payload
        }),
        changeTextArea: (state, action) => ({
            ...state,
            textArea: action.payload
        })
    }
})

export const { changeDate, changeFloor, changeMeetingRoom, changeTextArea, changeTower } = formSlice.actions
export const formReducer = formSlice.reducer
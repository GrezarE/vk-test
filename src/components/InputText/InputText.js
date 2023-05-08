import React from "react";
import { Input, FormControl, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";

export const InputText = ({ inputName, inputValue, inputChanges }) => {
  const dispatch = useDispatch()

  const handlerChange = (e) => {
    dispatch(inputChanges(e.target.value))
  }

  return (
    <FormControl sx={{ m: 3, width: 500 }}>
      <InputLabel>{inputName}</InputLabel>
      <Input id={inputName} onChange={handlerChange} value={inputValue} sx={{ p: 1 }} multiline />
    </FormControl>
  )
}

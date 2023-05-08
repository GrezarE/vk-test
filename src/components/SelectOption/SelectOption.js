import React from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch } from "react-redux";

export const SelectOption = ({ inputName = '', inputOptions, inputChanges, inputValue = '' }) => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(inputChanges(e.target.value))
  }

  return (
    <div>
      <FormControl sx={{ m: 3, width: 500 }} variant="standard">
        <InputLabel sx={{ p: 1 }}>{inputName}</InputLabel>
        <Select sx={{ p: 1 }} value={inputValue} id={inputName} onChange={handleChange}>{inputOptions.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}</Select>
      </FormControl>
    </div>
  )
}

import React, { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export const SelectOption = (inputName, inputValues) => {
  const [state, setState] = useState('')

  return (
    <div>
      <FormControl>
        <InputLabel>{inputName}</InputLabel>
        <Select multiple value={state}>{inputValues.map((item) => (
          <MenuItem key={item} value={item}>{item}</MenuItem>
        ))}</Select>
      </FormControl>
    </div>
  )
}

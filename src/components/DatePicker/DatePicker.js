import React, { useEffect } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FormControl } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useDispatch } from "react-redux";
import { setFormErrorFalse, setFormErrorTrue } from "../../store/formStatusSlice";


export const DateInput = ({ dateValueStart, dateValueEnd, dateChangeStart, dateChangeEnd }) => {
  const dispatch = useDispatch()

  const handleChangeStart = (e) => {
    const data = dayjs(e).toDate().toString()
    dispatch(dateChangeStart(data))

  }
  const handleChangeEnd = (e) => {
    const data = dayjs(e).toDate().toString()
    dispatch(dateChangeEnd(data))
  }

  useEffect(() => {
    if (dayjs(new Date(dateValueStart)) > dayjs(new Date(dateValueEnd))) {
      dispatch(setFormErrorTrue())
    } else {
      dispatch(setFormErrorFalse())
    }
  }, [dateValueStart, dateValueEnd, dispatch])


  return (
    <FormControl sx={{ m: 3, width: 500 }} variant="standard">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DemoContainer components={['DateTimePicker', 'SingleInputDateTimeRangeField']}>
          <DateTimePicker label="Дата и время начала" onChange={handleChangeStart} format="DD-MM-YYYY HH:mm" value={dateValueStart ? dayjs(new Date(dateValueStart)) : null} disablePast />
          <DateTimePicker label="Дата и время окончания" onChange={handleChangeEnd} format="DD-MM-YYYY HH:mm" value={dateValueEnd ? dayjs(new Date(dateValueEnd)) : null} disablePast minDate={dateValueStart ? dayjs(new Date(dateValueStart)) : null} />
        </DemoContainer>
      </LocalizationProvider>
    </FormControl>
  )
}

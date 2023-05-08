import React, { useEffect } from "react";
import { InputText } from "../components/InputText/InputText";
import { SelectOption } from "../components/SelectOption/SelectOption";
import { DateInput } from "../components/DatePicker/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { TOWERS, FLOORS, ROOMS } from "../utils/constants";
import { changeDateStart, changeDateEnd, changeFloor, changeMeetingRoom, changeTextArea, changeTower, reset, getFormFromLocal } from "../store/formSlice";
import { Button } from "@mui/material";

import styles from './main.module.css'
import { useLocalStorageHook } from "../hooks/localHook";


export const Main = () => {
  const formState = useSelector(store => store.form)
  const { formError } = useSelector(store => store.formStatus)

  const [localForm, setLocalForm] = useLocalStorageHook('formVK', {})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFormFromLocal(localForm))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setLocalForm(formState)
  }, [formState, setLocalForm])

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(formState))
  }

  const handlerReset = () => {
    dispatch(reset())
  }

  return (
    <form className={styles.main} onSubmit={handlerSubmit}>
      <h1 className={styles.header}>Бронирование переговорной</h1>
      <SelectOption inputName="Башня" inputOptions={TOWERS} inputValue={formState.tower} inputChanges={changeTower} />
      <SelectOption inputName="Этаж" inputOptions={FLOORS} inputValue={formState.floor} inputChanges={changeFloor} />
      <SelectOption inputName="Комната" inputOptions={ROOMS} inputValue={formState.meetingRoom} inputChanges={changeMeetingRoom} />
      <DateInput dateValueStart={formState.dateStart} dateValueEnd={formState.dateEnd} dateChangeStart={changeDateStart} dateChangeEnd={changeDateEnd} />
      <InputText inputName="Коментарий" inputValue={formState.textArea} inputChanges={changeTextArea} />
      <div className={styles.buttonBox}>
        <Button type="submit" sx={{ width: 150, height: 50 }} variant="contained" color="success" disabled={formError}>Отправить</Button>
        <Button type="button" sx={{ width: 150, height: 50 }} variant="contained" color="error" onClick={handlerReset}>Очистить</Button>
      </div>
    </form>
  )
}

import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import c from "./SettingsForButton.module.css";
import {Button} from "../Button/Button";

type SettingsForButtonType = {
    maxValue: number
    title: number
    getFromLocalSt: () => void
    setMaxInputValue: Dispatch<SetStateAction<string>>
    setStartInputValue: Dispatch<SetStateAction<string>>
    maxInputValue: string
    startInputValue: string
    setTitle: React.Dispatch<React.SetStateAction<number>>
    setMaxValue: React.Dispatch<React.SetStateAction<number>>
}
export const SettingsForButton = (props: SettingsForButtonType) => {

    const onChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxInputValue(e.currentTarget.value)
    }
    const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartInputValue(e.currentTarget.value)
    }
    const onClick = () => {
        localStorage.setItem("maxInputValue", props.maxInputValue)
        localStorage.setItem("startInputValue", props.startInputValue)
        props.setTitle(+props.startInputValue)
        props.setMaxValue(+props.maxInputValue)
        props.getFromLocalSt()
    }

    return (
        <div className={c.firstDiv}>
            <div className={c.info}>
                <div className={c.firstTextInput}>
                    <p className={c.textOfInfo}>Max value:</p>
                    <input onChange={onChange1} value={props.maxInputValue}
                           className={
                               props.startInputValue === props.maxInputValue || props.title > props.maxValue ?
                                   c.errorInput2 :
                                   c.input2
                           }
                    />
                </div>
                <div className={c.textInput}>
                    <p className={c.textOfInfo}>Start value:</p>
                    <input onChange={onChange2} value={props.startInputValue}
                           className={
                               props.startInputValue === props.maxInputValue || props.title > props.maxValue ?
                                   c.errorInput :
                                   c.input
                           }
                    />
                </div>
            </div>
            <div className={c.divButton}>
                <Button maxValue={props.maxValue} title={props.title} inputValue2={props.startInputValue} name="Set"
                        func={onClick}/>
            </div>
        </div>
    )
}
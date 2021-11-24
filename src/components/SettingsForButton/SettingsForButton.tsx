import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import c from "./SettingsForButton.module.css";
import {Button} from "../Button/Button";

type SettingsForButtonType = {
    maxValue: number
    title: number
    setMaxInputValue: (maxInputValue: string) => void
    setStartInputValue: (startInputValue: string) => void
    maxInputValue: string
    startInputValue: string
    onClickButton: () => void
    buttonSet: () =>void
}
export const SettingsForButton = (props: SettingsForButtonType) => {

    const onChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxInputValue(e.currentTarget.value)
    }
    const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartInputValue(e.currentTarget.value)
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
                        func={props.buttonSet}/>
            </div>
        </div>
    )
}
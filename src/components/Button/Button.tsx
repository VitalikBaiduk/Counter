import React, {SetStateAction, useState} from 'react';
import classes from "../counter/Counter.module.css";
import {TypeForButtonName} from "../counter/Counter";

enum ButtonNames {
    INC = "Inc",
    RESET = "Reset",
    SET = "Set"
}

export type ButtonType = {
    inputValue1?: string
    inputValue2?: string
    title: number
    name: TypeForButtonName
    func: () => void
    onClick?:() => void
    maxValue:number
}

export const Button = ({name, title, maxValue, func, inputValue2}: ButtonType) => {

    const isInc = name === ButtonNames.INC
    const isRes = name === ButtonNames.RESET
    const isSet = name === ButtonNames.SET

    const incButtonClassname = ((title === maxValue) || (title < 0 || title > maxValue))
        ? classes.styleForButton
        : classes.styleForActiveButton

    const resButtonClassName = (inputValue2 === "") ? classes.styleForButton : classes.styleForActiveButton
    const buttonClassName = isInc ? incButtonClassname : isSet ? classes.styleForActiveButton : isRes ? resButtonClassName : ""

    return <button className={buttonClassName} onClick={func}>{name}</button>
}
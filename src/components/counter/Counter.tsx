import React, {Dispatch, SetStateAction, useState} from 'react';
import classes from "./Counter.module.css"
import {Button} from "../Button/Button";

export type TypeForButtonName = "Inc" | "Reset" | "Set"

type CounterType = {
    maxValue: number
    title: number
    setTitle: Dispatch<SetStateAction<number>>
    startInputValue: string
    maxInputValue: string
}

export const Counter = ({title, ...props}: CounterType) => {

    const reset = () => {
        let newTitle = 0
        props.setTitle(newTitle)
    }
    const inc = () => {
        let newTitle = title + 1
        if (newTitle === props.maxValue + 1 ||
            title < 0 || props.startInputValue === props.maxInputValue || title > props.maxValue) {
            return
        }
        props.setTitle(newTitle)
    }

    const isCounterError = (title < 0)
        || (props.startInputValue === props.maxInputValue)
        || (title > props.maxValue)


    return (
        <div className={classes.firstDiv}>
            <p className={title === props.maxValue ? classes.styleForCounterValue2 : classes.styleForCounterValue}>
                {
                    isCounterError
                        ? <p className={classes.invalidValue}>invalid value!</p>
                        : title
                }
            </p>
            <div className={classes.mainDiv}>
                <Button
                    maxValue={props.maxValue}
                    title={title}
                    name="Inc" func={inc}
                />
                <Button maxValue={props.maxValue} title={title} name="Reset" func={reset}/>
            </div>
        </div>
    )
}
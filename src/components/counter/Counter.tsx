import React, {useState} from 'react';
import classes from "./Counter.module.css"
import {Button} from "../Button/Button";

export type TypeForButtonName = "Inc" | "Reset" | "Set"

export const Counter = () => {

    let [title, setTitle] = useState(0)

    const reset = () => {
        let newTitle = 0
        setTitle(newTitle)
    }
    const inc = () => {
        let newTitle = title + 1
        if (newTitle === 6) {
            return
        }
        setTitle(newTitle)
    }

    return (
        <div className={classes.firstDiv}>
            <p className={title === 5 ? classes.styleForCounterValue2 : classes.styleForCounterValue}>{title}</p>
            <div className={classes.mainDiv}>
                <Button title={title} name="Inc" func={inc}/>
                <Button title={title} name="Reset" func={reset}/>
            </div>
        </div>
    )
}
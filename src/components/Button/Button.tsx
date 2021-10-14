import React, {useState} from 'react';
import classes from "../counter/Counter.module.css";
import {TypeForButtonName} from "../counter/Counter";

export type ButtonType = {
    title?: number
    name: TypeForButtonName
    func: () => void
}

export const Button = (props: ButtonType) => {

    return props.name === "Inc" ?
        <button className={props.title === 5 ? classes.styleForButton : classes.styleForActiveButton}
                onClick={props.func}>{props.name}</button>
        : props.name === "Reset" ? <button className={classes.styleForActiveButton}
                  onClick={props.func}>{props.name}
        </button> : <button className={classes.styleForButton}
                             onClick={props.func}>{props.name}
        </button>

}
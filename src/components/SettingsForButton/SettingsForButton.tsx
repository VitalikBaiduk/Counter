import React from 'react';
import c from "./SettingsForButton.module.css";
import {Button} from "../Button/Button";

export const SettingsForButton = () => {
    return (
        <div className={c.firstDiv}>
            <div className={c.info}>
                <div className={c.firstTextInput}>
                    <p className={c.textOfInfo}>Max value:</p>
                    <input className={c.input2}/>
                </div>
                <div className={c.textInput}>
                    <p className={c.textOfInfo}>Start value:</p>
                    <input className={c.input}/>
                </div>
            </div>
            <div className={c.divButton}>
                <Button name="Set" func={() => {}}/>
            </div>
        </div>
    )
}
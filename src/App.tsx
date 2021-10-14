import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingsForButton} from "./components/SettingsForButton/SettingsForButton";

function App() {

    return (
        <div className="App">
            <div className={"subApp"}>
                <SettingsForButton/>
                <Counter/>
            </div>
        </div>
    );
}

export default App;

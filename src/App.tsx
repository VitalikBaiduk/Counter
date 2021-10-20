import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingsForButton} from "./components/SettingsForButton/SettingsForButton";

function App() {
    let [title, setTitle] = useState<number>(+localStorage.startInputValue)
    let [maxValue, setMaxValue] = useState(+localStorage.maxInputValue)
    let [maxInputValue, setMaxInputValue] = useState("")
    let [startInputValue, setStartInputValue] = useState("")


    const getFromLocalSt =  () => {
        let titleFromLocalSt = localStorage.getItem("startInputValue")
        if (titleFromLocalSt) {
            let newTitle = JSON.parse(titleFromLocalSt)
            setStartInputValue(newTitle)
        }
        let maxValueFromLocalSt = localStorage.getItem("maxInputValue")
        if (maxValueFromLocalSt) {
            let newMaxValue = JSON.parse(maxValueFromLocalSt)
            setMaxInputValue(newMaxValue)
        }
    }

    useEffect(() => {
        getFromLocalSt()
    }, [])

    return  (
        <div className="App">
            <div className={"subApp"}>
                <SettingsForButton
                    setMaxValue={setMaxValue}
                    setTitle={setTitle}
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                    setStartInputValue={setStartInputValue}
                    setMaxInputValue={setMaxInputValue}
                    maxValue={maxValue}
                    title={title}
                    getFromLocalSt={getFromLocalSt}
                />
                <Counter startInputValue={startInputValue} maxInputValue={maxInputValue} maxValue={maxValue}
                         title={title} setTitle={setTitle}/>
            </div>
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingsForButton} from "./components/SettingsForButton/SettingsForButton";
import {RootType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {setTitleValueAC} from "./redux/titleReducer";
import {startInputValueAC} from "./redux/startInputValueReducer";
import {setMaxInputValueAC} from "./redux/maxInputValueReducer";
import {setMaxValueAC} from "./redux/maxValueReducer";

function App() {
    let title = useSelector<RootType, number>(state => state.titleReducer)
    let maxValue = useSelector<RootType, number>(state => state.maxValueReducer)
    let maxInputValue = useSelector<RootType, string>(state => state.maxInputValueReducer)
    let startInputValue = useSelector<RootType, string>(state => state.startInputValueReducer)
    let dispatch = useDispatch()


    const getFromLocalSt = () => {
        let titleFromLocalSt = localStorage.getItem("startInputValue")
        if (titleFromLocalSt) {
            let newTitle = JSON.parse(titleFromLocalSt)
            dispatch(startInputValueAC(newTitle))
        }
        let maxValueFromLocalSt = localStorage.getItem("maxInputValue")
        if (maxValueFromLocalSt) {
            let newMaxValue = JSON.parse(maxValueFromLocalSt)
            dispatch(setMaxValueAC(newMaxValue))
        }
    }

    useEffect(() => {
        getFromLocalSt()
    }, [])


    const setTitle = (newTitle?: string) => {
        if (newTitle) {
            dispatch(setTitleValueAC(+newTitle))
        } else {
            dispatch(setTitleValueAC(0))
        }
    }
    const buttonSet = () => {
        localStorage.setItem("maxInputValue", maxInputValue)
        localStorage.setItem("startInputValue", startInputValue)
        dispatch(setTitleValueAC(+startInputValue))
    }
    const setMaxInputValue = (maxInputValue: string) => {
        dispatch(setMaxInputValueAC(maxInputValue))
    }
    const setStartInputValue = (startInputValue: string) => {
        dispatch(startInputValueAC(startInputValue))
    }

    const onClickButton = () => {
        setTitle()
        dispatch(setMaxInputValueAC(maxInputValue))
        getFromLocalSt()
    }

    return (
        <div className="App">
            <div className={"subApp"}>
                <SettingsForButton
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                    setStartInputValue={setStartInputValue}
                    setMaxInputValue={setMaxInputValue}
                    maxValue={maxValue}
                    title={title}
                    onClickButton={onClickButton}
                    buttonSet={buttonSet}
                />
                <Counter startInputValue={startInputValue} maxInputValue={maxInputValue} maxValue={maxValue}
                         title={title} setTitle={setTitle}/>
            </div>
        </div>
    );
}

export default App;

import React from 'react';

type ActionType = setTitleValueACType

type initialStateType = number
const initialState = Number(localStorage.getItem("startInputValue"))
//Number(localStorage.getItem("startInputValue"))

export const titleReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_TITLE": {
            return state = action.title
        }
        default: {
            return state
        }
    }
}

export type setTitleValueACType = ReturnType<typeof setTitleValueAC>
export const setTitleValueAC = (title: number) => {
    return {
        type: "SET_TITLE",
        title
    } as const
}
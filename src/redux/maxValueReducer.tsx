import React from 'react';

type ActionType = setMaxValueACType
type initialStateType = number
const initialState = Number(localStorage.getItem("maxInputValue"))

export const maxValueReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_MAX_VALUE":
            return state = action.maxValue
        default: {
            return state
        }
    }
}

export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: "SET_MAX_VALUE",
        maxValue
    } as const
}
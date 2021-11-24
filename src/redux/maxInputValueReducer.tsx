import React from 'react';

type ActionType = setMaxValueACType

type initialStateType = string

const initialState = localStorage.getItem("maxInputValue")

export const maxInputValueReducer = (state: string | null = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_MAX_INPUT_VALUE": {

            return state = action.maxInputValue
        }
        default: {
            return state as string
        }
    }
}

export type setMaxValueACType = ReturnType<typeof setMaxInputValueAC>
export const setMaxInputValueAC = (maxInputValue: string) => {
    console.log(maxInputValue)
    return {
        type: "SET_MAX_INPUT_VALUE",
        maxInputValue
    } as const
}
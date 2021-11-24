import React from 'react';

type ActionType = startInputValueACType

type initialStateType = string

const initialState = localStorage.getItem("startInputValue")

export const startInputValueReducer = (state: string | null = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_START_INPUT_VALUE": {
            return state = action.startInputValue
        }
        default: {
            return state as string
        }
    }
}

export type startInputValueACType = ReturnType<typeof startInputValueAC>
export const startInputValueAC = (startInputValue: string) => {
    return {
        type: "SET_START_INPUT_VALUE",
        startInputValue
    } as const
}
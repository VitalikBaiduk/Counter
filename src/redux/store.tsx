import {combineReducers, createStore} from "redux";
import {titleReducer} from "./titleReducer";
import {maxValueReducer} from "./maxValueReducer";
import {maxInputValueReducer} from "./maxInputValueReducer";
import {startInputValueReducer} from "./startInputValueReducer";

const rootReducer = combineReducers({
    titleReducer: titleReducer,
    maxValueReducer:maxValueReducer,
    maxInputValueReducer:maxInputValueReducer,
    startInputValueReducer:startInputValueReducer,
})

export type RootType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
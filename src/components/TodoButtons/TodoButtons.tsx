import React, {useState} from 'react';
import {AffairsPriorityType} from "../../App";

export type TodoButtonsPropsType = {
    changeFilter: (newFilterValue: AffairsPriorityType, todoListID: string) => void
    todoID: string
}


export const TodoButtons: React.FC<TodoButtonsPropsType> = ({changeFilter, todoID}) => {


    const setAll = () => {
        changeFilter("all", todoID)
    }
    const setActive = () => {
        changeFilter("active", todoID)
    }
    const setComplete = () => {
        changeFilter("complete", todoID)
    }

    return <div>
        <button onClick={setAll}>all</button>
        <button onClick={setActive}>active</button>
        <button onClick={setComplete}>complete</button>
    </div>
}
import React from 'react';
import {TaskType} from "../../App";

export type AffairsPropsType = {
    affair: TaskType;
    deleteTasks: (taskID: string, todoListID: string) => void
    todoID: string
}


export const  Affairs:React.FC<AffairsPropsType> = ({todoID ,deleteTasks, affair}) => {

    const deleteCallback = () => {deleteTasks(affair.id,todoID)}

    return <div> <input checked={affair.isDone} type="checkbox"/> {affair.title} <button onClick={deleteCallback}>x</button> </div>

}
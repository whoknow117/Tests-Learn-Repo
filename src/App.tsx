import React, {useState} from 'react';


import './App.css';
import {TodoInput} from "./components/TodoInput/TodoInput";
import {Affairs} from "./components/Affairs/Affairs";
import {TodoButtons} from "./components/TodoButtons/TodoButtons";
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type AffairsPriorityType = "all" | "active" | "complete"

export type TaskStateType = {
    [key: string]: Array<TaskType>
}
export type TodoListType = {
    id: string
    title: string
    filter: AffairsPriorityType
}


function App() {

    const todoListID1 = v1();
    const todoListID2 = v1();



    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID1, title: "What to learn?", filter: 'active'},
        {id: todoListID2, title: "What to eat?", filter: 'all'},
    ])
    const [tasks, setTasks] = useState<TaskStateType>( {
        [todoListID1] : [
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "REDUX", isDone: false},
    ],
        [todoListID2] : [
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "HTML", isDone: true},
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "REDUX", isDone: false},
        ],
    });



    const deleteTasks = (taskID: string, todoListID: string) => {

        const tasksForTodoList =  tasks[todoListID]
        tasks[todoListID] = tasksForTodoList.filter( t => t.id !== taskID)

        setTasks({...tasks})

    }
    const changeFilterValue = (newFilterValue: AffairsPriorityType, todoListID: string) => {
        const todoList = todoLists.find( tl => tl.id === todoListID)
        if(todoList) {
            todoList.filter = newFilterValue
            setTodoLists([...todoLists])
        }


    }

    const changeTaskStatus = (taskID:string, isDone:boolean, todoListID: string) => {

    }

    return (
        <div className="App">
            {todoLists.map( tl => {
               let data = tasks[tl.id];
               if (tl.filter === 'complete') {
                   data = tasks[tl.id].filter( t => t.isDone === true)
               }
               if (tl.filter === 'active') {
                  data = tasks[tl.id].filter( t => t.isDone === false)
               }
              return  (
              <div>
                  <TodoInput/>
                  {data.map(t => <Affairs
                      key={t.id}
                      todoID={tl.id}
                      affair={t}
                      deleteTasks={deleteTasks}

                  />)}
                  <TodoButtons todoID={tl.id} changeFilter={changeFilterValue}/>
              </div>
              )
            })}
        </div>
    );
}

export default App;

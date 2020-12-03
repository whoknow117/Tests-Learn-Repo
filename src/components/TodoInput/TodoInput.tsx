import React from 'react';

export type TodoInputPropsType = {

}


export const TodoInput:React.FC<TodoInputPropsType> = () => {


    return <div>
        <input type="text"/>
        <button>add</button>
    </div>
}
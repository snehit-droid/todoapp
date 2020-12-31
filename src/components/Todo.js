import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                    // {...item} is returning all the properties of the 'item' that is unchanged.
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
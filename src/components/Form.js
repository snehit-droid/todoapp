import React from 'react'

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
    //Javascript code and Function
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
       e.preventDefault();  // to prevent the page to get refreshed everytime we click on submit. 
       setTodos([
           ...todos, 
           { text: inputText, completed: false, id: Date.now().toString() }
       ]);
       setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;
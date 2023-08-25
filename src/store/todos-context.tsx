import React, { useState } from "react";
import Todo from "../models/todo"; // Importing the Todo model

// Defining the type for the Props that the component receives
type Props = {
  children: React.ReactNode; // The component's children
};

// Defining the shape of the TodosContext object
type TodosContextObj = {
  items: Todo[]; // Array of todos
  addTodo: (text: string) => void; // Function to add a new todo
  removeTodo: (id: string) => void; // Function to remove a todo
};

// Creating the TodosContext using React's createContext
export const TodosContext = React.createContext<TodosContextObj>({
  items: [], // Initial array of todos
  addTodo: () => {}, // Placeholder addTodo function
  removeTodo: (id: string) => {}, // Placeholder removeTodo function
});

// Creating the TodosContextProvider component
const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]); // Initializing state for todos

  // Function to add a new todo
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText); // Creating a new todo object
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo); // Adding the new todo to the existing list
    });
  };

  // Function to remove a todo
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId); // Removing the todo with the specified ID
    });
  };

  // Creating the context value to provide to the context
  const contextValue: TodosContextObj = {
    items: todos, // List of todos
    addTodo: addTodoHandler, // Function to add a todo
    removeTodo: removeTodoHandler, // Function to remove a todo
  };

  return (
    // Providing the context value to the TodosContext
    <TodosContext.Provider value={contextValue}>
      {props.children} {/* Rendering the children of the component */}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

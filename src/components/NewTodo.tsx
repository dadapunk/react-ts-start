import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import { Button, TextField } from "@mui/material";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <TextField id="text" type="text" inputRef={todoTextInputRef} />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default NewTodo;

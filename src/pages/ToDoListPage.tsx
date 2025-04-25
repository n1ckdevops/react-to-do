import { useState } from "react";
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);


  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      text, isDone: false,
      id: 0
    };
    setTodos([...todos, newToDo]);
  }



  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} />
    </>
  )
}
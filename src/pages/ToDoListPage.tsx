import { useState } from "react";
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);


  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: Date.now(), // Уникальный идентификатор
      text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
  }

  const updatedTodos = (toDoItem: ToDo) => {
    const updated = todos.map(todo => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone
      }
      return todo;
    });
    setTodos(updated);
  }

  const deleteTodos = (toDoItem: ToDo) => {
    const deleted = todos.filter(todo => todo.id !== toDoItem.id);
    setTodos(deleted);
  }

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updatedTodos={updatedTodos} deleteTodos={deleteTodos} />
    </>
  )
}
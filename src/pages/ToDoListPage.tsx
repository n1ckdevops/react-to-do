import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item";
import { RootState } from "../store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { createAction, updateAction, deleteAction } from "../feature/todoList"; // Импортируем действие для создания новой задачи

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);  // Получаем список задач из Redux
  const dispatch = useDispatch(); // Диспетчер для отправки действий в Redux

  const createNewToDo = (text: string) => {
    dispatch(createAction(text)); // Отправляем действие для создания новой задачи  
  }

  const updatedTodos = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem))
  }

  const deleteTodos = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem)) // Отправляем действие для удаления задачи
  }

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todoList} updatedTodos={updatedTodos} deleteTodos={deleteTodos} />
    </>
  )
}


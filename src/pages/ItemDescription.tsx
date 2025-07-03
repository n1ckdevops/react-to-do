import { useEffect, useState } from "react";
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom";


interface ComponentProps {
  todos: ToDo[];
}

export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id } = useParams() // Получаем id из параметров маршрута
  const [todo, setTodo] = useState<ToDo>()
  const navigate = useNavigate() // navigate - это функция, которая позволяет программно изменять маршрут
  useEffect(() => {
    // включает в себя все жизненные циклы компонента - иниц, рендер и дестрой и тд
    const searchTodos = todos.find(todo => todo.id === Number(id))
    if (searchTodos) {
      setTodo(searchTodos)
    } else {
      navigate("/404");
    }

  }, [id, todos, navigate])
  return (
    <h1 className="container">{todo?.text}</h1>
  )
}
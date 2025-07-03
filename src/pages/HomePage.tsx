import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"

export const HomePage = (props: { todos: ToDo[] }) => {
  return (
    <>
      {props.todos.map((todo: ToDo, index: number) => {
        return (
          <ListItem key={index} todo={todo} />
        )
      })}
    </>
  )
}
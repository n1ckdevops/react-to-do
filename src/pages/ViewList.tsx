import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"


interface ComponentProps {
  todos: ToDo[];
}

export const ViewList = ({ todos }: ComponentProps) => {
  return (
    <div className="container">
      {todos.map((todo: ToDo, index: number) => {
        return (
          <ListItem key={index} todo={todo} />
        )
      })}
    </div>
  )
}
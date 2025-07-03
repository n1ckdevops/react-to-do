import { ToDo } from "../../models/todo-item"

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <>
      <a href={`/list/${todo.id}`}>{todo.text}</a>
    </>
  )
}
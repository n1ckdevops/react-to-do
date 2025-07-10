import { ToDo } from "../../models/todo-item"
import { StyledLink } from "./ListItem.styled"


export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <StyledLink isDone={todo.isDone} to={`/list/${todo.id}`}>
      {todo.text}
    </StyledLink>
  )
}
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { Wrapper, ListCompleted, ListFailed } from "./ToDoList.styled"


export const ToDoList = (props: { todos: ToDo[], updatedTodos: Function, deleteTodos: Function }) => {

  const isChecked = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem key={index} toDoItem={item} updatedTodos={props.updatedTodos} deleteTodos={props.deleteTodos} />
        );
      })

  }
  const isUnchecked = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, index) => {
        return (
          <ToDoListItem key={index} toDoItem={item} updatedTodos={props.updatedTodos} deleteTodos={props.deleteTodos} />
        );
      })

  }
  return (
    <Wrapper>
      <ListFailed>
        {isChecked()}
      </ListFailed>
      <ListCompleted>
        {isUnchecked()}
      </ListCompleted>
    </Wrapper>
  )
}
import { ToDo } from '../../../models/todo-item'
import { Bounce, toast } from 'react-toastify';
import { Button, Buttons, Item, ItemText } from './ToDoListItem.styled';
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'

export const ToDoListItem = (props: { toDoItem: ToDo, updatedTodos: Function, deleteTodos: Function }) => {

  return (
    <Item>
      <ItemText>{props.toDoItem.text}</ItemText>
      <Buttons>
        <Button
          icon={trashIcon}
          onClick={() => {
            props.deleteTodos(props.toDoItem);
            toast.warn('Задача удалена!', {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }}
        >
        </Button>
        <Button
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => {
            props.updatedTodos(props.toDoItem);
            toast.info(`${props.toDoItem.isDone ? 'Задача не выполнена!' : 'Задача выполнена!'}`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }}
        >
        </Button>
      </Buttons>
    </Item>
  )
}
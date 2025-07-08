import { Bounce, toast } from 'react-toastify';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { update } from '../../feature/form';
import { Button, FormBlock, Input, Label, Wrapper } from './Form.styled';
import plusIcon from '../../assets/images/plus.png'


export const Form = (props: { createNewToDo: Function }) => {
  const inputForm = useSelector((state: RootState) => state.inputForm.value); // Состояние формы
  const dispatch = useDispatch();

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    if (!inputForm.trim()) {
      // Если текст пустой или состоит только из пробелов, ничего не делаем
      toast.error('Введите текст задачи!', {
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
      return;
    }
    props.createNewToDo(inputForm); // Добавляем задачу
    dispatch(update('')); // Очищаем поле ввода
    toast.success('Задача добавлена!', {
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
  };

  return (
    <Wrapper>
      <FormBlock onSubmit={formSubmit}>
        <Label>
          <Input
            value={inputForm}
            type="text"
            onChange={(e) => {
              dispatch(update(e.target.value));
            }}
          />
          <Button icon={plusIcon} />
        </Label>
      </FormBlock>
    </Wrapper >
  );
};
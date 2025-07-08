import styles from './Form.module.scss';
import { Bounce, toast } from 'react-toastify';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { update } from '../../feature/form';

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
    <div className={styles.form}>
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={inputForm}
            type="text"
            className={styles.input}
            onChange={(e) => {
              dispatch(update(e.target.value));
            }}
          />
          <button className={styles.button} type="submit">

          </button>
        </label>
      </form>
    </div>
  );
};
import { useState } from 'react';
import styles from './Form.module.scss';
import { Bounce, toast } from 'react-toastify';

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('');

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    if (!text.trim()) {
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
    props.createNewToDo(text); // Добавляем задачу
    setText(''); // Очищаем поле ввода
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
            value={text}
            type="text"
            className={styles.input}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className={styles.button} type="submit">

          </button>
        </label>
      </form>
    </div>
  );
};

import { useState } from 'react';
import styles from './Form.module.scss'
import { Bounce, toast } from 'react-toastify';

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('')
  const formSubmit = () => {
    if (text) {
      props.createNewToDo(text);
      setText('');
    }
  }
  return (
    <div className={styles.form}>
      <form action="#" onSubmit={formSubmit} >
        <label>
          <input
            value={text}
            type="text"
            className={styles.input}
            onChange={(e) => {
              setText(e.target.value);

            }} />
          <button className={styles.button}
            type="submit"
            onClick={() => toast.success(`Задача добавлена!`, {

              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            })}>
          </button>
        </label>
      </form>
    </div>
  );
}
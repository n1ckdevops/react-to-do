
import { useState } from 'react';
import styles from './Form.module.scss'

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
            onChange={(e) => setText(e.target.value)} />
          <button className={styles.button}></button>
        </label>
      </form>
    </div>
  );
}
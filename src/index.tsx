import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { ToDoListPage } from './pages/ToDoListPage';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое действие',
    isDone: false
  },
  {
    id: 1,
    text: 'Второе действие',
    isDone: false
  },

  {
    id: 2,
    text: 'Третье действие',
    isDone: true
  },
  {
    id: 3,
    text: 'Четвертое действие',
    isDone: true
  }
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos} />}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
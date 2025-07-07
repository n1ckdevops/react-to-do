import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode> {/* Используем StrictMode для выявления потенциальных проблем в приложении */}
    <Provider store={store}> {/* Оборачиваем приложение в провайдер Redux для доступа к store */}
      <RouterProvider router={router} /> {/* Используем RouterProvider для управления маршрутизацией */}
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
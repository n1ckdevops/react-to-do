import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFoundPage } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Корневой компонент приложения, который содержит общую разметку и навигацию
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <ToDoListPage /> // Главная страница приложения, где отображается список задач
      },
      {
        path: '/list',
        element: <ViewList />, // Страница со списком задач, передаем туда массив todos
      },
      {
        path: '/list/:id',
        element: <ViewListItem /> // Страница для просмотра конкретной задачи по ID, передаем туда массив todos
      }
    ]
  },
  {
    path: '*',
  }
], { basename: '/react-to-do/' })
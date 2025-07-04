import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFoundPage } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { ToDo } from "./models/todo-item";


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


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <ToDoListPage />
      },
      {
        path: '/list',
        element: <ViewList todos={todos} />,
      },
      {
        path: '/list/:id',
        element: <ViewListItem todos={todos} />
      }
    ]
  },
  {
    path: '*',
  }
], /*{ basename: '/app/' }*/)
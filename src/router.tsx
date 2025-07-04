import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFoundPage } from "./pages/404";
import { HomePage } from "./pages/HomePage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ItemDescription } from "./pages/ItemDescription";
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
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/',
        children: [
          {
            path: ':id',
            element: <ItemDescription todos={todos} />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
], /*{ basename: '/app/' }*/)
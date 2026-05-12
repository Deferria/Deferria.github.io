import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import Home from './routes/home'
import About from './routes/about'
import Task from './routes/task'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { index: true, element: <div></div> }, 
      { path: "about", element: <About /> }, 
      { path: "home", element: <Home /> }, 
      { path: "task", element: <Task /> },
      { path: "*", element: <div>404 Not Found</div> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
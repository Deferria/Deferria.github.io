import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import Home from './routes/home'
import About from './routes/about'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { index: true, element: <Home /> },      // index: true 代表父路径的默认页面，即路径为 "/"
      { path: "about", element: <About /> },    // 对应路径为 "/about"
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
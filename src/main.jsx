import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Home from './routes/home'
import About from './routes/about'
import Task from './routes/task'
import ExamInfo from './routes/examinfo'
import { HashRouter, Routes, Route } from 'react-router-dom'

// use hash router to avoid 404 error when refreshing the page
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="task" element={<Task />} />
        <Route path="examinfo" element={<ExamInfo />} />
      </Route>
    </Routes>
  </HashRouter>
)
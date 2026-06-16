import { Outlet, Link } from 'react-router-dom'

import '../main.css'

export default function Root() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">回到根节点</Link> | <Link to="/home">Home</Link> | <Link to="/task">Task</Link> | <Link to="/examinfo">Exam Info</Link> | <Link to="/about">About</Link> 
        </nav>
      </header>
      <div class="container">
        <div>
          <h1>欢迎来到 Dedicatiaaaaa 的杂物间~ 喵~ 🐱 </h1>
          <main>
            <Outlet />
          </main>
        </div>
      </div>

      <footer>
        <p>Copyright &copy; 2026 Dedicatiaaaaa. All rights reserved.</p>
      </footer>
    </>
  )
}
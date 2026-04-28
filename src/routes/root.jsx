import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faMailReply, faArchive } from '@fortawesome/free-solid-svg-icons'

import '../main.css'

export default function Root() {
  return (
    <>
      <div className='container'>
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
        </header>
        <div class="content">
          <div>
            <h1>欢迎来到 Dedicatiaaaaa 的杂物间~ 喵~ 🐱 </h1>
            <p>
              下面是常用的联系方式和链接, 欢迎访问~
            </p>
          </div>
          <div class="card">
            <h2><FontAwesomeIcon icon={faArrowRightToBracket} /><span> </span>Github</h2>
            <div>https://github.com/Deferria</div>
            <a href='https://github.com/Deferria' target='_blank' rel='noopener noreferrer'>
              点此跳转
            </a>
            <div class="sol">
              最近没有什么有趣的代码, 但是欢迎访问我的 Github 主页...
            </div>
          </div>
          <div class="card">
            <h2><FontAwesomeIcon icon={faMailReply} /><span> </span>Email</h2>
            <div>dedicatia@sjtu.edu.cn</div>
            <a href='mailto:dedicatia@sjtu.edu.cn' target='_blank' rel='noopener noreferrer'>
              点此发送邮件
            </a>
            <div class="sol">
              这是我的邮箱地址, 欢迎联系我~
            </div>
          </div>
          <div className='card'>
            <h2><FontAwesomeIcon icon={faArchive} /><span> </span>QQ</h2>
            <div>1921585136</div>
            <div class="sol">
              欢迎添加好友~ QQ 很偏娱乐, 不必太严肃哦 🤗
            </div>
          </div>

          <div className='card'>
            <h2><FontAwesomeIcon icon={faArchive} /><span> </span>QQ (bot)</h2>
            <div>3857892183</div>
            <div class="sol">
              这是之前测试的 QQ 机器人账号, 不经常使用, 不过可以来玩玩<s>当小白鼠</s> 🤖
            </div>
          </div>

          <h3> 其他信息就先不展示了喵! 😼 </h3>
          <main>
            <Outlet />
          </main>
        </div>

        <footer>
          <p>Dedicatiaaaaa &copy; 2026 | Author | github.io</p>
        </footer>
      </div>
    </>
  )
}
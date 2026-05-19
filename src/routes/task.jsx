import { useState, useEffect, use } from 'react';

export default function Task() {
  const [tasks, setTasks] = useState(null);
  const [taskmeta, setTaskmeta] = useState(null);

  useEffect(() => {
    fetch('/tasks.json') 
      .then(r => r.json())
      .then(setTasks);
  }, []);

  useEffect(() => {
    fetch('/task_meta.json')
      .then(r => r.json())
      .then(setTaskmeta);
  }, []);

  const displayTasks = () => {
    return tasks.map(task => {
      if (!task.zombie) {
        if (!task.complete) {
          return (
            <li key={task.id}>
              <b>{task.course_name} - {task.assignment_name}</b> | 
              <span className='warning'>截止日期是 {task.due_at}</span> | 
              <span className='warning-green'>可用日期是 {task.lock_at}</span>
              <p>详细内容: {task.explanation}</p>
            </li>
          );
        }
        else {
          return (
            <li key={task.id}>
              <b>{task.course_name} - {task.assignment_name}</b> | 
              <span className='warning'>截止日期是 {task.due_at}</span> | 
              <span className='warning-green'>可用日期是 {task.lock_at}</span> | 
              <span className='warning-yellow'>已完成</span>
              <p>详细内容: {task.explanation}</p>
            </li>
          );
        }
      }
      else {
        return (<li key={task.id}>
          <span>{task.course_name} - {task.assignment_name} (僵尸任务, 无需理会)</span>
        </li>
      );
      }
    });
  }

  if (!tasks) return <p>Loading...</p>;

  return (
    <>
      <h2>任务列表</h2>
      <h3>这里将更新本学期内所有学习任务, 上次更新时间: {taskmeta?.last_saved}</h3>
      <div>---------------------------------------------------------------</div>
      <ul>
        {displayTasks()}
      </ul>
    </>
  )
}

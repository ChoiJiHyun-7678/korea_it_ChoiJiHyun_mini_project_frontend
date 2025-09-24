/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { addTask, getTasks } from "../../apis/Board.js";
import * as s from "./style";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

function Board({ user, setCompleted }) {
  const [content, setContent] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks(user);
    setTasks(res.data);
    setCompleted(res.data.filter((t) => t.completed));
  };

  const handleAddTask = async () => {
    if (!content.trim()) return;
    await addTask(user, { content, completed: false });
    setContent("");
    fetchTasks();
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    setCompleted(updated.filter((t) => t.completed));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div css={s.container}>
      <h1>
        {user}의 할일
      </h1>
      <div css={s.inputContainer}>
        <Input
          placeholder="할일 입력"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleAddTask}>추가</Button>
      </div>
      <ul css={s.taskList}>
        {tasks.map((task) => (
          <li 
            key={task.id} css={s.taskItem(task.completed)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            {task.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Board;

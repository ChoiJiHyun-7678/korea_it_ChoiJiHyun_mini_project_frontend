import { useEffect, useState } from "react";
import { addTask, getTasks } from "../../apis/board";
import * as s from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
    const updated = tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t);
    setTasks(updated);
    setCompleted(updated.filter((t) => t.completed));
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div style={s.Container}>
      <h1>
        {user}(님)의 할일
      </h1>
      <Input placeholder="할일 입력" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={handleAddTask}>
        추가
      </Button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={s.TaskItem(task.completed)}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
            {task.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Board;

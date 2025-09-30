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
    if (!user) return;  // 로그인 안 된 경우 요청 안 보냄
    try {
      const res = await getTasks(user);
      setTasks(res.data);
      setCompleted(res.data.filter((t) => t.completed));
    } catch (err) {
      console.error("할일 불러오기 실패:", err);
    }
  };

  const handleAddTask = async () => {
    if (!content.trim() || !user) return;
    try {
      await addTask(user, { content, completed: false });
      setContent("");
      fetchTasks();
    } catch (err) {
      console.error("할일 추가 실패:", err);
    }
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
  }, [user]); // user가 바뀌면 다시 요청

  if (!user) {
    return <h2>로그인 후 이용 가능합니다.</h2>;
  }

  return (
    <div css={s.container}>
      <h1>{user}의 할일</h1>
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
          <li key={task.id} css={s.taskItem(task.completed)}>
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

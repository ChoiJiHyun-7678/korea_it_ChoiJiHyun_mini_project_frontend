/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Board from "./pages/Board/Board";

function App() {
  const [user, setUser] = useState("");          // 로그인한 사용자 이름 저장
  const [Completed, setCompleted] = useState([]); // 완료된 할일 저장

  return (
    <Router>
      <Routes>
        {/* "/"로 접근하면 자동으로 /register로 이동 */}
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/board" element={<Board user={user} setCompleted={setCompleted} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;

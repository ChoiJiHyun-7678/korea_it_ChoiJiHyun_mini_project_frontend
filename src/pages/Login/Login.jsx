/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from "./style";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });

      if (res.data.message === "로그인 성공") {
        setUser(res.data.username);  // App.jsx에 user 저장
        navigate("/board");          // Board 페이지로 이동
      } else {
        alert("아이디 또는 비밀번호 오류");
      }
    } catch (err) {
      console.error(err);
      alert("로그인 실패");
    }
  };

  return (
    <div css={s.container}>
      <h1>로그인</h1>
      <Input
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>로그인</Button>
    </div>
  );
}

export default Login;

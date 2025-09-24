/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { loginUser } from "../../apis/Auth";
import * as s from "./style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Login({ setUser, setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({ username, password });
      if (res.data.includes("성공")) {
        setUser(username);
        setPage("board");
      } else {
        alert("아이디 또는 비밀번호 오류");
      }
    } catch {
      alert("로그인 실패");
    }
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>로그인</h1>
      <div css={s.form}>
        <Input
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 기본 버튼: 진한 회색 + 흰 글씨 */}
        <Button onClick={handleLogin}>로그인</Button>

        {/* 회원가입 버튼: 흰 배경 + 검정 글씨 */}
        <Button onClick={() => setPage("register")} variant="blackText">
          회원가입으로
        </Button>
      </div>
    </div>
  );
}

export default Login;

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { registerUser } from "../../apis/Auth";
import * as s from "./style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
function Register({ setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await registerUser({ username, password });
      alert(res.data);
      setPage("login");
    } catch {
      alert("회원가입 실패");
    }
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>회원가입</h1>
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
        <Button onClick={handleRegister}>회원가입</Button>
        <Button onClick={() => setPage("login")}>로그인으로</Button>
      </div>
    </div>
  );
}

export default Register;

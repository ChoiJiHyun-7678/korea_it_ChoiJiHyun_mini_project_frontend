import { useState } from "react";
import { registerUser } from "../../apis/auth";
import * as s from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
    <div style={s.Container}>
      <h1>회원가입</h1>
      <Input placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleRegister}>회원가입</Button>
      <Button onClick={() => setPage("login")}>로그인으로</Button>
    </div>
  );
}

export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style"; // css 재정의

function Register() {
  console.log("✅ Register.jsx 불러옴");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("회원가입 실패");

      alert("회원가입 완료! 로그인 해주세요.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("회원가입 중 오류 발생");
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>회원가입</h1>
      <input
        type="text"
        placeholder="아이디 입력"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        css={s.input}
      />
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        css={s.input}
      />
      <div css={s.buttonContainer}>
        <button onClick={handleRegister} css={s.primaryButton}>
          회원가입
        </button>
        <button onClick={handleCancel} css={s.secondaryButton}>
          취소
        </button>
      </div>
    </div>
  );
}

export default Register;

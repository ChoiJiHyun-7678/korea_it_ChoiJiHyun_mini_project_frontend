import { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Board from "./pages/Board/Board";
import Completed from "./pages/Completed/Completed";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [completed, setCompleted] = useState([]);

  if (!user) {
    return page === "register" ? <Register setPage={setPage} /> : <Login setUser={setUser} setPage={setPage} />;
  }

  return (
    <div>
      <button onClick={() => setPage("board")}>
        할일
      </button>
      <button onClick={() => setPage("completed")}>
        완료된 할일
      </button>
      <button onClick={() => setUser(null)}>
        로그아웃
      </button>

      {page === "board" && <Board user={user} setCompleted={setCompleted} />}
      {page === "completed" && <Completed completed={completed} />}
    </div>
  );
}

export default App;

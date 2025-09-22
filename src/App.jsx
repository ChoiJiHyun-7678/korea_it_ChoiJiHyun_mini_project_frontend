import { useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Board from "./pages/Board/Board";
import Completed from "./pages/Completed/Completed";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [completed, setCompleted] = useState([]);

  return (
    <>
      {page === "login" && <Login setUser={setUser} setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "board" && <Board user={user} setCompleted={setCompleted} />}
      {page === "completed" && <Completed completed={completed} />}
    </>
  );
}

export default App;

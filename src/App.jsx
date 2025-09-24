import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Board from "./pages/Board/Board";
import Completed from "./pages/Completed/Completed";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Board />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

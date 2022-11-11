import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;

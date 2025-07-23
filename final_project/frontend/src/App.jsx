import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
function Home() {  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-4xl font-bold">
      ✅ Tailwind is Working!
    </div>
  ); }
// function Login() { return <h1 className="text-3xl text-center mt-10">🔑 Login</h1>; }
function Signup() { return <h1 className="text-3xl text-center mt-10">📝 Signup</h1>; }

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

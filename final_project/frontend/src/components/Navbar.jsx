import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/signup" className="hover:underline">Signup</Link>
    </nav>
  );
}

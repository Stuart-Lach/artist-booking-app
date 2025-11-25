import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookingPage from "./pages/BookingPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight">
            ArtistBook
          </Link>
          <nav className="flex gap-4 text-xs sm:text-sm">
            <Link to="/profile" className="hover:text-indigo-400">
              Profile
            </Link>
            <Link to="/book" className="hover:text-indigo-400">
              Book
            </Link>
            <Link to="/login" className="hover:text-indigo-400">
              Login
            </Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/login"
              element={<div className="p-6">Login Page Placeholder</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function LoginPage() {
  return <div>Login Page Placeholder</div>;
}

export default App;

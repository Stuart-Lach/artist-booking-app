import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            ArtistBook
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link to="/profile" className="hover:text-indigo-400">Profile</Link>
            <Link to="/book" className="hover:text-indigo-400">Book</Link>
            <Link to="/login" className="hover:text-indigo-400">Login</Link>
          </nav>
        </header>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Temporary placeholder pages (Copilot can flesh these out later)
function LandingPage() {
  return <div>Landing Page Placeholder</div>;
}
function ProfilePage() {
  return <div>Profile Page Placeholder</div>;
}
function BookingPage() {
  return <div>Booking Form Placeholder</div>;
}
function LoginPage() {
  return <div>Login Page Placeholder</div>;
}

export default App;

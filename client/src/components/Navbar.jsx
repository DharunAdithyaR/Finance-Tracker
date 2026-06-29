import { Link, useNavigate } from "react-router-dom";

function Navbar() {
const navigate = useNavigate();

const userInfo = JSON.parse(
localStorage.getItem("userInfo")
);

const handleLogout = () => {
localStorage.clear();
navigate("/");
};

return ( <div className="w-64 min-h-screen fixed left-0 top-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-700 text-white shadow-2xl">

  {/* Logo */}
  <div className="p-6 border-b border-white/20">

    <h1 className="text-3xl font-bold">
      💰 Budget Buddy
    </h1>

    <p className="text-sm text-gray-200 mt-2">
      Personal Finance Manager
    </p>

  </div>

  {/* User */}
  {userInfo && (
    <div className="p-6 flex items-center gap-3 border-b border-white/20">

      <div className="w-12 h-12 rounded-full bg-white text-indigo-700 flex items-center justify-center font-bold text-xl">
        {userInfo.name?.charAt(0).toUpperCase()}
      </div>

      <div>
        <p className="font-semibold">
          {userInfo.name}
        </p>

        <p className="text-sm text-gray-200">
          User
        </p>
      </div>

    </div>
  )}

  {/* Navigation */}
  <div className="p-4 space-y-3">

    <Link
      to="/dashboard"
      className="block px-4 py-3 rounded-xl hover:bg-white/20 transition"
    >
      🏠 Dashboard
    </Link>

    <Link
      to="/transactions"
      className="block px-4 py-3 rounded-xl hover:bg-white/20 transition"
    >
      💳 Transactions
    </Link>

    <Link
      to="/analytics"
      className="block px-4 py-3 rounded-xl hover:bg-white/20 transition"
    >
      📊 Analytics
    </Link>

    <Link
      to="/budget"
      className="block px-4 py-3 rounded-xl hover:bg-white/20 transition"
    >
      🎯 Budget Planner
    </Link>

    <Link
      to="/reports"
      className="block px-4 py-3 rounded-xl hover:bg-white/20 transition"
    >
      📄 Reports
    </Link>

    <Link
      to="/insights"
      className="block px-4 py-3 rounded-xl hover:bg-white/20 transition"
    >
      🤖 AI Insights
    </Link>

    <Link
      to="/profile"
      className="block px-4 py-3 rounded-xl hover:bg-white/20 transition"
    >
      👤 Profile
    </Link>

  </div>

  {/* Logout */}
  <div className="absolute bottom-6 left-4 right-4">

    <button
      onClick={handleLogout}
      className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition"
    >
      Logout
    </button>

  </div>

</div>

);
}

export default Navbar;

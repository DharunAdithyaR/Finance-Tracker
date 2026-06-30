import { Link, useLocation } from "react-router-dom";

function Sidebar({ user, onLogout }) {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Transactions", path: "/transactions", icon: "💳" },
    { name: "Analytics", path: "/analytics", icon: "📊" },
    { name: "Budget Planner", path: "/budget", icon: "🎯" },
    { name: "Reports", path: "/reports", icon: "📄" },
    { name: "AI Insights", path: "/ai-insights", icon: "🤖" },
    { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-blue-600 to-purple-700 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-start gap-3">
          <span className="text-4xl">💰</span>

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              <span className="block">Budget</span>
              <span className="block ml-6">Buddy</span>
            </h1>

            <p className="text-sm mt-2 text-white/80">
              Personal Finance Manager
            </p>
          </div>
        </div>
      </div>

      {/* User */}
      <div className="p-6 border-b border-white/20 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-2xl">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            {user?.name || "User"}
          </h3>

          <p className="text-white/80">User</p>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 py-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-4 text-lg hover:bg-white/10 transition ${
              location.pathname === item.path
                ? "bg-white/20"
                : ""
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="p-4">
        <button
          onClick={onLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-2xl"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

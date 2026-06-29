import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "userInfo",
        JSON.stringify(res.data)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };
  

  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white flex-col justify-center px-16">

        <h1 className="text-6xl font-bold mb-6">
          💰 Budget Buddy
        </h1>

        <p className="text-xl mb-10">
          Manage your finances smarter and
          achieve your financial goals.
        </p>

        <div className="space-y-5 text-lg">

          <p>📈 Track Income & Expenses</p>

          <p>💵 Monthly Budget Planning</p>

          <p>📄 Export PDF & CSV Reports</p>

          <p>📊 Interactive Analytics Dashboard</p>

          <p>🔒 Secure Personal Finance Manager</p>

        </div>

      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">

          <div className="text-center mb-8">

            <div className="text-5xl mb-3">
              💰
            </div>

            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to your Budget Buddy account
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />

            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Login
            </button>

          </form>

          <div className="text-center mt-6">

            <p className="text-gray-600">
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
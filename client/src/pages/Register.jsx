import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleRegister = async (e) => {
e.preventDefault();


try {
  await API.post("/auth/register", {
    name,
    email,
    password,
  });

  alert("Registration Successful!");

  navigate("/");
} catch (error) {
  alert(
    error.response?.data?.message ||
      "Registration Failed"
  );
}


};

return ( <div className="min-h-screen flex">


  {/* Left Section */}
  <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white flex-col justify-center px-16">

    <h1 className="text-6xl font-bold mb-6">
      💰 Budget Buddy
    </h1>

    <p className="text-xl mb-10">
      Start your financial journey and
      take control of your money today.
    </p>

    <div className="space-y-5 text-lg">

      <p>📈 Monitor Income & Expenses</p>

      <p>💵 Smart Budget Planning</p>

      <p>📄 PDF & CSV Export Reports</p>

      <p>📊 Interactive Analytics Dashboard</p>

      <p>🔒 Secure & Private Data Storage</p>

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
          Create Account
        </h2>

        <p className="text-gray-500 mt-2">
          Start managing your finances smarter
        </p>

      </div>

      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

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
            placeholder="Create a password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Create Account
        </button>

      </form>

      <div className="text-center mt-6">

        <p className="text-gray-600">
          Already have an account?
        </p>

        <Link
          to="/"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Login Here
        </Link>

      </div>

    </div>

  </div>

</div>

);
}
export default Register;

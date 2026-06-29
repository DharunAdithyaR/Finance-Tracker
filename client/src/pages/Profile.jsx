import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Profile() {
  const [profile, setProfile] =
    useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res =
        await API.get("/profile");

      setProfile(res.data);
    } catch (error) {
      console.log(error);
      alert(
        "Failed to load profile"
      );
    }
  };

  if (!profile) {
    return (
      <>
        <Navbar
          darkMode={false}
          setDarkMode={() => {}}
          showDashboard={false}
          showProfile={false}
        />

        <div className="ml-64 min-h-screen p-6 bg-gray-100">
          <h2 className="text-xl dark:text-white">
            Loading...
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar
        darkMode={false}
        setDarkMode={() => {}}
        showDashboard={false}
        showProfile={false}
      />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-10 ml-65">

        <div className="max-w-3xl bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-lg">

          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div className="space-y-5 text-lg">

            <p>
              <strong>
                Name:
              </strong>{" "}
              {profile.name}
            </p>

            <p>
              <strong>
                Email:
              </strong>{" "}
              {profile.email}
            </p>

            <p>
              <strong>
                Member Since:
              </strong>{" "}
              {new Date(
                profile.createdAt
              ).toLocaleDateString()}
            </p>

            <p>
              <strong>
                Total Transactions:
              </strong>{" "}
              {
                profile.totalTransactions
              }
            </p>

            <p>
              <strong>
                Total Income:
              </strong>{" "}
              ₹
              {
                profile.totalIncome
              }
            </p>

            <p>
              <strong>
                Total Expense:
              </strong>{" "}
              ₹
              {
                profile.totalExpense
              }
            </p>

            <p className="text-3xl font-bold text-green-600">
              Current Balance: ₹
              {
                profile.balance
              }
            </p>

          </div>

          {/* Dashboard Button at Bottom */}
          <div className="mt-10 text-center">

            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to Dashboard
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;
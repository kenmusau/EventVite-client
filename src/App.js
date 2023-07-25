import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import UserView from "./components/UserView";

function App() {
  const [hosts, setHosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const base_url = "http://localhost:9292";
  const navigate = useNavigate();

  useEffect(() => {
    fetchHost();
  }, []);

  async function fetchHost() {
    try {
      const resp = await fetch(`${base_url}/hosts`);
      const hosts = await resp.json();
      setHosts(hosts);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      console.log("Please enter both email and password.");
      return;
    }

    // Check if the logging-in user exists in the hosts array
    const user = hosts.find((user) => user.email === email);
    if (!user) {
      console.log("User does not exist in the hosts array.");
      localStorage.setItem("isRegisterForm", JSON.stringify(true)); // Store the value in localStorage

      return;
    }

    // Check if the password matches the user's password
    if (user.password !== password) {
      console.log("Incorrect password.");
      return;
    }

    // User login is successful, set the currentUser state
    setCurrentUser(user);
    setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
    navigate("/dashboard");
  }

  // Function to handle the logout action
  const handleLogout = () => {
    // Clear user-related data and log the user out
    setIsLoggedIn(false);
    setCurrentUser(null);
    setEmail("");
    setPassword("");
    // Add any other logout actions you need here
    // For example, clearing local storage, resetting tokens, etc.
  };

  return (
    <div className="App bg-slate-50">
      <Routes>
        {isLoggedIn ? (
          <Route
            path="/dashboard"
            element={
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                  user={currentUser}
                  base_url={base_url}
                  onHandleLogout={handleLogout}
                />
                <UserView user={currentUser} base_url={base_url} />
              </>
            }
          />
        ) : // Conditionally render the Login or Register component based on isRegisterForm state
        isRegisterForm ? (
          <Route
            path="/register"
            element={
              <Register
                onToogleForm={() => setIsRegisterForm(false)}
                base_url={base_url}
              />
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <Login
                email={email}
                password={password}
                onLoginSubmit={handleLoginSubmit}
                onToogleForm={() => setIsRegisterForm(true)}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;

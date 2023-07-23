import { useEffect, useState } from "react";
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
      setIsRegisterForm(true); // If the user doesn't exist, switch to the register form
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
  }

  return (
    <div className="App bg-slate-50">
      {isLoggedIn ? (
        <>
          <Header isLoggedIn={isLoggedIn} />
          <UserView user={currentUser} base_url={base_url} />
        </>
      ) : // Conditionally render the Login or Register component based on isRegisterForm state
      isRegisterForm ? (
        <Register
          onToogleForm={() => setIsRegisterForm(false)}
          base_url={base_url}
        />
      ) : (
        <Login
          email={email}
          password={password}
          onLoginSubmit={handleLoginSubmit}
          onToogleForm={() => setIsRegisterForm(true)}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
    </div>
  );
}

export default App;

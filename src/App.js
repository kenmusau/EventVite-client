import { useEffect, useState } from "react";

import Header from "./components/Header";

import Login from "./components/Login";
import Register from "./components/Register";
import UserView from "./components/UserView";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [hosts, setHosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const base_url = "http://localhost:3000/events";
  const hosts_url = "http://localhost:9292/hosts";

  useEffect(() => {
    fetchHost();
  }, []);

  async function fetchHost() {
    try {
      const resp = await fetch(hosts_url);
      const hosts = await resp.json();
      setHosts(hosts);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  console.log(hosts);

  function toggleForm(formName) {
    setIsLoggedIn(formName);
  }

  function handleLogin() {
    setShowLogin((cur) => !cur);
  }

  console.log(showLogin);

  return (
    <div className="App bg-slate-50">
      {/* <Header onHandleLogin={handleLogin} loggedIn={showLogin} /> */}

      <Login />

      {/* {showLogin ? (
        isLoggedIn === "login" ? (
          <Login onToogleForm={toggleForm} />
        ) : (
          <Register onToogleForm={toggleForm} />
        )
      ) : (
        <UserView />
      )} */}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

import Header from "./components/Header";

import Login from "./components/Login";
import Register from "./components/Register";
import UserView from "./components/UserView";

function App() {
  const [events, setEvents] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState("login");

  const base_url = "http://localhost:3000/events";

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await fetch(base_url);
      const events = await response.json();
      setEvents(events);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  function toggleForm(formName) {
    setIsLoggedIn(formName);
  }

  function handleLogin() {
    setShowLogin((cur) => !cur);
  }

  console.log(showLogin);

  return (
    <div className="App bg-slate-50">
      <Header onHandleLogin={handleLogin} loggedIn={showLogin} />

      {showLogin ? (
        isLoggedIn === "login" ? (
          <Login onToogleForm={toggleForm} />
        ) : (
          <Register onToogleForm={toggleForm} />
        )
      ) : (
        <UserView events={events} />
      )}
    </div>
  );
}

export default App;

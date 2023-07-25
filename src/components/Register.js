import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ onToogleForm, base_url }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handlCreateHost(e) {
    e.preventDefault();
    if (!email || !password) return;
    fetch(`${base_url}/hosts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((host) => console.log(host));
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-200">
      <h1 className="text-4xl font-bold mb-8">
        <span className="font-black text-orange-600  cursor-pointer">
          ∈√ΞNT
        </span>
        <span className="text-black">-VitE </span>
        Host Dashboard
      </h1>
      <form
        className="flex flex-col justify-center items-center w-96 bg-white p-6 rounded shadow-md"
        onSubmit={handlCreateHost}
      >
        <label htmlFor="text">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          name="name"
          id="name"
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@gmail.com"
          name="email"
          id="email"
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          name="password"
          id="password"
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <button className="w-full py-2 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none">
          Sign Up
        </button>
      </form>
      <ul>
        <li
          onClick={() => onToogleForm("login")}
          className="mt-4 text-sm text-orange-600 hover:text-blue-800 focus:outline-none font-extrabold"
        >
          <Link to="/">Already have an account? Login here</Link>
        </li>
      </ul>
    </div>
  );
}

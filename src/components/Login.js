import { useState } from "react";

export default function Login({ onToogleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    console.log(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-200">
      <form
        className="flex flex-col justify-center items-center w-96 bg-white p-6 rounded shadow-md"
        onSubmit={handleSubmit}
      >
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
          Log in
        </button>
      </form>

      <button
        onClick={() => onToogleForm("register")}
        className="mt-4 text-sm text-orange-600 hover:text-blue-800 focus:outline-none font-extrabold"
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
}

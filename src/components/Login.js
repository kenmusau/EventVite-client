import { Link } from "react-router-dom";
export default function Login({
  onLoginSubmit,
  onToogleForm,
  email,
  password,
  setEmail,
  setPassword,
}) {
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
        onSubmit={onLoginSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="steve@gmail.com"
          name="email"
          id="email"
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="12345"
          name="password"
          id="password"
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <button className="w-full py-2 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none">
          Log in
        </button>
      </form>
      <ul>
        <li
          onClick={() => onToogleForm("login")}
          className="mt-4 text-sm text-orange-600 hover:text-blue-800 focus:outline-none font-extrabold"
        >
          <Link to="/register">Already have an account? Login here</Link>
        </li>
      </ul>
    </div>
  );
}

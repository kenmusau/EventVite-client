export default function Header({ onHandleLogin, loggedIn }) {
  return (
    <div className="max-w-full  sticky top-0 z-50 bg-slate-50 border-b-2 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto last:p-4  ">
        <h1 className="font-black text-orange-600  cursor-pointer text-3xl">
          ∈√ΞNT<span className="text-black text-2xl">-VitE</span>
        </h1>

        <div className="flex gap-10 ">
          <h2>Admin Dashboard</h2>
          <button className="cursor-pointer hover:text-orange-500 font-extrabold">
            Create Events
          </button>
          <button
            className="cursor-pointer hover:text-orange-500 font-extrabold"
            onClick={onHandleLogin}
          >
            {loggedIn ? "LogOut" : "Log In"}
          </button>
        </div>
      </div>
    </div>
  );
}

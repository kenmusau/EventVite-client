import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateEvent from "./CreateEvent";
export default function Header({ onHandleLogout, user, base_url }) {
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);

  const toggleCreateEventModal = () => {
    setIsCreateEventOpen((prev) => !prev);
  };

  return (
    <div className="max-w-full  sticky top-0 z-50 bg-slate-50 border-b-2 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto last:p-4  ">
        <h1 className="font-black text-orange-600  cursor-pointer text-3xl">
          ∈√ΞNT<span className="text-black text-2xl">-VitE</span>
        </h1>

        <div className="flex gap-10 ">
          <h2>Admin Dashboard</h2>

          <ul>
            <li className="cursor-pointer hover:text-orange-500 font-extrabold">
              <Link to="/dashboard">Your Events</Link>
            </li>
          </ul>

          <button
            className="cursor-pointer hover:text-orange-500 font-extrabold"
            onClick={toggleCreateEventModal}
          >
            Create Events
          </button>

          <ul>
            <li
              className="cursor-pointer hover:text-orange-500 font-extrabold"
              onClick={onHandleLogout}
            >
              <Link to="/">LogOut</Link>
            </li>
          </ul>
        </div>
      </div>

      {isCreateEventOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
          <div className="bg-white p-6 rounded shadow-md">
            <CreateEvent
              onClose={toggleCreateEventModal}
              user={user}
              base_url={base_url}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <div className="max-w-full  sticky top-0 z-50 bg-slate-50 border-b-2 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto last:p-4  ">
        <h1 className="font-black text-orange-600  cursor-pointer text-3xl">
          ∈√ΞNT<span className="text-black text-2xl">-VitE</span>
        </h1>

        <div className="flex gap-10 ">
          <h2 className="cursor-pointer hover:text-orange-500 font-extrabold">
            Create Events
          </h2>
          <h2 className="cursor-pointer hover:text-orange-500 font-extrabold">
            Log In
          </h2>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex justify-between bg-neutral-900 text-white p-5">
      <Link href={"/"} className="text-3xl">Navbar</Link>
      <div>
        <Link href={"/admin"}>admin</Link>
      </div>
    </div>
  );
}

export default Navbar;

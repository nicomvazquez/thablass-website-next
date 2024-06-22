import React from "react";
import Link from "next/link";

function AdminNavbar() {
  return (
    <div>
      <div className="flex justify-between max-w-4xl">
        <Link href={"/admin"}>productos</Link>
        <Link href={"/admin/new"}>añadir producto</Link>
        <Link href={"/admin/category"}>categorias</Link>
      </div>
    </div>
  );
}

export default AdminNavbar;

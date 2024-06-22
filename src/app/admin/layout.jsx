import React from "react";
import Navbar from "@/components/AdminNavbar";

function AdminLayout({ children }) {
  return (
    <>
      <Navbar />
      <h1>admin page</h1>
      {children}
    </>
  );
}

export default AdminLayout;

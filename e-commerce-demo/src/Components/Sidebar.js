import React from "react";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        top: "59.33px",
        left: 0
      }}
    >
      <h4 className="mb-4">My Sidebar</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/" className="nav-link text-white">Dashboard</a>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link text-white">Profile</a>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link text-white">Settings</a>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link text-white">Logout</a>
        </li>
      </ul>
    </div>
  );
}

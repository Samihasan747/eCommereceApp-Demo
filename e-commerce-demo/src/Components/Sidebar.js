import React from "react";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2>Categories</h2>
      <ul style={styles.list}>
        <li>Home</li>
        <li>Technology</li>
        <li>Sports</li>
        <li>Education</li>
        <li>Health</li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    position: "fixed",   // makes it stay in one place
    top: "6vh",
    left: 0,
    height: "100vh",     // full screen height
    width: "220px",
    backgroundColor: "#8bb9e7",
    color: "black",
    padding: "20px"
  },
  list: {
    listStyle: "none",
    padding: 0
  }
};

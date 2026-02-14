import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";



function App() {
  return (
    <>
      <Navbar
        logo="icon111.png"
        title="S-Mart"
        home="Home"
        Checkout="Checkout"
        Username="Username"
        Signup="Sign Up/Log In"
      />
      <Sidebar/>
    </>
  );
}

export default App;

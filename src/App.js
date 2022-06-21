import { useState } from "react";
import "./App.css";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const changeSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav className={sidebar ? "sidebar active" : "sidebar"}></nav>
      <div className="sidebar_close" onClick={changeSidebar} />
    </>
  );
}

export default App;

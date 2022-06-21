import { useState } from "react";
import "./App.css";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const changeSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="sidebar_close" onClick={changeSidebar} />
      <nav className={sidebar ? "sidebar active" : "sidebar"}></nav>
    </>
  );
}

export default App;

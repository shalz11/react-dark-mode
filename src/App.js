import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import { useState, useEffect } from "react";

// const getStorageTheme = () => {
//   let theme = "lightTheme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }
//   return theme;
// };

function App() {
  //const [theme, setTheme] = useState(getStorageTheme();
  const [theme, setTheme] = useState("lightTheme");

  const toggleThemeHandler = () => {
    if (theme === "lightTheme") {
      setTheme("darkTheme");
    } else setTheme("lightTheme");
  };
  useEffect(() => {
    document.documentElement.className = theme;
    //localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="container">
      <Navbar theme={theme} setTheme={toggleThemeHandler} />
      <Posts />
    </div>
  );
}

export default App;

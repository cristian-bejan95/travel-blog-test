import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div onClick={() => setShowLogin(false)}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

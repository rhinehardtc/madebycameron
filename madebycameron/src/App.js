import './App.css';
import Header from './Header';
import React, {useState} from 'react';

function App() {
  const [theme, setTheme] = useState("light");

  const lightColor = "white";
  const darkColor = "#150215";

  const lightTheme = {
    backgroundColor: lightColor,
  };

  const darkTheme = {
    backgroundColor: darkColor,
  }

  return (
    <div className="App" style={theme === "light" ? lightTheme : darkTheme}>
      <Header theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;

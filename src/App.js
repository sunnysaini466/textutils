import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState("initialState");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const enableToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnText("Disable Dark Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled.", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      setbtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled.", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          toggleMode={mode}
          enableToggleMode={enableToggleMode}
          btnText={btnText}
        />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <TextForm
                heading="My Textarea"
                toggleMode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

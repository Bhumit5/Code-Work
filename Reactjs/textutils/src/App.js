import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);  };

  return (
    <>
      <div className="container">
        <Alert alert={alert} />
        <Form showAlert={showAlert} title="Enter the text" />
      </div>
    </>
  );
}

export default App;

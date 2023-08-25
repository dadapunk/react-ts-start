import React, { useState } from "react";

export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function handleDelete() {
    setShowAlert(true);
  }

  function handleProceed() {
    setShowAlert(false);
    setShowButton(false);
  }

  function handleDismiss() {
    setShowAlert(false);
  }

  return (
    <div>
      {showAlert && (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceed}>Proceed</button>
          <button onClick={handleDismiss}>Dismiss</button>
        </div>
      )}
      {showButton && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}

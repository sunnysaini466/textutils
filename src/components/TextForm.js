import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("handle up button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("handle lo button clicked");
    let newText1 = text.toLowerCase();
    setText(newText1);
  };

  const handleOnChange = (event) => {
    console.log("handle on change clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <label htmlFor="myBox">{props.heading}</label>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="20"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>My text Summary</h2>
        <p>
          {text.length} Characters | {text.split(" ").length} Words
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

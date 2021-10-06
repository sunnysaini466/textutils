import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("handle up button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to upper case", "success");
  };

  const handleLoClick = () => {
    console.log("handle lo button clicked");
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Text is converted to lower case", "success");
  };

  const handleCapitalizedClick = () => {
    console.log("handle handleCapitalizedClick button clicked");
    let newText2 = text
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText2);
  };

  const handleCLRClick = () => {
    console.log("handle handleCLRClick button clicked");
    let newText3 = "";
    setText(newText3);
    props.showAlert("Text is cleared", "success");
  };

  const handleCopy = () => {
    console.log("handle handleCopy button clicked");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied.", "success");
  };

  const handleExtraSpaces = () => {
    var newText4 = text.split(/[ ]+/);
    setText(newText4.join(" "));
    props.showAlert("Extra spaces are removed from text.", "success");
  };

  const handleOnChange = (event) => {
    console.log("handle on change clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.toggleMode === "dark" ? "white" : "black" }}
      >
        <h3 className="mb-4">{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="20"
            style={{
              backgroundColor:
                props.toggleMode === "dark" ? "#2c373f" : "white",
              color: props.toggleMode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
        disabled={text.length===0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleCapitalizedClick}
        >
          Convert to Capitalized
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCLRClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.toggleMode === "dark" ? "white" : "black" }}
      >
        <h2>My Text Summary</h2>
        <p>
          {text.split("").filter((element)=>{return element.length!==0}).length} Words 
        </p>
        <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your to preview here."}</p>
      </div>
    </>
  );
}

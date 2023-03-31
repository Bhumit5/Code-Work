import React, { useState } from "react";

export default function Form(props) {
  const upper = () => {
    // let result = text.toUpperCase();
    // setText(result);
    
    setText(text.toUpperCase());
    props.showAlert("Your input is converted in uppercase!","success");
  };
  
  const change = (event) => {
    setText(event.target.value);
  };


  const [text, setText] = useState("");

  return (
    <div>
      <div className="my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          value={text}
          onChange={change}
          placeholder="Enter your text..."
        ></textarea>
      </div>
      <button className="btn btn-dark" onClick={upper}>
        Upper
      </button>

      <button className="btn btn-dark mx-2" onClick={upper}>
        Copy
      </button>

      <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
        <p><b> No. of characters:</b> {text.length}</p>
        <p><b> No. of words:</b> {text.split(' ').length}</p>
      </div>
    </div>
  );
}

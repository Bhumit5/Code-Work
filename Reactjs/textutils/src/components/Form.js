import React, { useState } from "react";

export default function Form(props) {
  const upper = () => {
    // let result = text.toUpperCase();
    // setText(result);
    setText(text.toUpperCase());
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
    </div>
  );
}

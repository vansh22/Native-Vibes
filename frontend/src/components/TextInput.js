import React, { useState } from "react";
import "./TextInput.css"; // Import the CSS file

function TextInput() {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Do something with the text input value
    console.log(text);
  }

  function handleClear() {
    setText("");
  }

  return (
    <div className="form-container">
      <img src="https://www.dsij.in/Portals/0/magazine_web_content/ArticleImages/3422/spr.jpg" alt="Example Image" className="image" />
      <form onSubmit={handleSubmit}>
        <label placeholder="I love temples">
          Enter some text:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="text-input" />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" onClick={handleClear} className="clear-button">Clear</button>
      </form>
    </div>
  );
}

export default TextInput;

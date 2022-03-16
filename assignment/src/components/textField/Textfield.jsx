import { TextField } from "@mui/material";
import React, { useState } from "react";
import "../style.css";

function Textfield() {
  //state to manage text data
  const [text, setText] = useState("");
  const [textData, setTextData] = useState([]);

  //function to handle submit on click enter button
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setTextData([...textData, text]);
      setText("");
    }
  };
  // console.log("textdata",textData)
  return (
    <>
      <TextField
        className="mainTextField"
        multiline
        rows={10}
        InputProps={{ height: "317px" }}
        value={text}
        name={"information"}
        placeholder="Write Something Here..."
        fullWidth
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleSubmit}
      />

      {textData.map((item) => (
        <div className="inputDataDiv">{item}</div>
      ))}
    </>
  );
}

export { Textfield };

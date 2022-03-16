import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../style.css";

function PostComponent() {
  return (
    <div className="postAndOnlyMeMainDiv">
      <button className="onlyMe">
        <LockIcon />
        ONLY ME
        <ArrowDropDownIcon />
      </button>
      <button className="post">POST</button>
    </div>
  );
}

export { PostComponent };

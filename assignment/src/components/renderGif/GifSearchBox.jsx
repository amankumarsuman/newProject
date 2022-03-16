import React from "react";
import "../style.css";
function GifSearchBox({
  renderError,
  handleSearchChange,
  handleSubmit,
  search,
}) {
  return (
    <>
      <div className="gifSearchMainDiv">
        {renderError()}
        <form>
          <input
            className="gifSearchBox"
            value={search}
            onChange={handleSearchChange}
            type="text"
            placeholder="search"
          />
          <button className="goBtn" onClick={handleSubmit} type="submit">
            Go
          </button>
        </form>
      </div>
    </>
  );
}

export { GifSearchBox };

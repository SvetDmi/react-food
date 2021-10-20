import React from "react";

function Search({ cb }) {
  const [value, setValue] = React.useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          placeholder="search"
          id="search-field"
          value={value}
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button
          className="btn"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };

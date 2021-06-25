import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  useEffect(() => {
    async () => {
      await axios.get("aaaaa");
    };
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Search;

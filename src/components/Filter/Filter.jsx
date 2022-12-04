import React from "react";
import "./Filter.css";

const Filter = ({ fetchFilter, name, handleClose }) => {
  return (
    <button
      className="filter-button"
      onClick={() => {
        handleClose();
        fetchFilter(`${name}`);
      }}
    >
      {name}
    </button>
  );
};
export default Filter;

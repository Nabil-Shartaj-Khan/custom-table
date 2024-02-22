import React from "react";

const CustomTable = ({ columnName, data, selectedColumns }) => {
  const handleClick = () => {
    alert("Please don't click me. I am not supposed to do anything!");
  };
  return (
    <div className="custom-table mt-4">
      <div className="column-head d-flex justify-content-evenly align-items-center fs-4 text-primary flex-wrap">
        {/* Render only selected columns */}
        {columnName.map((col, index) => {
          //we will check whether the column is selected
          if (selectedColumns.includes(col.value)) {
            return (
              <div key={index} className="header">
                {/* title of each column */}
                {col.title}
              </div>
            );
          }
          return null; //if the column isn't selected, then it will not be rendered
        })}
      </div>
      <div className="custom-table-body">
        {/* mapping through all the data row for data of rows */}
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="table-row d-flex justify-content-evenly align-items-center flex-wrap"
          >
            {columnName.map((col, colIndex) => {
              //checking for selected column data
              if (selectedColumns.includes(col.value)) {
                return (
                  <div key={colIndex} className="table-cell">
                    {/* different content based on value, select has publish and draft, action has edit and other remaining data */}
                    {col.value === "status" ? (
                      <select value={row[col.value]}>
                        <option value="pending">Publish</option>
                        <option value="completed">Draft</option>
                      </select>
                    ) : col.value === "action" ? (
                      <button className="btn btn-success" onClick={handleClick}>
                        Edit
                      </button>
                    ) : (
                      row[col.value]
                    )}
                  </div>
                );
              }
              return null; // if the column isn't selected, then it will not be rendered
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTable;

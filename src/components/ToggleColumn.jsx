import React, { useState } from "react";

const ToggleColumn = ({
  columnName,
  handleToggleColumn,
  selectedColumns,
  setSelectedColumns,
}) => {
  const [open, setOpen] = useState(false); //hamburger icon open or close state handling

  //for handling the open close state of the toggling
  const toggleOpen = () => {
    setOpen(!open);
  };

  //for handling the column visibility
  const handleCheckBox = (value) => {
    handleToggleColumn(value);
  };

  return (
    <div className="main-toggle">
      {/* section containing hamburger icon and table title */}

      <div className="d-flex justify-content-between align-items-center">
        <div className="hamburger-icon fs-2" onClick={toggleOpen}>
          ☰
        </div>
        <div className="fs-3 table-title fw-bold text-primary">
          Customized Table
        </div>
      </div>

      {/* this will initialize when the hamburger icon will be clicked  */}
      {open && (
        // this will show all the column names
        <div className="column-names">
          {columnName.map((col, index) => (
            //for each column names a checkbox will be rendered
            <div key={index} className="value-check">
              <input
                type="checkbox"
                id={col.value}
                className="value-check-input"
                checked={selectedColumns.includes(col.value)} //this checks if column is selected
                onChange={() => handleCheckBox(col.value)} //if checkbox is changed, handleCheckBox function will be called
              />
              {/* labels for the column titles */}
              <label htmlFor={col.value} className="value-check-label">
                {col.title}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleColumn;

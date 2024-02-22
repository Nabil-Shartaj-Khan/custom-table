import { useState } from "react";
import "./App.css";
import CustomTable from "./components/CustomTable";
import ToggleColumn from "./components/ToggleColumn";
import Footer from "./components/Footer";
import { columnName, data } from "./data/data";

function App() {
  //for tracking the selected columns and its initialized with all the column values so that all the columns are shown to begin with.
  const [selectedColumns, setSelectedColumns] = useState(
    columnName.map((col) => col.value)
  );

  //used for handling the toggling the columns
  const handleToggleColumn = (value) => {
    const index = selectedColumns.indexOf(value);
    if (index === -1) {
      setSelectedColumns([...selectedColumns, value]); //here we add the columns if not selected
    } else {
      setSelectedColumns(selectedColumns.filter((col) => col !== value)); //remove the column if selected
    }
  };

  return (
    <>
      <h1 className="text-center pt-3">Custom table</h1>
      <p className="text-center fs-5 lead">
        Use the hamburger on the left for toggling columns
      </p>
      <ToggleColumn
        columnName={columnName}
        handleToggleColumn={handleToggleColumn}
        selectedColumns={selectedColumns}
        setSelectedColumns={setSelectedColumns}
      />
      <CustomTable
        data={data}
        selectedColumns={selectedColumns}
        columnName={columnName}
      />
      <Footer />
    </>
  );
}

export default App;

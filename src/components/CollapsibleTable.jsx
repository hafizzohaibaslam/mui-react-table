import React, { useState } from "react";
import "./CollapsibleTable.css";
import TableMainContainer from "./TableMainContainer";

function CollapsibleTable() {
  const [openRows, setOpenRows] = useState([]);

  const toggleRow = (rowIndex) => {
    const updatedOpenRows = [...openRows];
    updatedOpenRows[rowIndex] = !updatedOpenRows[rowIndex];
    setOpenRows(updatedOpenRows);
  };

  return <TableMainContainer toggleRow={toggleRow} openRows={openRows}/>;
}

export default CollapsibleTable;

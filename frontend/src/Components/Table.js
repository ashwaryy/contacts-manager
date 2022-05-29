import React from "react";

function Table() {
  return (
    <div id="display-contacts-body">
      <div id="display-contacts-table">
        <div id="display-contacts-toolbar-left">
          <button>Select Date</button>
          <button>Filters</button>
        </div>

        <div id="display-contacts-toolbar-right">
          <button>Delete</button>
          <button>Import</button>
          <button>Export</button>
        </div>
      </div>
    </div>
  );
}

export default Table;

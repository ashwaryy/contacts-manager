import { useEffect, useState } from "react";
import Papa from "papaparse";

function ImportCSV() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: async function (results) {
        setParsedData(results.data);
      },
    });
  };
  useEffect(() => {
    console.log(parsedData);
  }, [parsedData]);
  return (
    <div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />
    </div>
  );
}

export default ImportCSV;

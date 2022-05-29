import { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";

function ImportCSV() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);
  const token = localStorage.getItem("token");
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
    if (parsedData.length) {
      axios({
        method: "post",
        url: "http://localhost:3001/contacts",
        data: parsedData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }, [parsedData, token]);
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

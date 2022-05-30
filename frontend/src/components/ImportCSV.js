import { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { ReactComponent as ImportFile } from "../assets/importfile.svg";
import { ReactComponent as Import } from "../assets/import.svg";
import { ReactComponent as ImportComplete } from "../assets/importcomplete.svg";
import Popup from "reactjs-popup";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["CSV"];

function ImportCSV() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);
  const [importStatus, setImportStatus] = useState("Import File");
  const [importMessage, setImportMessage] = useState(
    "Drag & Drop a CSV File to Upload"
  );
  const [buttonText, setButtonText] = useState("Cancel");
  const [showImportComplete, setShowImportComplete] = useState(false);
  const token = localStorage.getItem("token");
  const changeHandler = (file) => {
    Papa.parse(file, {
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
      }).then((response) => {
        if (response.data === "success") {
          setImportStatus("Import Complete");
          setImportMessage("CSV File is Uploaded");
          setButtonText("Close");
          setShowImportComplete(true);
        }
      });
    }
  }, [parsedData, token]);
  return (
    <Popup
      trigger={
        <button className="tooltip-buttons">
          <Import />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div id="import-box-container">
          <div id="import-box">
            <FileUploader
              handleChange={changeHandler}
              name="file"
              types={fileTypes}
            >
              <div id="import-box-upload-area">
                {showImportComplete ? <ImportComplete /> : <ImportFile />}
                <h3>{importStatus}</h3>
                <p>{importMessage}</p>
              </div>
            </FileUploader>
            <button
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
              style={{ cursor: "pointer" }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ImportCSV;

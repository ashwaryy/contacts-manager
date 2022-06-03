import { useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { ReactComponent as DeleteAll } from "../assets/deleteall.svg";
import { ReactComponent as Dustbin } from "../assets/dustbin.svg";
import { ReactComponent as ImportComplete } from "../assets/importcomplete.svg";

function DeleteContacts({ setImportPerformed }) {
  const [deleteContactsText, setDeleteContactsText] =
    useState("Delete Contacts");
  const [deleteContactsMessage, setDeleteContactsMessage] = useState(
    "Sure you want to delete these Contacts?"
  );
  const [showDustBin, setShowDustBin] = useState(true);
  const [showok, setShowOk] = useState(true);
  const [buttontext, setButtonText] = useState("Cancel");

  function deleteAllHandler() {
    const checkboxes = document.getElementsByClassName("contact-checkbox");
    let contactsToBeDeleted = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        contactsToBeDeleted.push(checkboxes[i].id);
      }
    }

    axios({
      method: "delete",
      url: "http://localhost:3001/contacts",
      data: contactsToBeDeleted,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      if (response.data === "success") {
        setImportPerformed(new Date());
        setDeleteContactsText("Deleted Contacts");
        setButtonText("Close");
        setShowOk(false);
        setShowDustBin(false);
        setDeleteContactsMessage("");
      }
    });
  }
  return (
    <Popup
      trigger={
        <button className="tooltip-buttons">
          <DeleteAll />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div id="import-box-container">
          <div id="import-box">
            {showDustBin ? <Dustbin /> : <ImportComplete />}
            <h3>{deleteContactsText}</h3>
            <p>{deleteContactsMessage}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => {
                  setDeleteContactsText("Delete Contacts");
                  setDeleteContactsMessage(
                    "Sure you want to delete these Contacts?"
                  );
                  setShowDustBin(true);
                  setShowOk(true);
                  close();
                }}
                style={{ cursor: "pointer" }}
              >
                {buttontext}
              </button>
              {showok && (
                <h2
                  style={{
                    marginLeft: "10px",
                    marginTop: "1px",
                    marginBottom: "1px",
                    cursor: "pointer",
                  }}
                  onClick={deleteAllHandler}
                >
                  Ok
                </h2>
              )}
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default DeleteContacts;

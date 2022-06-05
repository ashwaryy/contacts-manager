import React, { useEffect, useState } from "react";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Delete } from "../assets/delete.svg";
import { ReactComponent as Date } from "../assets/selectdate.svg";
import { ReactComponent as Filter } from "../assets/filter.svg";
import { ReactComponent as Export } from "../assets/export.svg";
import ImportCSV from "./ImportCSV";
import DeleteContacts from "./DeleteContacts";

function Table({ data, setData }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [importPerformed, setImportPerformed] = useState(0);
  const [deletePressed, setDeletePressed] = useState(0);
  useEffect(() => {
    const fetchPosts = async () => {
      const apiURL = `https://contacts-manager-b.herokuapp.com/contacts?page=${pageNumber}`;
      const token = localStorage.getItem("token");
      const url = apiURL;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const promise = await response.json();
      setData(promise.contactList);
    };
    fetchPosts();
  }, [pageNumber, deletePressed, importPerformed, setData]);

  function deleteHandler(event) {
    const token = localStorage.getItem("token");
    const postID = event.target.id;
    const apiURL = `https://contacts-manager-b.herokuapp.com/contacts/${postID}`;

    const deleteContact = async () => {
      const url = apiURL;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setDeletePressed(deletePressed + 1);
      }
    };
    deleteContact();
  }
  return (
    <div id="display-contacts-body">
      <div id="display-contacts-table">
        <div id="display-contacts-toolbar-left">
          <Date />
          <Filter />
        </div>

        <div id="display-contacts-toolbar-right">
          <DeleteContacts setImportPerformed={setImportPerformed} />
          <ImportCSV setImportPerformed={setImportPerformed} />
          <button className="tooltip-buttons">
            <Export />
          </button>
        </div>
      </div>
      <table id="contacts-table">
        <tbody>
          <tr id="contacts-table-header">
            <th>
              <input
                type="checkbox"
                id="delete-all-contacts"
                onClick={checkAll}
              />
            </th>
            <th>Name</th>
            <th>| Designation</th>
            <th>| Company</th>
            <th>| Industry</th>
            <th>| Email</th>
            <th>| Phone number</th>
            <th>| Country</th>
            <th>| Action</th>
          </tr>
          {data.map((contact) => (
            <tr className="contacts-table-rows" key={contact._id}>
              <td>
                <input
                  type="checkbox"
                  id={contact._id}
                  className="contact-checkbox"
                />
              </td>

              <td>{contact.name}</td>
              <td>{contact.designation}</td>
              <td>{contact.company}</td>
              <td>{contact.industry}</td>
              <div id="table-email-row" data-title={contact.email}>
                {contact.email.length > 19
                  ? contact.email.substring(0, 20) + "..."
                  : contact.email}
              </div>

              <td>{contact.phone}</td>
              <td>{contact.country}</td>
              <td>
                <Edit />
                <Delete
                  id={contact._id}
                  style={{ cursor: "pointer" }}
                  onClick={deleteHandler}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="table-footer">
        <div id="table-footer-pages">
          <button
            onClick={() => {
              if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              setPageNumber(0);
            }}
            style={
              pageNumber === 0 ? { color: "#2DA5FC" } : { color: "#CBCBCB" }
            }
          >
            1
          </button>
          <button
            onClick={() => {
              setPageNumber(1);
            }}
            style={
              pageNumber === 1 ? { color: "#2DA5FC" } : { color: "#CBCBCB" }
            }
          >
            2
          </button>
          <button
            onClick={() => {
              setPageNumber(2);
            }}
            style={
              pageNumber === 2 ? { color: "#2DA5FC" } : { color: "#CBCBCB" }
            }
          >
            3
          </button>
          <button
            onClick={() => {
              setPageNumber(3);
            }}
            style={
              pageNumber === 3 ? { color: "#2DA5FC" } : { color: "#CBCBCB" }
            }
          >
            4
          </button>
          <button
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

function checkAll(e) {
  const Allcheckboxes = document.querySelectorAll('input[type="checkbox"]');
  console.log(Allcheckboxes);
  if (e.target.checked) {
    for (let i = 1; i < Allcheckboxes.length; i++) {
      Allcheckboxes[i].checked = true;
    }
  } else {
    for (let i = 0; i < Allcheckboxes.length; i++) {
      Allcheckboxes[i].checked = false;
    }
  }
}

export default Table;

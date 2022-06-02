import React, { useEffect, useState } from "react";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Delete } from "../assets/delete.svg";
import { ReactComponent as Date } from "../assets/selectdate.svg";
import { ReactComponent as Filter } from "../assets/filter.svg";
import { ReactComponent as Export } from "../assets/export.svg";
import ImportCSV from "./ImportCSV";
import DeleteContacts from "./DeleteContacts";

function Table() {
  console.log("rendering Table.js");
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [importPerformed, setImportPerformed] = useState(0);
  const [deletePressed, setDeletePressed] = useState(0);
  useEffect(() => {
    console.log("rerender");

    const fetchPosts = async () => {
      const apiURL = `http://localhost:3001/contacts?page=${pageNumber}`;
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
      console.log("I ran inside fetch");
    };
    fetchPosts();
  }, [pageNumber, deletePressed, importPerformed]);

  function deleteHandler(event) {
    const token = localStorage.getItem("token");
    const postID = event.target.id;
    const apiURL = `http://localhost:3001/contacts/${postID}`;

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
              <td>{contact.email}</td>
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
          >
            1
          </button>
          <button
            onClick={() => {
              setPageNumber(1);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setPageNumber(2);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setPageNumber(3);
            }}
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

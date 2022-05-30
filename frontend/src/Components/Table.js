import React, { useEffect, useState } from "react";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Delete } from "../assets/delete.svg";
import { ReactComponent as Date } from "../assets/selectdate.svg";
import { ReactComponent as Filter } from "../assets/filter.svg";
import { ReactComponent as DeleteAll } from "../assets/deleteall.svg";
import { ReactComponent as Export } from "../assets/export.svg";
import ImportCSV from "./ImportCSV";

function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiURL = "http://localhost:3001/contacts";
    const token = localStorage.getItem("token");
    const fetchPosts = async () => {
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
  }, [data]);
  return (
    <div id="display-contacts-body">
      <div id="display-contacts-table">
        <div id="display-contacts-toolbar-left">
          <Date />
          <Filter />
        </div>

        <div id="display-contacts-toolbar-right">
          <button className="tooltip-buttons">
            <DeleteAll />
          </button>
          <ImportCSV />
          <button className="tooltip-buttons">
            <Export />
          </button>
        </div>
      </div>
      <table id="contacts-table">
        <tbody>
          <tr id="contacts-table-header">
            <th>
              <input type="checkbox" id="delete-all-contacts" />
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
                <input type="checkbox" id={contact._id} />
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
    </div>
  );
}

function deleteHandler(event) {
  const token = localStorage.getItem("token");
  const postID = event.target.id;
  const apiURL = `http://localhost:3001/contacts/${postID}`;

  const fetchPosts = async () => {
    const url = apiURL;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  };
  fetchPosts();
}

export default Table;

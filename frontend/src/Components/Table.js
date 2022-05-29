import React, { useEffect, useState } from "react";

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
      console.log(promise);
      setData(promise.contactList);
    };
    fetchPosts();
  }, []);
  console.log(data);
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
      <table id="contacts-table">
        <tr id="contacts-table-header">
          <input type="checkbox" id="delete-all-contacts" />

          <th>Name</th>
          <th>Designation</th>
          <th>Company</th>
          <th>Industry</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
        {data.map((contact) => (
          <tr className="contacts-table-rows">
            <input type="checkbox" id="delete-contacts" checked={false} />
            <td>{contact.name}</td>
            <td>{contact.designation}</td>
            <td>{contact.company}</td>
            <td>{contact.industry}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.country}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;

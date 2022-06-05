import React, { useState, useEffect } from "react";
import { ReactComponent as SuperAdmin } from "../assets/superadmin.svg";
import { ReactComponent as SearchIcon } from "../assets/searchicon.svg";

function Header({ setData }) {
  const [searchquery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState("");
  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  async function handleSearchClick(e) {
    const apiURL = `https://contacts-manager-b.herokuapp.com/contacts/${e.target.id}`;
    const token = localStorage.getItem("token");
    const url = apiURL;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const fetchedData = await response.json();
    setData(fetchedData.contact);
    setSearchData("");
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const apiURL = `https://contacts-manager-b.herokuapp.com/search?search=${searchquery}`;
      const token = localStorage.getItem("token");
      const url = apiURL;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const fetchedData = await response.json();
      setSearchData(fetchedData.searchResults);
    };
    fetchPosts();
  }, [searchquery]);

  return (
    <div id="header-container">
      <h2>Total Contacts</h2>
      <input
        id="header-search"
        type="text"
        placeholder="Search by Email Id...."
        value={searchquery}
        onChange={handleSearch}
      />
      {searchData.length ? (
        <div id="header-search-results">
          {searchData &&
            searchData.map((data) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleSearchClick}
              >
                <SearchIcon />
                <div
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                  key={data._id}
                  id={data._id}
                >
                  {data.email}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div></div>
      )}
      <SuperAdmin style={{ marginRight: "15px" }} id="justforclicks" />
    </div>
  );
}

export default Header;

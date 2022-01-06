import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiService from "../../api/ApiService";
import { Context } from "../../Context/Context";
import { useHistory } from "react-router-dom";
const SearchUsers = () => {
  const history = useHistory();
  const apiService = new ApiService();
  const { usersName, setUsersName, setUserOnly } = useContext(Context);
  const searchUsers = async () => {
    const res = await apiService.get(`/users/${usersName}`);
    setUserOnly(res);
    history.push("/u/");
  };

  return (
    <div className="v-100 ">
      <h1 style={{ marginTop: "30%" }}>Search users Github</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FormControl
          type="text"
          placeholder="Type name user"
          style={{ width: "500px", display: "block" }}
          onChange={(e) => {
            let aux = e.target.value;
            setUsersName(aux);
          }}
        />
        <Button
          variant="dark"
          size="lg"
          className="mx-auto"
          onClick={() => searchUsers()}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchUsers;

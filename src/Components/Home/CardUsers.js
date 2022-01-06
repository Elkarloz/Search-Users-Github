import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiService from "../../api/ApiService";
import "./CardUsers.css";
import { Context } from "../../Context/Context";

const CardUsers = () => {
  const { users, setUsers } = useContext(Context);
  const apiService = new ApiService();
  useEffect(() => {
    const consultUsers = async () => {
      const res = await apiService.get("/users");
      setUsers(res);
    };
    consultUsers();
  }, []);

  return (
    <div
      style={{
        display: "block",
        width: "500px",
        height: "600px",
        overflow: "scroll",
      }}
    >
      {users.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index} className="mx-auto mb-5">
          <img alt="Producto" src={`${item.avatar_url}`} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              <hr />
              {item.login.toUpperCase()}
            </Card.Title>
            <Card.Text>
              <hr />
              <b>Id:</b> {item.id}
            </Card.Text>
            <Card.Text>
              <hr />
              <b>Repositorio:</b> <a href={item.html_url}>{item.html_url}</a>
              <hr />
            </Card.Text>
            <Card.Text>
              <b>Type user:</b> {item.type}
              <hr />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardUsers;

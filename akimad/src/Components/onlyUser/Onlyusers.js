import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../Context/Context";
import ApiService from "../../api/ApiService";

const Onlyusers = () => {
  const { userOnly } = useContext(Context);
  const [repo, setRepo] = useState([]);
  const [org, setOrg] = useState([]);
  const apiService = new ApiService();

  useEffect(() => {
    const resitorios = async () => {
      userOnly.repos_url = userOnly.repos_url.split(
        "https://api.github.com"
      )[1];
      userOnly.organizations_url = userOnly.organizations_url.split(
        "https://api.github.com"
      )[1];
      const res = await apiService.get(`${userOnly.repos_url}`);
      setRepo(res);
      const res1 = await apiService.get(`${userOnly.organizations_url}`);
      setOrg(res1);
    };
    resitorios();
  }, []);

  return (
    <div>
      <Card style={{ width: "30rem" }} className="mx-auto mb-5">
        <img alt="Producto" src={`${userOnly.avatar_url}`} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <hr />
            {userOnly.name.toUpperCase()}
          </Card.Title>
          <Card.Text>
            <hr />
            <b>Location:</b> {userOnly.location}
          </Card.Text>
          <Card.Text>
            <hr />
            <b>Blog:</b> <a href={userOnly.blog}>{userOnly.blog}</a>
          </Card.Text>
          <Card.Text>
            <hr />
            <b>Followers:</b> {userOnly.followers}
            <hr />
          </Card.Text>
          <Card.Text>
            <b>Following:</b> {userOnly.following}
            <hr />
          </Card.Text>
          <Card.Text>
            <b>Repositorios:</b>{" "}
            <a href={userOnly.html_url}>{userOnly.html_url}</a>
            {repo.map((item, index) => (
              <div key={index}>
                <br />
                <p>{item.name}:</p>
                <a href={item.html_url}>{item.html_url}</a>
              </div>
            ))}
          </Card.Text>
          <Card.Text>
            <b>Organizations:</b>{" "}
            {repo.map((item, index) => (
              <div key={index}>
                <br />
                <p>- {item.description}:</p>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Onlyusers;

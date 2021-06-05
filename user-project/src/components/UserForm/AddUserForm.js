import "./AddUserForm.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import UserList from "../UserList/UserList";

const users = [
  {
    userID: "1",
    userName: "firstEntry",
    userAge: "firstAge",
  },
];

const AddUserForm = (props) => {
  const [userList, setUserList] = useState(users);

  const [name, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [id, setUserId] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    let formData = {
      userName: name,
      userAge: age,
      userID: Math.random().toString(),
    };
    setUserList((prevUserList) => {
      return [formData, ...prevUserList];
    });
  };

  const userNameChangedHandler = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  const removeUser = (removeUser) => {
    let filteredUsers = userList.filter(
      (user) => user.userName != removeUser.userName
    );
    setUserList(filteredUsers);
  };

  return (
    <div>
      <Container fluid="sm">
        <Form onSubmit={formSubmitHandler}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={name}
              onChange={userNameChangedHandler}
              type="text"
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Age (Years)</Form.Label>
            <Form.Control
              value={age}
              onChange={ageChangedHandler}
              type="text"
              placeholder="Enter Age"
            />
          </Form.Group>
          <Button type="submit">Add User</Button>
        </Form>
      </Container>
      <UserList users={userList} removeUser={removeUser} />
    </div>
  );
};

export default AddUserForm;

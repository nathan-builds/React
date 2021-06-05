import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import TableRow from "./TableRow";

const UserList = (props) => {
  const removeUserFromList = (user) => {
    props.removeUser(user);
  };

  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => (
              <TableRow
                userName={user.userName}
                userAge={user.userAge}
                userID={user.userID}
                removeUserFromList={removeUserFromList}
              ></TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserList;

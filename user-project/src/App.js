import logo from "./logo.svg";
import "./App.css";
import AddUserForm from "./components/UserForm/AddUserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList/UserList";

function App() {
  const onUserAdded = () => {};

  return (
    <div>
      <div>
        <AddUserForm userAdded={onUserAdded} />
      </div>
    </div>
  );
}

export default App;

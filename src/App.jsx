import { useState } from "react";
import Register from "./components/Register";
import User from "./components/User";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name,
      email,
      age,
    };

    setUsers((prev) => [...prev, newUser]);

    console.log(newUser);
    console.log(users);
  }

  function handleDelete(index) {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  }

  return (
    <>
      <h1>Cadsatrar Usuário</h1>
      <Register
        setName={setName}
        setEmail={setEmail}
        setAge={setAge}
        handleSubmit={handleSubmit}
      />
      <User users={users} handleDelete={handleDelete} />
    </>
  );
}

export default App;

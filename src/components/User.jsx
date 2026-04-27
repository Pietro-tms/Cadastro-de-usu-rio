import "./User.css";

function User({ users, handleDelete }) {
  return (
    <div className="user-container">
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;

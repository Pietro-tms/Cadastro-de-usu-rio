function User({ users, handleDelete }) {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Idade: {user.age}</p>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;

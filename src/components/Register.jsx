function Register({ setName, setEmail, setAge, handleSubmit }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Digite sua idade"
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>Cadastrar</button>
    </div>
  );
}

export default Register;

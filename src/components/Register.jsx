import "./Register.css";

function Register({ setName, setEmail, setAge, handleSubmit }) {
  return (
    <div className="register-container">
     <form className="register-content" onSubmit={handleSubmit}>
         <input
        type="text"
        placeholder="Digite seu nome"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Digite seu email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Digite sua idade"
        required
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit" >Cadastrar</button>
     </form>
    </div>
  );
}

export default Register;

import { Link } from 'react-router-dom';

export function RegisterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login');
  }

  return (
    <form
      id="register-form"
      className='entry-form'
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Nome Completo</label>
      <input
        type="text"
        name="name"
        id="name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        required
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        required
      />

      <label htmlFor="confirmation-password">Confirme sua senha</label>
      <input
        type="password"
        name="confirmation-password"
        id="confirmation-password"
        required
      />

      <button
        type="submit"
        form="login-form"
      >
        Entrar
      </button>
      <Link to="/login">Já possuo cadastro</Link>
    </form>
  )
}

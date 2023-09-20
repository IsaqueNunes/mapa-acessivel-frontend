import { Link } from 'react-router-dom';

export function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login');
  }

  return (
    <form
      id="login-form"
      className='entry-form'
      onSubmit={handleSubmit}
    >
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

      <Link to="/forgot-password">Esqueci minha senha</Link>
      <Link to="/register">Não possuo cadastro</Link>
      <button
        type="submit"
        form="login-form"
      >
        Entrar
      </button>
    </form>
  )
}

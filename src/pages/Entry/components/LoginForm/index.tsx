import { Link, useNavigate } from 'react-router-dom';

import styles from './login.module.css'
import { Button } from '../../../../components/Button';
import Input from '../../../../components/Input';

export function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login');
    navigate('/')
  }

  return (
    <form
      id="login-form"
      className='entry-form'
      onSubmit={handleSubmit}
    >
      <div className={styles['input-container']}>
        <label htmlFor="email">Email</label>
        <Input />
      </div>

      <div className={styles['input-container']}>
        <label htmlFor="password">Senha</label>
        <Input />
      </div>

      <Link to="/forgot-password">Esqueci minha senha</Link>
      <Link to="/register">Não possuo cadastro</Link>

      <Button
        variation='solid'
        type='submit'
      >
        Entrar
      </Button>
      <button
        type="submit"
        form="login-form"
      >
      </button>
    </form>
  )
}

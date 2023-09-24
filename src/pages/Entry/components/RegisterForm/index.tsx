import { Link } from 'react-router-dom';
import styles from './register.module.css'
import Input from '../../../../components/Input';
import { Button } from '../../../../components/Button';

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
      <div className={styles["input-container"]}>
        <label htmlFor="name">Nome Completo</label>
        <Input />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="email">Email</label>
        <Input />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="password">Senha</label>
        <Input />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="confirmation-password">Confirme sua senha</label>
        <Input />
      </div>

      <Button
        type="submit"
        variation='solid'
        form="login-form"
      >
        Entrar
      </Button>
      <Link to="/login">
        Já possuo cadastro
      </Link>
    </form>
  )
}

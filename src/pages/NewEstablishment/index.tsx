import { Button } from "../../components/Button";
import Input from "../../components/Input";

import styles from './new-establishment.module.css'

export function NewEstablishment () {
  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <form
      id={styles['new-establishment-form']}
    >
      <div className={styles['input-container']}>
        <label htmlFor="name">Nome do estabelecimento</label>
        <Input />
      </div>

      <div className={styles['input-container']}>
        <label htmlFor="location">Location</label>
        <Input />

      </div>

      <Button
        type="submit"
        variation="solid"
        onClick={handleSubmit}
      >
        Entrar
      </Button>
    </form>
  )
}1

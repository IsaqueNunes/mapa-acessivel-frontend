import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css'

type ButtonVariations = 'outline' | 'solid' | 'link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation: ButtonVariations;
}

export function Button ({ variation, className, children, ...props }: ButtonProps) {
  return (
    <button className={`${className ? className + ' ' : ''}${styles.button} ${styles[`button-${variation}`]}`} {...props} >
      {children}
    </button>
  )
}

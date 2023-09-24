import { ReactNode, forwardRef } from 'react';
import styles from './input.module.css'

type InputProps = {
  label?: ReactNode;
  placeholder?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, placeholder, ...props }: InputProps, ref) => (
  <div
  className={`${className ? className + ' ' : ''}${styles["input-container"]}`}
  >
    {label}
    <input
      ref={ref}
      className={styles['input']}
      placeholder={placeholder}
      {...props}
    />
  </div>
));

export default Input;

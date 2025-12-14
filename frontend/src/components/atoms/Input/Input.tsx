import styles from './Input.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@/shared';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  id?: string;
  name?: string;
  autoComplete?: string;
  size?: 'xs' | 'small' | 'medium' | 'large';
  /**
   * Elemento adicional que se renderiza dentro del contenedor del input (ej: botón)
   */
  endAdornment?: React.ReactNode;
  /**
   * Variante visual opcional para usar el input en contextos con estilos distintos
   * Por ejemplo, en CreateSaleForm
   */
  variant?: 'default' | 'createSale';
  /**
   * Longitud máxima permitida para el input
   */
  maxLength?: number;

}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  error = false,
  id,
  name,
  autoComplete,
  size = 'medium',
  endAdornment,
  variant = 'default',
  maxLength,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!theme || !toggleTheme) {
    return null;
  }
  
  const inputClassName = `${styles.input} ${styles[`input--${size}`]} ${error ? styles['input--error'] : ''} ${disabled ? styles['input--disabled'] : ''} ${endAdornment ? styles['input--with-adornment'] : ''} ${variant !== 'default' ? styles[`input--${variant}`] : ''}`.trim();

  // Si no hay endAdornment, renderizar solo el input
  if (!endAdornment) {
    return (
      <input
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        id={id}
        name={name}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    );
  }

  // Si hay endAdornment, renderizar con contenedor
  const containerClassName = [
    styles.inputContainer,
    error && styles['inputContainer--error'],
    disabled && styles['inputContainer--disabled'],
    variant !== 'default' && styles[`inputContainer--${variant}`],
  ]
    .filter(Boolean)
    .join(' ');

  const inputWithAdornmentClassName = [
    styles.input,
    styles[`input--${size}`],
    styles['input--with-adornment'],
    error && styles['input--error'],
    disabled && styles['input--disabled'],
    variant !== 'default' && styles[`input--${variant}`],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      <input
        type={type}
        className={inputWithAdornmentClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        id={id}
        name={name}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
      <div className={styles.endAdornment}>
        {endAdornment}
      </div>
    </div>
  );
};

export default Input;
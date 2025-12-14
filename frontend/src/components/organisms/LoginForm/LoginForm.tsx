import React, { useState } from 'react';
// import styles from './LoginForm.module.scss';

import { Button, FormField, Card } from '@/components';

export interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
  error,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError('');
    setPasswordError('');
    
    // Validate
    let hasErrors = false;
    
    if (!email) {
      setEmailError('El email es requerido');
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError('Por favor ingresa un email válido');
      hasErrors = true;
    }
    
    if (!password) {
      setPasswordError('La contraseña es requerida');
      hasErrors = true;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      hasErrors = true;
    }
    
    if (!hasErrors) {
      onSubmit(email, password);
    }
  };

  return (
    <Card 
      title="Iniciar Sesión" 
      subtitle="Ingresa tus credenciales para acceder"
      variant="elevated"
      className="login-form"
    >
      <form onSubmit={handleSubmit} className="login-form__form">
        {error && (
          <div className="login-form__error">
            {error}
          </div>
        )}
        
        <FormField
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={emailError}
          required
          autoComplete="email"
        />
        
        <FormField
          label="Contraseña"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={passwordError}
          required
          autoComplete="current-password"
        />
        
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
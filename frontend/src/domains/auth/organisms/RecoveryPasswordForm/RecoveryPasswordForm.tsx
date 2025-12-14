import React, { useState } from 'react';
import styles from './RecoveryPasswordForm.module.scss';

import { FormField, Button, Text } from '@/components';

import { type IRecoveryPasswordFormData, type IRecoveryPasswordFormProps } from '@/domains/auth/types/authTypes';

/**
 * Componente RecoveryPasswordForm - Organismo que contiene el formulario completo de recuperación de contraseña
 * Maneja el estado del formulario y la validación básica
 */
export const RecoveryPasswordForm: React.FC<IRecoveryPasswordFormProps> = ({
  onSubmit,
  isLoading = false,
  error,
  success
}) => {
  // Estado del formulario
  const [formData, setFormData] = useState<IRecoveryPasswordFormData>({
    email: ''
  });

  // Estado de errores de validación
  const [validationErrors, setValidationErrors] = useState<Partial<IRecoveryPasswordFormData>>({});

  /**
   * Maneja los cambios en el campo de email
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      email: value
    }));

    // Limpiar error de validación cuando el usuario empiece a escribir
    if (validationErrors.email) {
      setValidationErrors(prev => ({
        ...prev,
        email: undefined
      }));
    }
  };

  /**
   * Valida el campo de email del formulario
   */
  const validateForm = (): boolean => {
    const errors: Partial<IRecoveryPasswordFormData> = {};

    // Validación del email
    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Ingresa un correo electrónico válido';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className={styles.recoveryPasswordForm} onSubmit={handleSubmit}>
      {/* Campo de correo electrónico */}
      <FormField
        id="email"
        label="Correo electrónico"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        error={!!validationErrors.email}
        errorMessage={validationErrors.email}
        required
        autoComplete="email"
        placeholder="ejemplo@correo.com"
        disabled={isLoading}
      />

      {/* Mensaje de error general */}
      {error && (
        <div className={styles.generalError}>
          {error}
        </div>
      )}

      {/* Mensaje de éxito */}
      {success && (
        <div className={styles.successMessage}>
          {success}
        </div>
      )}

      {/* Botón de envío */}
      <div className={styles.buttonContainer}>
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
        <Text size='xs' align='center' color='neutral-primary'>
          Recibirás un enlace para restablecer tu contraseña
        </Text>
      </div>

    </form>
  );
};
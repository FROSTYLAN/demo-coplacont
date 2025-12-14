import React, { useState } from 'react';
import styles from './NewPasswordForm.module.scss';

import { FormField, Button, Text } from '@/components';
import { type INewPasswordFormData, type INewPasswordFormProps } from '@/domains/auth';

/**
 * Componente NewPasswordForm - Organismo que contiene el formulario completo de nueva contraseña
 * Maneja el estado del formulario y la validación básica
 */
export const NewPasswordForm: React.FC<INewPasswordFormProps> = ({
  onSubmit,
  isLoading = false,
  error,
  success,
  disabled = false
}) => {
  // Estado del formulario
  const [formData, setFormData] = useState<INewPasswordFormData>({
    password: '',
    confirmPassword: ''
  });

  // Estado de errores de validación
  const [validationErrors, setValidationErrors] = useState<Partial<INewPasswordFormData>>({});

  /**
   * Maneja los cambios en los campos del formulario
   */
  const handleInputChange = (field: keyof INewPasswordFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Limpiar error de validación cuando el usuario empiece a escribir
    if (validationErrors[field]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  /**
   * Valida los campos del formulario
   */
  const validateForm = (): boolean => {
    const errors: Partial<INewPasswordFormData> = {};

    // Validación de la nueva contraseña
    if (!formData.password.trim()) {
      errors.password = 'La nueva contraseña es requerida';
    } else if (formData.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'La contraseña debe contener al menos una mayúscula, una minúscula y un número';
    }

    // Validación de confirmación de contraseña
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Debes repetir la contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
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
    <form className={styles.newPasswordForm} onSubmit={handleSubmit}>
      {/* Campo de nueva contraseña */}
      <FormField
        id="password"
        label="Nueva contraseña"
        type="password"
        value={formData.password}
        onChange={handleInputChange('password')}
        error={!!validationErrors.password}
        errorMessage={validationErrors.password}
        required
        autoComplete="new-password"
        placeholder="Ingresa tu nueva contraseña"
        disabled={isLoading}
      />

      {/* Campo de repetir contraseña */}
      <FormField
        id="confirmPassword"
        label="Repetir contraseña"
        type="password"
        value={formData.confirmPassword}
        onChange={handleInputChange('confirmPassword')}
        error={!!validationErrors.confirmPassword}
        errorMessage={validationErrors.confirmPassword}
        required
        autoComplete="new-password"
        placeholder="Repite tu nueva contraseña"
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
          disabled={isLoading || disabled}
        >
          {isLoading ? 'Guardando...' : 'Guardar contraseña'}
        </Button>
        <Text size='xs' align='center' color='neutral-primary'>
          Tu contraseña debe tener al menos 8 caracteres
        </Text>
      </div>

    </form>
  );
};
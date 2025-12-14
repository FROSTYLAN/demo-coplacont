/**
 * Tipos relacionados con la autenticación
 */

import type { ReactNode } from "react";

/**
 * Datos de entrada para el login
 */
export interface ILoginRequest {
  email: string;
  contrasena: string;
}

/**
 * Información de la empresa/persona jurídica del usuario
 */
export interface IPersona {
  id: number;
  nombreEmpresa: string;
  ruc: string;
  razonSocial?: string;
  telefono?: string;
  direccion?: string;
  createdAt: Date;
  updatedAt: Date;
  habilitado: boolean;
}

/**
 * Información de rol del usuario
 */
export interface IRole {
  id: number;
  nombre: string;
}

/**
 * Respuesta del endpoint de login
 */
export interface ILoginResponse {
  message: string;
  success: boolean;
  nombre: string;
  email: string;
  jwt: string;
  persona: IPersona;
  roles: IRole[];
}

/**
 * Información del usuario autenticado
 */
export interface IAuthUser {
  nombre: string;
  email: string;
  persona: IPersona;
  roles: IRole[];
  permissions?: string[];
}

/**
 * Estado de autenticación de la aplicación
 */
export interface IAuthState {
  user: IAuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

/**
 * Interfaz para los datos del formulario de login
 */
export interface ILoginFormData {
  email: string;
  password: string;
}

/**
 * Props para el componente LoginForm
 */
export interface ILoginFormProps {
  /** Función que se ejecuta al enviar el formulario */
  onSubmit: (data: ILoginFormData) => void;
  /** Indica si el formulario está en proceso de envío */
  isLoading?: boolean;
  /** Mensaje de error general del formulario */
  error?: string;
}

/**
 * Interfaz para los datos del formulario de nueva contraseña
 */
export interface INewPasswordFormData {
  password: string;
  confirmPassword: string;
}

/**
 * Props para el componente NewPasswordForm
 */
export interface INewPasswordFormProps {
  /** Función que se ejecuta al enviar el formulario */
  onSubmit: (data: INewPasswordFormData) => void;
  /** Indica si el formulario está en proceso de envío */
  isLoading?: boolean;
  /** Mensaje de error general del formulario */
  error?: string;
  /** Mensaje de éxito cuando se guarda la contraseña */
  success?: string;
  /** Deshabilita el formulario completamente */
  disabled?: boolean;
}

/**
 * Interfaz para los datos del formulario de recuperación de contraseña
 */
export interface IRecoveryPasswordFormData {
  email: string;
}

/**
 * Props para el componente RecoveryPasswordForm
 */
export interface IRecoveryPasswordFormProps {
  /** Función que se ejecuta al enviar el formulario */
  onSubmit: (data: IRecoveryPasswordFormData) => void;
  /** Indica si el formulario está en proceso de envío */
  isLoading?: boolean;
  /** Mensaje de error general del formulario */
  error?: string;
  /** Mensaje de éxito cuando se envía el formulario */
  success?: string;
}

/**
 * Interfaz para el estado del contexto de autenticación
 */
export interface IAuthContextState {
  /** Usuario autenticado actual */
  user: IAuthUser | null;
  /** Token JWT del usuario */
  token: string | null;
  /** Indica si el usuario está autenticado */
  isAuthenticated: boolean;
  /** Indica si se está verificando la autenticación */
  isLoading: boolean;
  /** Función para realizar login */
  login: (nombre: string, email: string, jwt: string, persona: IPersona, roles: IRole[]) => void;
  /** Función para realizar logout */
  logout: () => void;
}

/**
 * Props para el proveedor del contexto de autenticación
 */
export interface IAuthProviderProps {
  children: ReactNode;
}

import React, { useState } from 'react';

import { AuthLayout, AuthHeader, Loader } from '@/components';

import { 
  LoginForm, 
  AuthService, 
  type ILoginFormData, 
  type ILoginRequest,
  useAuth,
} from '@/domains/auth';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTES } from '@/router';
import { apiClient } from '@/shared/services/apiService';

//import styles from './LoginPage.module.scss';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string>("");
  const [demoReady, setDemoReady] = useState(false);
  const [connecting, setConnecting] = useState(false);

  /**
   * Maneja el proceso de login
   * Utiliza el servicio de autenticación para realizar el login
   */
  const handleLogin = async (formData: ILoginFormData) => {
    try {
      setIsLoading(true);
      setLoginError('');
      
      // Preparar los datos para el servicio (mapear password a contrasena)
      const loginRequest: ILoginRequest = {
        email: formData.email,
        contrasena: formData.password
      };
      
      // Llamada al servicio de autenticación
      const response = await AuthService.login(loginRequest);
      
      console.log('Respuesta del backend recibida:', {
        success: response.success,
        nombre: response.nombre,
        hasEmail: !!response.email,
        hasJwt: !!response.jwt,
        hasPersona: !!response.persona,
        hasRoles: !!response.roles,
        message: response.message,
        fullResponse: response
      });


      if (response.success && response.email && response.jwt && response.roles) {
        console.log('Login exitoso, llamando a función login del contexto');
        // Usar el contexto para manejar el login
        login(response.nombre, response.email, response.jwt, response.persona, response.roles);
        
        console.log('Redirigiendo a página principal');
        // Redirigir a la página principal después del login exitoso
        navigate(MAIN_ROUTES.HOME);
      } else {
        console.error('Login falló - datos incompletos o respuesta no exitosa');
        setLoginError(response.message || 'Error en el proceso de autenticación');
      }
    } catch (error) {
      console.error('Error durante el proceso de login:', error);
      if (error instanceof Error) {
        setLoginError(error.message);
      } else {
        setLoginError(
          "Ocurrió un error inesperado. Por favor, intenta nuevamente."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      {!demoReady ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            {!connecting ? (
              <button
                onClick={async () => {
                  setConnecting(true);
                  const tryConnect = async () => {
                    try {
                      const res = await apiClient.get('/health');
                      if (res.status === 200) {
                        setDemoReady(true);
                        setConnecting(false);
                        return;
                      }
                    } catch {
                      setTimeout(tryConnect, 1500);
                    }
                  };
                  await tryConnect();
                }}
                style={{
                  padding: '12px 20px',
                  borderRadius: 10,
                  border: '1px solid rgba(0,0,0,0.15)',
                  background: 'var(--bg-color)',
                  color: 'var(--text-color)',
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                Iniciar demo
              </button>
            ) : (
              <Loader text="Conectándose al servidor..." />
            )}
          </div>
        </div>
      ) : (
        <>
          <AuthHeader
            title="Bienvenido al Sistema Coplacont"
            subtitle="Ingresa a tu cuenta para continuar"
          />

          <div
            style={{
              position: 'fixed',
              right: 40,
              bottom: 32,
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
              pointerEvents: 'none',
            }}
          >
            <img
              src="/assets/ducz-welcome.png"
              alt="Bienvenida"
              style={{
                width: 160,
                height: 'auto',
                pointerEvents: 'none',
                position: 'relative',
                zIndex: 0,
                marginTop: 24,
              }}
            />
            <div
              style={{
                position: 'relative',
                maxWidth: 360,
                background: 'var(--bg-color)',
                color: 'var(--text-color)',
                borderRadius: 12,
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                padding: '12px 14px',
                textAlign: 'center',
                pointerEvents: 'auto',
                marginTop: -48,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Acceso administrador demo
              </div>
              <div>Email: admin@coplacont.com</div>
              <div>Contraseña: admin123</div>
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: -10,
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: '10px solid var(--bg-color)',
                }}
              />
            </div>
          </div>

          <LoginForm
            onSubmit={handleLogin}
            isLoading={isLoading}
            error={loginError}
          />
        </>
      )}
    </AuthLayout>
  );
};

export default LoginPage;

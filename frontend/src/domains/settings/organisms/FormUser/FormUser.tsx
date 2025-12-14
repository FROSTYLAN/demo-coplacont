import { useState } from "react";
import styles from "./FormUser.module.scss";
import { Text, Input, Button } from "@/components";
import type { EmpresaParcial } from "../../types";
import { usersApi } from "../../api/usersApi/api";

type FormUserProps = {
  persona: EmpresaParcial;
  error: string;
  setError: (error: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  readOnly?: boolean;
  onChange: (field: keyof EmpresaParcial, value: string | number) => void;
  onSubmit?: () => void;
  isCreate?: boolean;
};

export const FormUser = ({
  persona,
  error,
  loading,
  setLoading,
  readOnly = false,
  onChange,
  onSubmit,
  isCreate = false,
}: FormUserProps) => {
  const [userToUpdate, setUserToUpdate] = useState<EmpresaParcial>({
    nombreEmpresa: persona.nombreEmpresa || "",
    ruc: persona.ruc || "",
    razonSocial: persona.razonSocial || "",
    telefono: persona.telefono || "",
    direccion: persona.direccion || "",
    nombreUsuario: persona.nombreUsuario || "",
    emailUsuario: persona.emailUsuario || "",
    idRol: persona.idRol || 1,
    esPrincipal: persona.esPrincipal || false,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleUpdateUser = async () => {
    if (!('id' in persona)) {
      console.error('No se puede actualizar: persona sin ID');
      return;
    }

    setLoading(true);
    try {
      const updatePayload = {
        nombre: userToUpdate.nombreUsuario,
        email: userToUpdate.emailUsuario,
        persona: {
          nombreEmpresa: userToUpdate.nombreEmpresa,
          ruc: userToUpdate.ruc,
          razonSocial: userToUpdate.razonSocial,
          telefono: userToUpdate.telefono,
          direccion: userToUpdate.direccion,
        }
      };
      
      await usersApi.updateUser(persona.id!, updatePayload);
      console.log('Usuario actualizado exitosamente');
      setIsEdit(false);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.FormUser__Form}>
      {error && (
        <Text as="p" color="danger" size="xs">
          {error}
        </Text>
      )}

      {/* Sección de Empresa */}
      <div className={styles.FormUser__Section}>
        <Text size="sm" weight={600} color="neutral-primary">
          Información de la Empresa
        </Text>

        {/* Nombre de la empresa */}
        <div className={styles.FormUser__FormField}>
          <Text size="xs" color="neutral-primary">
            Nombre de la empresa
          </Text>
          <Input
            placeholder="Ingresa el nombre de la empresa"
            disabled={isEdit ? false : readOnly}
            size="xs"
            variant="createSale"
            value={isCreate ? persona.nombreEmpresa : userToUpdate.nombreEmpresa}
            onChange={(e) => {
              if (isEdit) {
                setUserToUpdate({
                  ...userToUpdate,
                  nombreEmpresa: e.target.value,
                });
              } else {
                onChange("nombreEmpresa", e.target.value);
              }
            }}
          />
        </div>

        {/* RUC */}
        <div className={styles.FormUser__FormField}>
          <Text size="xs" color="neutral-primary">
            RUC
          </Text>
          <Input
            placeholder="Ingresa el RUC (11 dígitos)"
            disabled={isEdit ? false : readOnly}
            size="xs"
            variant="createSale"
            value={isCreate ? persona.ruc : userToUpdate.ruc}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // Solo números
              if (value.length <= 11) {
                if (isEdit) {
                  setUserToUpdate({
                    ...userToUpdate,
                    ruc: value,
                  });
                } else {
                  onChange("ruc", value);
                }
              }
            }}
          />
        </div>

        {/* Razón Social */}
        <div className={styles.FormUser__FormField}>
          <Text size="xs" color="neutral-primary">
            Razón Social
          </Text>
          <Input
            placeholder="Ingresa la razón social"
            disabled={isEdit ? false : readOnly}
            size="xs"
            variant="createSale"
            value={isCreate ? persona.razonSocial : userToUpdate.razonSocial}
            onChange={(e) => {
              if (isEdit) {
                setUserToUpdate({
                  ...userToUpdate,
                  razonSocial: e.target.value,
                });
              } else {
                onChange("razonSocial", e.target.value);
              }
            }}
          />
        </div>

        {/* Teléfono */}
        <div className={styles.FormUser__FormField}>
          <Text size="xs" color="neutral-primary">
            Teléfono (Opcional)
          </Text>
          <Input
            placeholder="Ingresa el teléfono"
            size="xs"
            variant="createSale"
            value={isCreate ? (persona.telefono || '') : (userToUpdate.telefono || '')}
            onChange={(e) => {
              const phoneRegex = /^[+0-9\s-]*$/;
              const value = e.target.value;
              
              if (phoneRegex.test(value)) {
                if (isEdit) {
                  setUserToUpdate({
                    ...userToUpdate,
                    telefono: value,
                  });
                } else {
                  onChange("telefono", value);
                }
              }
            }}
            disabled={isEdit ? false : readOnly}
          />
        </div>

        {/* Dirección */}
        <div className={styles.FormUser__FormField}>
          <Text size="xs" color="neutral-primary">
            Dirección (Opcional)
          </Text>
          <Input
            placeholder="Ingresa la dirección"
            size="xs"
            variant="createSale"
            value={isCreate ? (persona.direccion || '') : (userToUpdate.direccion || '')}
            onChange={(e) => {
              if (isEdit) {
                setUserToUpdate({
                  ...userToUpdate,
                  direccion: e.target.value,
                });
              } else {
                onChange("direccion", e.target.value);
              }
            }}
            disabled={isEdit ? false : readOnly}
          />
        </div>
      </div>

      {/* Sección de Usuario Principal */}
      <div className={styles.FormUser__Section}>
        <Text size="sm" weight={600} color="neutral-primary">
          Usuario Principal
        </Text>

        {/* Nombre del usuario */}
        <div className={styles.FormUser__FormField}>
          <Text size="xs" color="neutral-primary">
            Nombre completo
          </Text>
          <Input
            placeholder="Ingresa el nombre completo"
            disabled={isEdit ? false : readOnly}
            size="xs"
            variant="createSale"
            value={isCreate ? persona.nombreUsuario : userToUpdate.nombreUsuario}
            onChange={(e) => {
              if (isEdit) {
                setUserToUpdate({
                  ...userToUpdate,
                  nombreUsuario: e.target.value,
                });
              } else {
                onChange("nombreUsuario", e.target.value);
              }
            }}
          />
        </div>

        {/* Email del usuario */}
        <div className={styles.FormUser__FormField}>
          <Text size="xs" color="neutral-primary">
            Email
          </Text>
          <Input
            placeholder="Ingresa el email"
            disabled={isEdit ? false : readOnly}
            size="xs"
            variant="createSale"
            type="email"
            value={isCreate ? persona.emailUsuario : userToUpdate.emailUsuario}
            onChange={(e) => {
              if (isEdit) {
                setUserToUpdate({
                  ...userToUpdate,
                  emailUsuario: e.target.value,
                });
              } else {
                onChange("emailUsuario", e.target.value);
              }
            }}
          />
        </div>
      </div>

      {/* Botones de acción */}
      {!readOnly || isEdit ? (
        <Button
          disabled={loading}
          size="medium"
          onClick={isEdit ? handleUpdateUser : onSubmit}
        >
          Guardar {isEdit ? "actualización" : "nueva empresa"}
        </Button>
      ) : (
        <Button
          disabled={loading}
          size="medium"
          onClick={() => setIsEdit(true)}
        >
          Activar edición
        </Button>
      )}
    </div>
  );
};
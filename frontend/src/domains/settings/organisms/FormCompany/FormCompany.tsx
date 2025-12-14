import { useState } from "react";
import styles from "./FormCompany.module.scss";
import { Text, Input, Button } from "@/components";
import type { PersonaWithUsersResponse } from "../../types";
import { usersApi } from "../../api/usersApi/api";

type FormCompanyProps = {
  persona: PersonaWithUsersResponse;
  error: string;
  setError: (error: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  readOnly?: boolean;
  onUpdate?: () => void;
};

/**
 * Componente para editar datos de empresa
 */
export const FormCompany = ({
  persona,
  error,
  loading,
  setLoading,
  setError,
  readOnly = false,
  onUpdate,
}: FormCompanyProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [companyData, setCompanyData] = useState({
    nombreEmpresa: persona.nombreEmpresa || "",
    ruc: persona.ruc || "",
    razonSocial: persona.razonSocial || "",
    telefono: persona.telefono || "",
    direccion: persona.direccion || "",
  });

  /**
   * Maneja la actualización de los datos de la empresa
   */
  const handleUpdateCompany = async () => {
    setLoading(true);
    setError("");
    
    try {
      await usersApi.updatePersona(persona.id, companyData);
      setIsEdit(false);
      onUpdate?.();
    } catch (error) {
      console.error('Error al actualizar empresa:', error);
      setError('Error al actualizar los datos de la empresa');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Maneja los cambios en los campos del formulario
   */
  const handleFieldChange = (field: keyof typeof companyData, value: string) => {
    setCompanyData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className={styles.FormCompany}>
      {error && (
        <Text as="p" color="danger" size="xs">
          {error}
        </Text>
      )}

      <div className={styles.FormCompany__Section}>
        <Text size="sm" weight={600} color="neutral-primary">
          Información de la Empresa
        </Text>

        {/* Nombre de la empresa */}
        <div className={styles.FormCompany__FormField}>
          <Text size="xs" color="neutral-primary">
            Nombre de la empresa
          </Text>
          <Input
            placeholder="Ingresa el nombre de la empresa"
            disabled={!isEdit || loading}
            size="xs"
            variant="createSale"
            value={companyData.nombreEmpresa}
            onChange={(e) => handleFieldChange("nombreEmpresa", e.target.value)}
          />
        </div>

        {/* RUC */}
        <div className={styles.FormCompany__FormField}>
          <Text size="xs" color="neutral-primary">
            RUC
          </Text>
          <Input
            placeholder="Ingresa el RUC (11 dígitos)"
            disabled={!isEdit || loading}
            size="xs"
            variant="createSale"
            value={companyData.ruc}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // Solo números
              if (value.length <= 11) {
                handleFieldChange("ruc", value);
              }
            }}
          />
        </div>

        {/* Razón Social */}
        <div className={styles.FormCompany__FormField}>
          <Text size="xs" color="neutral-primary">
            Razón Social
          </Text>
          <Input
            placeholder="Ingresa la razón social"
            disabled={!isEdit || loading}
            size="xs"
            variant="createSale"
            value={companyData.razonSocial}
            onChange={(e) => handleFieldChange("razonSocial", e.target.value)}
          />
        </div>

        {/* Teléfono */}
        <div className={styles.FormCompany__FormField}>
          <Text size="xs" color="neutral-primary">
            Teléfono (Opcional)
          </Text>
          <Input
            placeholder="Ingresa el teléfono"
            size="xs"
            variant="createSale"
            value={companyData.telefono}
            onChange={(e) => {
              const phoneRegex = /^[+0-9\s-]*$/;
              const value = e.target.value;
              
              if (phoneRegex.test(value)) {
                handleFieldChange("telefono", value);
              }
            }}
            disabled={!isEdit || loading}
          />
        </div>

        {/* Dirección */}
        <div className={styles.FormCompany__FormField}>
          <Text size="xs" color="neutral-primary">
            Dirección (Opcional)
          </Text>
          <Input
            placeholder="Ingresa la dirección"
            size="xs"
            variant="createSale"
            value={companyData.direccion}
            onChange={(e) => handleFieldChange("direccion", e.target.value)}
            disabled={!isEdit || loading}
          />
        </div>
      </div>

      {/* Botones de acción */}
      <div className={styles.FormCompany__Actions}>
        {isEdit ? (
          <>
            <Button
              disabled={loading}
              size="medium"
              onClick={handleUpdateCompany}
              variant="primary"
            >
              Guardar cambios
            </Button>
            <Button
              disabled={loading}
              size="medium"
              onClick={() => {
                setIsEdit(false);
                setCompanyData({
                  nombreEmpresa: persona.nombreEmpresa || "",
                  ruc: persona.ruc || "",
                  razonSocial: persona.razonSocial || "",
                  telefono: persona.telefono || "",
                  direccion: persona.direccion || "",
                });
              }}
              variant="secondary"
            >
              Cancelar
            </Button>
          </>
        ) : (
          !readOnly && (
            <Button
              disabled={loading}
              size="medium"
              onClick={() => setIsEdit(true)}
              variant="primary"
            >
              Editar empresa
            </Button>
          )
        )}
      </div>
    </div>
  );
};
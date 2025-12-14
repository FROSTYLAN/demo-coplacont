import { useState, useEffect, useMemo } from "react";
import styles from './MainPage.module.scss';
import {
  PageLayout,
  Table,
  Button,
  Modal,
  CloseIcon,
  StateTag,
  CheckIcon,
  Input,
  Text,
  ComboBox, Loader
} from "@/components";
import { EntitiesService } from "../../services";
import { FormEntidad } from "../../organisms/FormEntidad";
import type { Entidad } from "../../services";

export const MainPage: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Entidad[]>([]);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<Entidad | null>(null);

  const [newSupplier, setNewSupplier] = useState({
    esProveedor: true,
    esCliente: false,
    tipo: "" as Entidad["tipo"],
    numeroDocumento: "",
    nombre: "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    razonSocial: "",
    direccion: "",
    telefono: "",
  });

  const handleSupplierChange = (
    field: keyof Entidad,
    value: string | number | boolean
  ) => {
    setNewSupplier((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setNewSupplier({
      esProveedor: true,
      esCliente: false,
      tipo: "" as Entidad["tipo"],
      numeroDocumento: "",
      nombre: "",
      apellidoMaterno: "",
      apellidoPaterno: "",
      razonSocial: "",
      direccion: "",
      telefono: "",
    });
  };

  const hanldeCreateSupplier = async () => {
    setError("");

    if (!newSupplier.tipo) {
      setError("Debe seleccionar el tipo de entidad.");
      return;
    }

    if (newSupplier.tipo === "JURIDICA") {
      if (newSupplier.numeroDocumento.length !== 11) {
        setError("El número de documento para JURIDICA debe tener 11 caracteres.");
        return;
      }
      if (!newSupplier.razonSocial.trim()) {
        setError("Debe ingresar la razón social.");
        return;
      }
    }

    if (newSupplier.tipo === "NATURAL") {
      if (newSupplier.numeroDocumento.length !== 8) {
        setError("El número de documento para NATURAL debe tener 8 caracteres.");
        return;
      }
      if (!newSupplier.nombre.trim()) {
        setError("Debe ingresar el nombre.");
        return;
      }
      if (!newSupplier.apellidoPaterno.trim()) {
        setError("Debe ingresar el apellido paterno.");
        return;
      }
      if (!newSupplier.apellidoMaterno.trim()) {
        setError("Debe ingresar el apellido materno.");
        return;
      }
    }

    setLoading(true);

    const response = await EntitiesService.postEntidad(newSupplier);
    if (response.success) {
      fetchSuppliers();
      resetForm();
      setIsOpen(false);
    } else {
      setError(response.message);
    }

    setLoading(false);
  };

  const handleStateSupplier = async (id: number, state: boolean) => {
    let response;
    if (state) {
      response = await EntitiesService.deleteEntidad(id);
    } else {
      response = await EntitiesService.restoreEntidad(id);
    }

    if (response.success) {
      fetchSuppliers();
    } else {
      setError(response.message);
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const fetchSuppliers = () => {
    setLoading(true);
    EntitiesService.getSuppliers(true).then((res) => {
      setSuppliers(res);
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  // 🔍 Filtro por texto y estado
  const filteredSuppliers = useMemo(() => {
    return suppliers.filter((s) => {
      const bySearch = search
        ? s.nombreCompleto?.toLowerCase().includes(search.toLowerCase()) ||
          s.numeroDocumento.includes(search)
        : true;

      const byStatus =
        status === "all"
          ? true
          : status === "active"
          ? s.activo
          : !s.activo;

      return bySearch && byStatus;
    });
  }, [suppliers, search, status]);

  const headers = [
    "Tipo",
    "Número de Documento",
    "Nombre Completo",
    "Dirección",
    "Teléfono",
    "Estado",
    "Acciones",
  ];

  const rows = filteredSuppliers.map((s) => ({
    id: s.id,
    cells: [
      s.tipo,
      s.numeroDocumento,
      s.nombreCompleto,
      s.direccion !== "" ? s.direccion : "No especificado",
      s.telefono !== "" ? s.telefono : "No especificado",
      <StateTag state={s.activo} />,
      <div style={{ display: "flex", gap: "8px" }}>
        <Button
          size="tableItemSize"
          variant="tableItemStyle"
          onClick={() => {
            setSelectedSupplier(s);
            setIsView(true);
            setIsOpen(true);
          }}
        >
          Ver detalles
        </Button>

        <Button
          size="tableItemSize"
          variant="tableItemStyle"
          onClick={() => {
            handleStateSupplier(s.id, s.activo);
          }}
        >
          {s.activo ? <CloseIcon /> : <CheckIcon />}
        </Button>
      </div>,
    ],
  }));

  const gridTemplate = "1fr 1.5fr 2fr 2fr 1fr 1fr 2fr";

  return (
    <PageLayout
      title="Proveedores"
      subtitle="Listado de proveedores registrados"
      header={
        <Button
          onClick={() => {
            resetForm();
            setIsView(false);
            setIsOpen(true);
          }}
          size="large"
        >
          + Nuevo proveedor
        </Button>
      }
    >
      <section className={styles.MainPage}>
        <div className={styles.MainPage__Filter}>
          <Text size="xs" color="neutral-primary">
            Buscar por nombre o número de documento
          </Text>
          <Input
            placeholder="Buscar..."
            size="xs"
            variant="createSale"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.MainPage__Filter}>
          <Text size="xs" color="neutral-primary">
            Estado
          </Text>
          <ComboBox
            options={statusOptions}
            size="xs"
            variant="createSale"
            value={status}
            onChange={(v) => setStatus(v as string)}
            placeholder="Seleccionar"
          />
        </div>
      </section>

      <Table headers={headers} rows={rows} gridTemplate={gridTemplate} />

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        title="Agregar nuevo proveedor"
        description="Ingresa los siguientes datos para registrar un proveedor."
        loading={loading}
        buttonText={"Cerrar"}
      >
        <FormEntidad
          setError={setError}
          setLoading={setLoading}
          entidad={isView && selectedSupplier ? selectedSupplier : newSupplier}
          error={error}
          loading={loading}
          onChange={handleSupplierChange}
          onSubmit={isView ? undefined : hanldeCreateSupplier}
          readOnly={isView}
        />
      </Modal>
            {loading && <Loader text="Procesando..." />}
    </PageLayout>
  );
};

const statusOptions = [
  { value: "all", label: "Todos" },
  { value: "active", label: "Activos" },
  { value: "inactive", label: "Inactivos" },
];

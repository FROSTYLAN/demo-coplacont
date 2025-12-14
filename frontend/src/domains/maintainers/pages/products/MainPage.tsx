import { useState, useEffect } from "react";
import { PageLayout } from "@/components";
import {
  Table,
  type TableRow,
  Button,
  CloseIcon,
  CheckIcon,
  StateTag,
  AddDropdownButton,
  Loader,
} from "@/components";
import { ProductService } from "@/domains/maintainers/services";
import type { Product } from "@/domains/maintainers/types";
import { ProductModal } from "@/domains/maintainers/organisms";

export const MainPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [error, setError] = useState("");
  console.log("error", error);
  const [loading, setLoading] = useState(false);
  console.log("loading", loading);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productType, setProductType] = useState<"producto" | "servicio">(
    "producto"
  );
  //const [isLoading, setIsLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    unidadMedida: "",
    categoriaId: 0,
  });

  const resetForm = () => {
    setNewProduct({
      codigo: "",
      nombre: "",
      descripcion: "",
      unidadMedida: "",
      categoriaId: 0,
    });
  };

  const handleCreateProduct = async (data: {
    nombre: string;
    descripcion?: string;
    unidadMedida: string;
    idCategoria: number;
  }) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        categoriaId: data.idCategoria,
        tipo: productType,
        estado: true,
      };
      const created = await ProductService.create(payload);
      setProducts((prev) => [created, ...prev]);
      setIsOpen(false);
      resetForm();
    } catch (error) {
      setError(`Error al crear el ${productType}`);
      console.error(`Error al crear ${productType}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = async (data: {
    nombre: string;
    descripcion: string;
    unidadMedida: string;
    idCategoria: number;
  }) => {
    if (!selectedProduct) return;

    setLoading(true);
    try {
      const updated = await ProductService.update(selectedProduct.id, {
        ...data,
        categoriaId: data.idCategoria,
      });
      setProducts((prev) =>
        prev.map((p) => (p.id === selectedProduct.id ? updated : p))
      );
      setSelectedProduct(updated);
      setIsOpen(false);
    } catch (error) {
      setError(`Error al actualizar el ${productType}`);
      console.error(`Error al actualizar ${productType}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleStateProduct = async (id: number, currentState: boolean) => {
    setLoading(true);
    try {
      await ProductService.update(id, { estado: !currentState });
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, estado: !currentState } : p))
      );
    } catch (error) {
      setError("Error al cambiar estado del producto");
      console.error("Error al cambiar estado:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsView(false);
      setSelectedProduct(null);
    }
  };

  const fetchProducts = () => {
    setLoading(true);
    ProductService.getAll()
      .then((res: Product[]) => {
        console.log("Productos cargados:", res);
        setProducts(res);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const headers = [
    "Código",
    "Nombre",
    "Descripción",
    "Unidad",
    "Categoría",
    "Estado",
    "Acciones",
  ];

  const rows: TableRow[] = products.map((p) => {
    console.log("Producto individual:", p);
    return {
      id: p.id,
      cells: [
        p.codigo || "No asignado",
        p.nombre || "Sin nombre",
        p.descripcion || "Sin descripción",
        p.unidadMedida || "Sin unidad",
        p.categoria?.nombre || "Sin categoría",
        <StateTag state={p.estado} />,
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            size="tableItemSize"
            variant="tableItemStyle"
            onClick={() => {
              setSelectedProduct(p);
              setProductType(p.tipo as "producto" | "servicio");
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
              handleStateProduct(p.id, p.estado);
            }}
          >
            {p.estado ? <CloseIcon /> : <CheckIcon />}
          </Button>
        </div>,
      ],
    };
  });

  const gridTemplate = "1.5fr 2fr 1.5fr 1fr 1.5fr 1fr 2.5fr";

  return (
    <PageLayout
      title="Productos"
      subtitle="Listado de productos registrados"
      header={
        <AddDropdownButton
          options={[
            {
              label: "Nuevo producto",
              onClick: () => {
                setProductType("producto");
                resetForm();
                setIsView(false);
                setSelectedProduct(null);
                setIsOpen(true);
              },
            },
            //{
            //  label: "Nuevo servicio",
            //  onClick: () => {
            //    setProductType("servicio");
            //    resetForm();
            //    setIsView(false);
            //    setSelectedProduct(null);
            //    setIsOpen(true);
            //  },
            //},
          ]}
        />
      }
    >
      <Table headers={headers} rows={rows} gridTemplate={gridTemplate} />

      <ProductModal
        isOpen={isOpen}
        onClose={handleModal}
        onSubmit={isView ? handleEditProduct : handleCreateProduct}
        title={
          isView ? "Detalles del producto" : `Creación de nuevo ${productType}`
        }
        description={
          isView
            ? "Información del producto seleccionado."
            : `Ingresa los siguientes datos para registrar un ${productType}.`
        }
        submitLabel={isView ? "Actualizar" : "Guardar"}
        isService={productType === "servicio"}
        initialValues={
          isView && selectedProduct
            ? {
                nombre: selectedProduct.nombre,
                descripcion: selectedProduct.descripcion,
                unidadMedida: selectedProduct.unidadMedida,
                categoriaId: selectedProduct.categoria?.id ?? 0,
              }
            : newProduct
        }
      />

      {loading && <Loader text="Procesando..." />}
    </PageLayout>
  );
};

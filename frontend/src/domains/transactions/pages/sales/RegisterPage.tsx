import { PageLayout } from "@/components";
import { CreateSaleForm } from "@/domains/transactions/organisms";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Maneja la navegación de regreso a la vista anterior
   */
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <PageLayout
      title="Registrar venta"
      subtitle="Permite registrar una nueva venta con sus datos."
      header={
        <Button variant="secondary" onClick={handleGoBack}>
          Regresar a la vista anterior
        </Button>
      }
    >
      <CreateSaleForm />
    </PageLayout>
  );
};

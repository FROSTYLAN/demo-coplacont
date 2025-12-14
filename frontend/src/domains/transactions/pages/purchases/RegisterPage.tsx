import { useNavigate } from "react-router-dom";
import { Button } from "@/components";
import { PageLayout } from "@/components";
import { CreatePurchaseForm } from "@/domains/transactions/organisms";

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
      title="Registrar compra"
      subtitle="Permite registrar una nueva compra con sus datos."
      header={
        <Button variant="secondary" onClick={handleGoBack}>
          Regresar a la vista anterior
        </Button>
      }
    >
      <CreatePurchaseForm />
    </PageLayout>
  );
};

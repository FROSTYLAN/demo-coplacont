import React from "react";
import { PageLayout } from "@/components";
import { CreateOperationForm } from "../../organisms";

/**
 * Register page component for creating new operations
 * Provides a form interface for operation registration
 */
const RegisterPage: React.FC = () => {
  return (
    <PageLayout title="Registrar Operación">
      <CreateOperationForm />
    </PageLayout>
  );
};

export default RegisterPage;
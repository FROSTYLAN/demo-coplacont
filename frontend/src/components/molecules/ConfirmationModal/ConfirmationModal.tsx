import React from 'react';
import { Modal } from '../Modal/Modal';
import { Button } from '@/components/atoms';
import styles from './ConfirmationModal.module.scss';

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string | React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
  className?: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  confirmVariant = 'primary',
  loading = false
}) => {
  const handleConfirm = () => {
    if (!loading) {
      onConfirm();
    }
  };

  const footer = (
    <div className={styles.buttonGroup}>
      <Button
        variant="secondary"
        onClick={onClose}
        disabled={loading}
        size="medium"
      >
        {cancelText}
      </Button>
      <Button
        variant={confirmVariant}
        onClick={handleConfirm}
        disabled={loading}
        size="medium"
      >
        {confirmText}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={message}
      footer={footer}
      buttonText={cancelText}
      loading={loading}
    />
  );
};

export default ConfirmationModal;
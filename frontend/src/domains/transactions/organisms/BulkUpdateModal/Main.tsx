import React, { useState } from 'react';
import styles from './Main.module.scss';

import { Button, Modal, Text } from "@/components"

interface props {
    show: boolean;
    setShow: (show: boolean) => void;
    onDownload: () => void;
    onUpload: (file: File) => void;
}

export const MainPage: React.FC<props> = ({ show, setShow, onDownload, onUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            onUpload(selectedFile);
        }
    };

    return(
        <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        title="Subir ventas"
        description="Sube un Excel y genera los registros de forma masiva."
      >
        <div>
          <div className={styles.downloadSection}>
            <Button 
              variant="secondary" 
              onClick={onDownload}
              size="large"
            >
              ⬇️ Descargar plantilla de Excel
            </Button>
          </div>

          <div className={styles.infoSection}>
            <Text as="h3" size="md" weight={600}>Información a tener en cuenta</Text>
            <ul>
              <li>Se proporciona un Excel de ejemplo para facilitar el registro.</li>
              <li>La cabecera (fila 1) no debe borrarse.</li>
              <li>Los registros deben ingresarse desde la fila 2.</li>
              <li>Las Notas de Crédito y Débito no se cargan automáticamente, se registran manualmente.</li>
              <li>Las fechas deben tener el formato DÍA/MES/AÑO.</li>
              <li>Los códigos con ceros a la izquierda (ej. 01, 02, 03) deben estar en formato TEXTO.</li>
              <li>El archivo Excel debe tener un máximo de 500 registros o filas.</li>
            </ul>
          </div>

          <div className={styles.uploadSection}>
            <Text as="h3" size="md" weight={600}>Seleccionar archivo</Text>
            <div className={styles.fileControls}>
              <input 
                type="file" 
                accept=".csv,.xlsx" 
                onChange={handleFileChange}
                className={styles.fileInput}
                placeholder="Seleccionar archivo"
              />
              <Button 
                onClick={handleUpload}
                size="large"
                disabled={!selectedFile}
              >
                Subir Excel
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    )
}
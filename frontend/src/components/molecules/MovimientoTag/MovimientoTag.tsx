import styles from "./MovimientoTag.module.scss";
import { Text } from "@/components/atoms/Text";
import { DownloadIcon, UploadIcon } from "@/components/atoms/icons";

export const MovimientoTag: React.FC<{ movimiento: 'Entrada' | 'Salida' }> = ({ movimiento }) => {
  return (
    <div className={`${styles.MovimientoTag} ${styles[`MovimientoTag--${movimiento}`]}`}>
      {movimiento === 'Entrada' ? <DownloadIcon /> : <UploadIcon />}
      <Text size="xs" color={movimiento === 'Entrada' ? 'success' : 'danger'}>
        {movimiento}
      </Text>
    </div>
  );
};

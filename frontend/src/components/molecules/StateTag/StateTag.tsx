import styles from "./StateTag.module.scss";
import { Text } from "@/components/atoms/Text";
import { CheckCircleIcon, InfoIcon } from "@/components/atoms";

export const StateTag: React.FC<{ state: boolean }> = ({ state }) => {
  return (
    <div className={`${styles.StateTag} ${styles[`StateTag--${state ? 'active' : 'inactive'}`]}`}>
      {state ? <CheckCircleIcon /> : <InfoIcon />}
      <Text size="xs" color={state ? 'success' : 'info'}>
        {state ? "Activo" : "Inactivo"}
      </Text>
    </div>
  );
};

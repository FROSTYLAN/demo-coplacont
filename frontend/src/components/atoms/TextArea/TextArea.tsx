import React from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={styles.textarea} {...props} />
    </div>
  );
};
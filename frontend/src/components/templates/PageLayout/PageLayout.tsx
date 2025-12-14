import React from "react";
import styles from "./PageLayout.module.scss";
import { Text, Divider } from "@/components";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, header, className, children }) => {
  return (
    <div className={`${styles.pageLayout} ${className || ''}`.trim()}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <Text as="p" size="2xl" color="neutral-primary" weight={600}>{title}</Text>
          {subtitle && <Text as="p" size="md" color="neutral-secondary">{subtitle}</Text>}
        </div>
        <div>
        {header}
        </div>
      </div>
      <Divider />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

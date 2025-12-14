import React from 'react';
import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components'

export const MainLayout: React.FC = () => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

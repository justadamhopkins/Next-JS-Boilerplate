import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

import styles from './AppContainer.module.css';

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className={clsx(styles.test)}>{children}</main>;
};

export default AppContainer;

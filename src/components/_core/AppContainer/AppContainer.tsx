import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

import styles from './AppContainer.module.css';

interface IAppContainerProps {
  children: ReactNode;
}
const AppContainer: FC<IAppContainerProps> = ({ children }) => {
  return <main className={clsx(styles.test)}>{children}</main>;
};

export default AppContainer;

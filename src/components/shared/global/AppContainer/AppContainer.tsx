import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

import styles from './AppContainer.module.scss';

const AppContainer: FC = ({ children }: { children: ReactNode }) => {
  return <main className={classNames(styles.test)}>{children}</main>;
};

export default AppContainer;

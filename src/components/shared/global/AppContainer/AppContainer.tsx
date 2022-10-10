import React, { FC, ReactNode } from 'react';

import { Wrapper } from './AppContainer.styled';

const AppContainer: FC = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppContainer;

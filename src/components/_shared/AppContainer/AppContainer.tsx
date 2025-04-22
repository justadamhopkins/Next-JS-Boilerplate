import { FC, ReactNode } from 'react';

interface IAppContainerProps {
  children: ReactNode;
}

const AppContainer: FC<IAppContainerProps> = ({ children }) => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-red-700 underline">
        Hello world!
      </h1>
      {children}
    </main>
  );
};

export default AppContainer;

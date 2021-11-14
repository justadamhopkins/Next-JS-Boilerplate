const customViewports = {
  extraSmall: {
    name: 'Extra Small Mobile',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  small: {
    name: 'Landscape Mobile',
    styles: {
      width: '640px',
      height: '480px',
    },
  },
  medium: {
    name: 'Tablet',
    styles: {
      width: '960px',
      height: '540px',
    },
  },
  large: {
    name: 'Laptop',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  extraLarge: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  viewport: { viewports: customViewports },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

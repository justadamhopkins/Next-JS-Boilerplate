const breakpoints = {
  xs: '360px',
  sm: '520px',
  md: '768px',
  lg: '1200px',
};

type TBreakpointKeys = keyof typeof breakpoints;
type TThemedCss = Record<
  TBreakpointKeys,
  (style: TemplateStringsArray) => string
>;

export const breakpoint = Object.keys(breakpoints).reduce((acc, key) => {
  return {
    ...acc,
    [key]: (style: string) =>
      `@media (min-width: ${breakpoints[key as TBreakpointKeys]}) { ${style} }`,
  };
}, {} as TThemedCss);

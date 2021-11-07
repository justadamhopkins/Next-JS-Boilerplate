const breakpoints = {
  xs: "360px",
  sm: "520px",
  md: "768px",
  lg: "1200px",
};

type BreakpointKeys = keyof typeof breakpoints;
type ThemedCss = Record<
  BreakpointKeys,
  (style: TemplateStringsArray) => string
>;

export const breakpoint = Object.keys(breakpoints).reduce((acc, key) => {
  return {
    ...acc,
    [key]: (style: string) =>
      `@media (min-width: ${breakpoints[key as BreakpointKeys]}) { ${style} }`,
  };
}, {} as ThemedCss);

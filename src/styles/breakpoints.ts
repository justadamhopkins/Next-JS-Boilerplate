export const breakpoints = {
  xs: "360px",
  sm: "520px",
  md: "768px",
  lg: "1200px",
};

type BreakpointKeys = keyof typeof breakpoints;

type ThemedCssMethod = {
  [K in BreakpointKeys]: Function;
};

export const breakpoint = (Object.keys(breakpoints) as BreakpointKeys[]).reduce(
  (acc, key) => {
    acc[key] = (style: String) =>
      `@media (min-width: ${breakpoints[key]}) { ${style} }`;
    return acc;
  },
  {} as ThemedCssMethod
);

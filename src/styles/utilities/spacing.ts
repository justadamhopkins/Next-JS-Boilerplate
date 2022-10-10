const BASE_SPACING = 8;

const spacingDivideBy = (
  increment: number,
  dividedBy?: number,
  withUnitSuffix?: boolean
): string | number => {
  const val = increment * BASE_SPACING;
  const spacing = dividedBy ? val / dividedBy : val;

  return withUnitSuffix ? `${spacing}px` : spacing;
};

export function baseSpacing(
  increment?: number,
  dividedBy?: number,
  withUnitSuffix?: true
): string;
export function baseSpacing(
  increment?: number,
  dividedBy?: number,
  withUnitSuffix?: false
): number;
export function baseSpacing(
  increment = 1,
  dividedBy?: number,
  withUnitSuffix = true
): string | number {
  const modifier = increment < 0 ? -1 : 1;
  const value = Math.abs(increment);

  if (value <= 0.5) {
    return spacingDivideBy(0.5 * modifier, dividedBy, withUnitSuffix);
  }

  if (value <= 0.75) {
    return spacingDivideBy(0.75 * modifier, dividedBy, withUnitSuffix);
  }

  if (value <= 1) {
    return spacingDivideBy(1 * modifier, dividedBy, withUnitSuffix);
  }

  if (value <= 1.5) {
    return spacingDivideBy(1.5 * modifier, dividedBy, withUnitSuffix);
  }

  return spacingDivideBy(
    Math.round(value) * modifier,
    dividedBy,
    withUnitSuffix
  );
}

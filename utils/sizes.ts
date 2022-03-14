export enum ScreenSize {
  DESKTOP = 1100,
  TABLET = 1025,
  MOBILE = 800,
  XSMALLMOBILE = 456
}

export enum Size {
  XLARGE = 1400,
  LARGE = 1100,
  MEDIUM = 1025,
  SMALL = 800,
  XSMALL = 600
}

export const FROM_DESKTOP = `@media (min-width: ${Size.LARGE}px)`;
export const UP_TO_DESKTOP = `@media (max-width: ${Size.LARGE}px)`;

export const FROM_TABLET = `@media (min-width: ${Size.MEDIUM}px)`;
export const UP_TO_TABLET = `@media (max-width: ${Size.MEDIUM}px)`;

export const FROM_MOBILE = `@media (min-width: ${Size.SMALL}px)`;
export const UP_TO_MOBILE = `@media (max-width: ${Size.SMALL}px)`;

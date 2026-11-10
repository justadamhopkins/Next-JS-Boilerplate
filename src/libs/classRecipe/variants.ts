import { cx as libCx, cv as libCv, scv as libScv } from 'css-variants';
import { twMerge } from 'tailwind-merge';

export const cx: typeof libCx = (...args) => twMerge(libCx(...args));

export const cv: typeof libCv = config =>
  libCv({
    ...config,
    classNameResolver: cx,
  });

export const scv: typeof libScv = config =>
  libScv({
    ...config,
    classNameResolver: cx,
  });

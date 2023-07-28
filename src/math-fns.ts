export const floor = (n: number, basis = 1) => Math.floor(n / basis) * basis;
export const ceil = (n: number, basis = 1) => Math.ceil(n / basis) * basis;
export const round = (n: number, basis = 1) => Math.round(n / basis) * basis;
export const clamp = (n: number) => Math.max(0, Math.min(1, n));
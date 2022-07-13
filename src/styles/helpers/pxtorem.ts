export const pxToRem = (value: string | number) => {
  const result = Number(value) / 16;
  return `${result}rem`
}
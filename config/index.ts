export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

export type Breakpoint = (typeof breakpoints)[number]

export type ResponsiveValue<T> =
  | T
  | Partial<Record<Breakpoint, T>>
  | 'undefined'

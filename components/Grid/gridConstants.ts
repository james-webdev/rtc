export const gapValues = [
  '0',
  'px',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
] as const

export const colsValues = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  'none',
] as const

// Define responsive templates
export const responsiveTemplates = [
  '4x4x4',
  '3x3x3x3',
  '6x6',
  '7x5',
  '9x3',
  '5x7',
  '3x9',
  '10x2',
  '12',
  '8x4',
] as const

export const gridAutoFlowValues = [
  'row',
  'col',
  'row-dense',
  'dense',
  'column-dense',
] as const

export type ResponsiveTemplate = (typeof responsiveTemplates)[number]
export type GapValues = (typeof gapValues)[number] | number
export type ColsValues = (typeof colsValues)[number]
export type GridAutoFlowValues = (typeof gridAutoFlowValues)[number]

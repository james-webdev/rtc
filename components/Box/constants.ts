const generateValues = (
  base: readonly string[],
  extra?: string[],
): readonly string[] => [...base, ...(extra || [])] as const

const generateFractionValues = (): readonly string[] =>
  [
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '2/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6',
    '2/6',
    '3/6',
    '4/6',
    '5/6',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    'full',
  ] as const

const generateNegativeValues = (values: string[]): string[] =>
  values
    .filter((value) => !isNaN(parseFloat(value)))
    .map((value) => `-${value}`)

const baseSpacing = [
  '0',
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

const positionalValues: string[] = ['auto', 'px']
const fractionValues = generateFractionValues()

const sizes = generateValues([
  ...baseSpacing,
  'full',
  'screen',
  'fit',
  'min',
  'max',
])
export const spacingValues = generateValues(
  baseSpacing,
  positionalValues,
)
const flexValues = ['1', 'auto', 'initial', 'none'] as const
const flexShrinkValues = ['0', '1'] as const
const flexGrowValues = [false, true] as const

export const border = {
  width: [
    '1',
    '0',
    '2',
    '4',
    '8',
    'x-0',
    'x-2',
    'x-4',
    'x-8',
    'x',
    'y-0',
    'y-2',
    'y-4',
    'y-8',
    'y',
    't-0',
    't-2',
    't-4',
    't-8',
    't',
    'r-0',
    'r-2',
    'r-4',
    'r-8',
    'r',
    'b-0',
    'b-2',
    'b-4',
    'b-8',
    'b',
    'l-0',
    'l-2',
    'l-4',
    'l-8',
    'l',
  ] as const,
  radius: [
    'none',
    'sm',
    'rounded',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    'full',
    't-none',
    't-sm',
    't',
    't-md',
    't-lg',
    't-xl',
    't-2xl',
    't-3xl',
    't-full',
    'r-none',
    'r-sm',
    'r',
    'r-md',
    'r-lg',
    'r-xl',
    'r-2xl',
    'r-3xl',
    'r-full',
    'b-none',
    'b-sm',
    'b',
    'b-md',
    'b-lg',
    'b-xl',
    'b-2xl',
    'b-3xl',
    'b-full',
    'l-none',
    'l-sm',
    'l',
    'l-md',
    'l-lg',
    'l-xl',
    'l-2xl',
    'l-3xl',
    'l-full',
    'ss-none',
    'ss-sm',
    'ss',
    'ss-md',
    'ss-lg',
    'ss-xl',
    'ss-2xl',
    'ss-3xl',
    'ss-full',
    'se-none',
    'se-sm',
    'se',
    'se-md',
    'se-lg',
    'se-xl',
    'se-2xl',
    'se-3xl',
    'se-full',
    'ee-none',
    'ee-sm',
    'ee',
    'ee-md',
    'ee-lg',
    'ee-xl',
    'ee-2xl',
    'ee-3xl',
    'ee-full',
    'es-none',
    'es-sm',
    'es',
    'es-md',
    'es-lg',
    'es-xl',
    'es-2xl',
    'es-3xl',
    'es-full',
    'tl-none',
    'tl-sm',
    'tl',
    'tl-md',
    'tl-lg',
    'tl-xl',
    'tl-2xl',
    'tl-3xl',
    'tl-full',
    'tr-none',
    'tr-sm',
    'tr',
    'tr-md',
    'tr-lg',
    'tr-xl',
    'tr-2xl',
    'tr-3xl',
    'tr-full',
    'br-none',
    'br-sm',
    'br',
    'br-md',
    'br-lg',
    'br-xl',
    'br-2xl',
    'br-3xl',
    'br-full',
    'bl-none',
    'bl-sm',
    'bl',
    'bl-md',
    'bl-lg',
    'bl-xl',
    'bl-2xl',
    'bl-3xl',
    'bl-full',
  ] as const,
  style: [
    'solid',
    'dashed',
    'dotted',
    'double',
    'hidden',
    'none',
  ] as const,
}

export const layout = {
  gap: spacingValues,
  flexBasis: generateValues(
    [...baseSpacing, ...fractionValues],
    positionalValues,
  ),
  alignItems: [
    'start',
    'center',
    'end',
    'stretch',
    'baseline',
  ] as const,
  alignContent: [
    'start',
    'center',
    'end',
    'between',
    'around',
    'evenly',
    'stretch',
  ] as const,
  justifyContent: [
    'normal',
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
    'stretch',
  ] as const,
  justifyItems: ['start', 'center', 'end', 'stretch'] as const,
  direction: ['row', 'row-reverse', 'col', 'col-reverse'] as const,
  wrap: ['wrap', 'wrap-reverse', 'nowrap'] as const,
  alignSelf: [
    'auto',
    'start',
    'center',
    'end',
    'stretch',
    'baseline',
  ] as const,
  order: generateValues(baseSpacing, ['first', 'last', 'none']),
  position: [
    'static',
    'fixed',
    'absolute',
    'relative',
    'sticky',
  ] as const,
  zIndex: [
    'z-0',
    'z-10',
    'z-20',
    'z-30',
    'z-40',
    'z-50',
    'z-auto',
  ] as const,
  display: [
    'block',
    'contents',
    'flex',
    'flow-root',
    'grid',
    'hidden',
    'inline-block',
    'inline-flex',
    'inline-grid',
    'inline',
    'list-item',
    'table-caption',
    'table-cell',
    'table-column-group',
    'table-column',
    'table-footer-group',
    'table-header-group',
    'table-row-group',
    'table-row',
    'table',
  ] as const,
  overflow: [
    'auto',
    'hidden',
    'clip',
    'visible',
    'scroll',
    'x-auto',
    'y-auto',
    'x-hidden',
    'y-hidden',
    'x-clip',
    'y-clip',
    'x-visible',
    'y-visible',
    'x-scroll',
    'y-scroll',
  ] as const,
  rotate: ['0', '1', '2', '3', '6', '12', '45', '90', '180'] as const,
}

const sizesAccr = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  'screen-sm',
  'screen-md',
  'screen-lg',
  'screen-xl',
  'screen-2xl',
  'none',
]

export const size = {
  height: sizes,
  maxHeight: sizes,
  minHeight: sizes,
  width: generateValues(sizes, positionalValues),
  maxWidth: generateValues(sizes, sizesAccr),
  minWidth: generateValues(sizes, sizesAccr),
  opacity: [
    '0',
    '5',
    '10',
    '20',
    '25',
    '30',
    '40',
    '50',
    '60',
    '70',
    '75',
    '80',
    '90',
    '95',
    '100',
  ] as const,
}

const spacingAll = generateValues(
  spacingValues,
  generateNegativeValues([...spacingValues] as string[]),
)

const additionalTranslateValues = ['px'] as const

const translateValues = generateValues(
  [...baseSpacing, ...additionalTranslateValues],
  [...fractionValues],
)

export const constants = {
  border,
  layout,
  size,
  flexValues,
  flexShrinkValues,
  flexGrowValues,
  spacingAll,
  translateValues,
}

const transition = [
  'none',
  'all',
  'default',
  'colors',
  'opacity',
  'shadow',
  'transform',
] as const

// Générer les types depuis les constantes
export type BorderWidthValues =
  (typeof constants.border.width)[number]
export type BorderRadiusValues =
  (typeof constants.border.radius)[number]
export type BorderStyleValues =
  (typeof constants.border.style)[number]
export type PositionValues =
  (typeof constants.layout.position)[number]
export type ZIndexValues = (typeof constants.layout.zIndex)[number]
export type DisplayValues = (typeof constants.layout.display)[number]
export type FlexGrowValues =
  | (typeof constants.flexGrowValues)[number]
  | number
export type GapValues = (typeof constants.layout.gap)[number] | number
export type FlexBasisValues =
  (typeof constants.layout.flexBasis)[number]
export type AlignItemsValues =
  (typeof constants.layout.alignItems)[number]
export type AlignContentValues =
  (typeof constants.layout.alignContent)[number]
export type JustifyContentValues =
  (typeof constants.layout.justifyContent)[number]
export type JustifyItemsValues =
  (typeof constants.layout.justifyItems)[number]
export type DirectionValues =
  (typeof constants.layout.direction)[number]
export type WrapValues = (typeof constants.layout.wrap)[number]
export type HeightValues =
  | (typeof constants.size.height)[number]
  | number
export type MaxHeightValues =
  | (typeof constants.size.maxHeight)[number]
  | number
export type MaxWidthValues =
  | (typeof constants.size.maxWidth)[number]
  | number
export type SpacingValues =
  | (typeof constants.spacingAll)[number]
  | number
export type OpacityValues = (typeof constants.size.opacity)[number]
export type AlignSelfValues =
  (typeof constants.layout.alignSelf)[number]
export type FlexShrinkValues =
  (typeof constants.flexShrinkValues)[number]
export type FlexValues = (typeof constants.flexValues)[number]
export type OrderValues = (typeof constants.layout.order)[number]
export type WidthValues =
  | (typeof constants.size.width)[number]
  | number
export type PositionalValues =
  | (typeof positionalValues)[number]
  | number
export type FractionValues = (typeof fractionValues)[number] | number
export type OverFlow = (typeof constants.layout.overflow)[number]
export type TranslateValues =
  (typeof constants.translateValues)[number]
export type RotateValues = (typeof constants.layout.rotate)[number]
export type TransitionValues = (typeof transition)[number]

import * as GridConstants from '../../components/Grid/gridConstants'
import { constants } from '../../components/Box/constants'

export const valuesMapping: Record<
  string,
  readonly (string | number | boolean)[]
> = {
  basis: constants.layout.flexBasis,
  borderStyle: constants.border.style,
  borderWidth: constants.border.width,
  bottom: constants.spacingAll,
  content: constants.layout.alignContent,
  display: constants.layout.display,
  flexDirection: constants.layout.direction,
  flex: constants.flexValues,
  'gap-x': constants.layout.gap,
  'gap-y': constants.layout.gap,
  gap: constants.layout.gap,
  'grid-cols': GridConstants.colsValues,
  'grid-flow': GridConstants.gridAutoFlowValues,
  grow: constants.flexGrowValues,
  items: constants.layout.alignItems,
  'justify-items': constants.layout.justifyItems,
  justify: constants.layout.justifyContent,
  left: constants.spacingAll,
  m: constants.spacingAll,
  'max-h': constants.size.maxHeight,
  'min-h': constants.size.minHeight,
  'max-w': constants.size.maxWidth,
  'min-w': constants.size.minWidth,
  mb: constants.spacingAll,
  ml: constants.spacingAll,
  mr: constants.spacingAll,
  mt: constants.spacingAll,
  mx: constants.spacingAll,
  my: constants.spacingAll,
  order: constants.layout.order,
  p: constants.spacingAll,
  pb: constants.spacingAll,
  pl: constants.spacingAll,
  position: constants.layout.position,
  pr: constants.spacingAll,
  pt: constants.spacingAll,
  px: constants.spacingAll,
  py: constants.spacingAll,
  radius: constants.border.radius,
  right: constants.spacingAll,
  self: constants.layout.alignSelf,
  shrink: constants.flexShrinkValues,
  top: constants.spacingAll,
  w: constants.size.width,
  wrap: constants.layout.wrap,
  zIndex: constants.layout.zIndex,
  h: constants.size.height,
  opacity: constants.size.opacity,
  overflow: constants.layout.overflow,
  'translate-y': constants.translateValues,
  'translate-x': constants.translateValues,
  rotate: constants.layout.rotate,
}
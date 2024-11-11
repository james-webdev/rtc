import { twMerge } from 'tailwind-merge'
import generateClasses from '../../utils/generateClasses'
import { type ColorToken } from '../../config/colorTokens'
import { type ResponsiveValue } from '../../config'
import type * as BoxConstants from './constants'

type SpacingValues = BoxConstants.SpacingValues

export interface BoxProps {
  children?: React.ReactNode
  className?: string
  as?:
    | 'div'
    | 'section'
    | 'article'
    | 'main'
    | 'header'
    | 'footer'
    | 'form'
  bg?: string
  bgc?: ResponsiveValue<ColorToken>
  borderColor?: ResponsiveValue<ColorToken>
  borderRadius?: ResponsiveValue<BoxConstants.BorderRadiusValues>
  borderStyle?: ResponsiveValue<BoxConstants.BorderStyleValues>
  borderWidth?: ResponsiveValue<BoxConstants.BorderWidthValues>
  bottom?: ResponsiveValue<SpacingValues>
  display?: ResponsiveValue<BoxConstants.DisplayValues>
  height?: ResponsiveValue<BoxConstants.HeightValues>
  id?: string
  left?: ResponsiveValue<SpacingValues>
  margin?: ResponsiveValue<SpacingValues>
  maxHeight?: ResponsiveValue<BoxConstants.MaxHeightValues>
  maxWidth?: ResponsiveValue<BoxConstants.MaxWidthValues | number>
  mb?: ResponsiveValue<SpacingValues>
  minHeight?: ResponsiveValue<BoxConstants.HeightValues>
  minWidth?: ResponsiveValue<BoxConstants.MaxWidthValues>
  ml?: ResponsiveValue<SpacingValues>
  mr?: ResponsiveValue<SpacingValues>
  mt?: ResponsiveValue<SpacingValues>
  mx?: ResponsiveValue<SpacingValues>
  my?: ResponsiveValue<SpacingValues>
  onClick?: (e: React.MouseEvent) => void
  onSubmit?: (e: React.FormEvent) => void
  opacity?: ResponsiveValue<BoxConstants.OpacityValues>
  padding?: ResponsiveValue<SpacingValues>
  pb?: ResponsiveValue<SpacingValues>
  pl?: ResponsiveValue<SpacingValues>
  position?: ResponsiveValue<BoxConstants.PositionValues>
  pr?: ResponsiveValue<SpacingValues>
  pt?: ResponsiveValue<SpacingValues>
  px?: ResponsiveValue<SpacingValues>
  py?: ResponsiveValue<SpacingValues>
  right?: ResponsiveValue<SpacingValues>
  style?: React.CSSProperties
  textColor?: ResponsiveValue<ColorToken>
  top?: ResponsiveValue<SpacingValues>
  width?: ResponsiveValue<BoxConstants.MaxWidthValues>
  zindex?: ResponsiveValue<BoxConstants.ZIndexValues>
  overflow?: ResponsiveValue<BoxConstants.OverFlow>
  translateX?: ResponsiveValue<BoxConstants.TranslateValues>
  translateY?: ResponsiveValue<BoxConstants.TranslateValues>
  rotate?: ResponsiveValue<BoxConstants.RotateValues>
  // Flex-specific props
  alignContent?: ResponsiveValue<BoxConstants.AlignContentValues>
  alignItems?: ResponsiveValue<BoxConstants.AlignItemsValues>
  alignSelf?: ResponsiveValue<BoxConstants.AlignSelfValues>
  debugGrid?: boolean
  flexDirection?: ResponsiveValue<BoxConstants.DirectionValues>
  flexBasis?: ResponsiveValue<BoxConstants.FlexBasisValues>
  flexGrow?: ResponsiveValue<BoxConstants.FlexGrowValues>
  flexShrink?: ResponsiveValue<BoxConstants.FlexShrinkValues>
  flex?: ResponsiveValue<BoxConstants.FlexValues>
  gapX?: ResponsiveValue<BoxConstants.GapValues>
  gapY?: ResponsiveValue<BoxConstants.GapValues>
  justifyContent?: ResponsiveValue<BoxConstants.JustifyContentValues>
  justifyItems?: ResponsiveValue<BoxConstants.JustifyItemsValues>
  order?: ResponsiveValue<BoxConstants.OrderValues>
  wrap?: ResponsiveValue<BoxConstants.WrapValues>
}

export const Box: React.FC<BoxProps> = ({
  as = 'div',
  children,
  className: injectedClassName,
  debugGrid = false,
  onSubmit,
  ...props
}) => {
  const Tag = as as keyof JSX.IntrinsicElements
  const className = twMerge(generateClasses(props), injectedClassName)
  const isFlex = props.display === 'flex'

  return (
    <Tag className={className} id={props.id} onSubmit={onSubmit}>
      {children}
      {isFlex && debugGrid && (
        <div
          className={twMerge(
            'absolute',
            'grid-cols-12',
            'grid',
            'inset-0',
            'pointer-events-none',
            'z-10',
          )}
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={`grid-cell-${idx}`}
              className={twMerge(
                'border',
                'border-dashed',
                'border-red-500',
              )}
            />
          ))}
        </div>
      )}
    </Tag>
  )
}

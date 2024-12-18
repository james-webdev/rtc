import type { BoxProps } from '../../components/Box'

interface StyleProp {
  prop: keyof BoxProps
  prefix: string
}

export const styleProps: StyleProp[] = [
  { prop: 'alignContent', prefix: 'content' },
  { prop: 'alignItems', prefix: 'items' },
  { prop: 'alignSelf', prefix: 'self' },
  { prop: 'bgc', prefix: 'bg' },
  { prop: 'borderColor', prefix: 'border' },
  { prop: 'borderRadius', prefix: 'rounded' },
  { prop: 'borderStyle', prefix: 'border' },
  { prop: 'borderWidth', prefix: 'border' },
  { prop: 'bottom', prefix: 'bottom' },
  { prop: 'flexDirection', prefix: 'flex' },
  { prop: 'display', prefix: '' },
  { prop: 'flexBasis', prefix: 'basis' },
  { prop: 'flexGrow', prefix: 'grow' },
  { prop: 'flexShrink', prefix: 'shrink' },
  { prop: 'flex', prefix: 'flex' },
  { prop: 'gapX', prefix: 'gap-x' },
  { prop: 'gapY', prefix: 'gap-y' },
  { prop: 'justifyContent', prefix: 'justify' },
  { prop: 'justifyItems', prefix: 'justify-items' },
  { prop: 'left', prefix: 'left' },
  { prop: 'margin', prefix: 'm' },
  { prop: 'maxHeight', prefix: 'max-h' },
  { prop: 'maxWidth', prefix: 'max-w' },
  { prop: 'minHeight', prefix: 'min-h' },
  { prop: 'minWidth', prefix: 'min-w' },
  { prop: 'mb', prefix: 'mb' },
  { prop: 'ml', prefix: 'ml' },
  { prop: 'mr', prefix: 'mr' },
  { prop: 'mt', prefix: 'mt' },
  { prop: 'mx', prefix: 'mx' },
  { prop: 'my', prefix: 'my' },
  { prop: 'order', prefix: 'order' },
  { prop: 'padding', prefix: 'p' },
  { prop: 'pb', prefix: 'pb' },
  { prop: 'pl', prefix: 'pl' },
  { prop: 'position', prefix: '' },
  { prop: 'pr', prefix: 'pr' },
  { prop: 'pt', prefix: 'pt' },
  { prop: 'px', prefix: 'px' },
  { prop: 'py', prefix: 'py' },
  { prop: 'right', prefix: 'right' },
  { prop: 'textColor', prefix: 'text' },
  { prop: 'top', prefix: 'top' },
  { prop: 'width', prefix: 'w' },
  { prop: 'wrap', prefix: 'flex' },
  { prop: 'zindex', prefix: '' },
  { prop: 'height', prefix: 'h' },
  { prop: 'opacity', prefix: 'opacity' },
  { prop: 'bg', prefix: 'bg' },
  { prop: 'overflow', prefix: 'overflow' },
  { prop: 'translateX', prefix: 'translate-x' },
  { prop: 'translateY', prefix: 'translate-y' },
  { prop: 'rotate', prefix: 'rotate' },
  { prop: 'transition', prefix: 'transition' },
]

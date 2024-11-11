import React, { Children } from 'react'
import { cn } from '../../utils/cn'
import generateClasses from '../../utils/generateClasses'
import { Box, type BoxProps } from '../Box'
import type * as GridConstants from './gridConstants'

export interface GridProps extends BoxProps {
  gapX?: GridConstants.GapValues
  gapY?: GridConstants.GapValues
  template?: GridConstants.ResponsiveTemplate
  debugGrid?: boolean
  gridAutoFlow?: GridConstants.GridAutoFlowValues
}

const generateResponsiveGridClasses = (
  template?: GridConstants.ResponsiveTemplate,
): string => {
  if (!template) return ''
  const columns = template.split('x').map(Number)

  if (columns.every((col) => col === columns[0])) {
    const colCount = columns[0]
    return `md:grid-cols-2 lg:grid-cols-${colCount} xl:grid-cols-${colCount}`
  }

  return 'md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12'
}

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  gapX,
  gapY,
  template,
  debugGrid,
  gridAutoFlow,
  ...props
}) => {
  const gridClasses = cn(
    'grid',
    'relative',
    gapX && `gap-x-${gapX}`,
    gapY && `gap-y-${gapY}`,
    template && generateResponsiveGridClasses(template),
    gridAutoFlow && `grid-flow-${gridAutoFlow}`,
    className,
    generateClasses(props),
  )

  const renderChildren = (): React.ReactNode => {
    if (!template) return children

    const columns = template.split('x').map(Number)

    if (columns.every((col) => col === columns[0])) {
      return children
    }
    return Children.map(children, (child, index) => {
      const spanClass = `lg:col-span-${columns[index % columns.length]} xl:col-span-${columns[index % columns.length]}`
      return <div className={cn(spanClass)}>{child}</div>
    })
  }

  return (
    <Box className={gridClasses} {...props}>
      {renderChildren()}
      {debugGrid ? (
        <div
          className={cn(
            'absolute',
            'grid grid-cols-12',
            'inset-0',
            'pointer-events-none',
            'z-10',
          )}
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={`grid-cell-${idx}`}
              className={cn(
                'border',
                'border-dashed',
                'border-danger-500',
              )}
            />
          ))}
        </div>
      ) : null}
    </Box>
  )
}

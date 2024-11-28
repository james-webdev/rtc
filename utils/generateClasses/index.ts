import { isValidElement } from 'react'
import {
  type ColorToken,
  colorTokens,
} from '../../config/colorTokens'
import type { BoxProps } from '../../components/Box/index'
import { styleProps } from './styleprops'

const isObject = (
  value: unknown,
): value is Record<string, string | number | undefined> =>
  typeof value === 'object' &&
  value !== null &&
  !isValidElement(value)

const formatValue = (
  prefix: string,
  value: string | number,
): string => {
  if (typeof value === 'string' && value.startsWith('-')) {
    const positiveValue = value.substring(1)
    return `-${prefix}-${positiveValue}`
  }

  if (typeof value === 'number') {
    return `${prefix}-[${value}px]`
  }
  return `${prefix}${prefix ? '-' : ''}${String(value)}`
}

const handleColorValue = (
  prefix: string,
  value: string | number,
): string => {
  return `${prefix}${prefix ? '-' : ''}${colorTokens[value as ColorToken]}`
}

const handlePixelValue = (
  prefix: string,
  value: string | number,
  breakpointPrefix = '',
): string => {
  return typeof value === 'number'
    ? `${breakpointPrefix}${prefix}-[${value}px]`
    : `${breakpointPrefix}${prefix}-${value}`
}

const handleHeightWidthDimension = (
  prop: keyof BoxProps,
  value: string | number,
  breakpointPrefix = '',
): string => {
  const sizePrefix = prop.toLowerCase().includes('width') ? 'w' : 'h'
  const dimensionPrefix = prop.startsWith('max')
    ? `max-${sizePrefix}`
    : prop.startsWith('min')
    ? `min-${sizePrefix}`
    : sizePrefix
  return handlePixelValue(dimensionPrefix, value, breakpointPrefix)
}

const handleMarginValue = (
  prop: keyof BoxProps,
  value: string | number,
  breakpointPrefix = '',
): string => {
  if (typeof value === 'string' && value.startsWith('-')) {
    const positiveValue = value.substring(1);
    return `${breakpointPrefix}-${prop}-${positiveValue}`;
  } else if (typeof value === 'number' && value < 0) {
    const positiveValue = Math.abs(value);
    return `${breakpointPrefix}-${prop}-[${positiveValue}px]`;
  } else if (typeof value === 'number') {
    return `${breakpointPrefix}${prop}-[${value}px]`;
  }
  return `${breakpointPrefix}${prop}-${value}`;
};

const handleObjectValue = (
  prefix: string,
  value: Record<string, string | number | undefined>,
  prop: keyof BoxProps,
): string => {
  return Object.entries(value)
    .map(([breakpoint, val]) => {
      if (val === undefined) return ''
      const breakpointPrefix =
        breakpoint === 'default' ? '' : `${breakpoint}:`

      if (
        prop === 'borderColor' ||
        prop === 'bgc' ||
        prop === 'textColor'
      ) {
        return `${breakpointPrefix}${prefix ? `${prefix}-` : ''}${colorTokens[val as ColorToken]}`
      }

      if (
        ['height', 'width', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight'].includes(
          prop,
        )
      ) {
        const sizePrefix = prop.toLowerCase().includes('width') ? 'w' : 'h'
        const dimensionPrefix = prop.startsWith('max')
          ? `max-${sizePrefix}`
          : prop.startsWith('min')
          ? `min-${sizePrefix}`
          : sizePrefix
        return handlePixelValue(
          dimensionPrefix,
          val,
          breakpointPrefix,
        )
      }
      if (['mt', 'mb', 'ml', 'mr', 'mx', 'my'].includes(prop)) {
        return handleMarginValue(prop, val, breakpointPrefix); 
      }
      return `${breakpointPrefix}${prefix}${prefix ? '-' : ''}${String(val)}`
    })
    .filter(Boolean)
    .join(' ')
}

export const generateClasses = (props: Partial<BoxProps>): string => {
  return styleProps
    .flatMap(({ prop, prefix }) => {
      const value = props[prop]
      if (value === undefined) return ''
      if (prefix === 'grow') return value === true ? 'grow' : 'grow-0'

      if (typeof value === 'string' || typeof value === 'number') {
        if (['height', 'width', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight'].includes(prop)) {
          return handleHeightWidthDimension(prop, value) 
        }
        if (['mt', 'mb', 'ml', 'mr', 'mx', 'my'].includes(prop)) {
          return handleMarginValue(prop, value) 
        }
        return prop === 'borderColor' ||
          prop === 'bgc' ||
          prop === 'textColor'
          ? handleColorValue(prefix, value)
          : formatValue(prefix, value)
      }

      if (isObject(value)) {
        return handleObjectValue(prefix, value, prop)
      }
      return ''
    })
    .filter(Boolean)
    .join(' ')
}

export default generateClasses

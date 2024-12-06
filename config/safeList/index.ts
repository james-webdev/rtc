import { valuesMapping } from './valuesMapping'
import { colorTokens } from '../colorTokens'
import { handleSpecialCases } from './specialCasesHandler'
import { addBreakpointClasses } from './classUtils'
import customClasses from './customClasses'

export const safeList = (): string[] => {
  const classes: string[] = []

  Object.entries(valuesMapping).forEach(([prefix, values]) => {
    handleSpecialCases(classes, prefix, values)
  })

  const addTextSizeClasses = (): void => {
    const sizes = [
      'xs',
      'sm',
      'base',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
      '9xl',
    ]
    sizes.forEach((size) => classes.push(`text-${size}`))
  }
  addTextSizeClasses()

  const addColorClasses = (color: string): void => {
    ;['text', 'bg', 'border', 'placeholder', 'divide'].forEach((prefix) => {
      classes.push(`${prefix}-${color}`)
      addBreakpointClasses(classes, prefix, color)
    })
  }
  Object.values(colorTokens).forEach(addColorClasses)

  const addHeightClasses = (classes: string[]): void => {
    for (let i = 0; i <= 3000; i++) {
      const value = `[${i}px]`
      classes.push(`h-${value}`, `max-h-${value}`, `min-h-${value}`)
      addBreakpointClasses(classes, 'h', value)
      addBreakpointClasses(classes, 'max-h', value)
      addBreakpointClasses(classes, 'min-h', value)
    }
  }
  const addWidthClasses = (classes: string[]): void => {
    for (let i = 0; i <= 1500; i++) {
      const value = `[${i}px]`
      classes.push(`w-${value}`, `max-w-${value}`, `min-w-${value}`)
      addBreakpointClasses(classes, 'w', value)
      addBreakpointClasses(classes, 'max-w', value)
      addBreakpointClasses(classes, 'min-w', value)
    }
  }

  const addMarginClasses = (classes: string[]): void => {
    for (let i = 0; i <= 1500; i++) {
      const value = `[${i}px]`

      ;['mt', 'mb', 'ml', 'mr', 'mx', 'my'].forEach((prefix) => {
        classes.push(`${prefix}-${value}`)
        addBreakpointClasses(classes, prefix, value)

        const negativePrefix = `-${prefix}`
        classes.push(`${negativePrefix}-${value}`)
        addBreakpointClasses(classes, negativePrefix, value)
      })
    }
  }

  addMarginClasses(classes)
  addHeightClasses(classes)
  addWidthClasses(classes)

  const addVisibilityClasses = (): void => {
    const states = ['block', 'hidden', 'flex']
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

    states.forEach((state) => {
      classes.push(state)
      breakpoints.forEach((bp) => {
        classes.push(`${bp}:${state}`)
      })
    })
  }
  addVisibilityClasses()

  const addFlexDirectionClasses = (): void => {
    const directions = ['flex-row', 'flex-col']
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

    directions.forEach((direction) => {
      classes.push(direction)
      breakpoints.forEach((bp) => {
        classes.push(`${bp}:${direction}`)
      })
    })
  }
  addFlexDirectionClasses()

  const addTextAlignClasses = (): void => {
    const alignments = ['text-center', 'text-left', 'text-right']
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

    alignments.forEach((alignment) => {
      classes.push(alignment)
      breakpoints.forEach((bp) => {
        classes.push(`${bp}:${alignment}`)
      })
    })
  }
  addTextAlignClasses()
  customClasses.forEach((customClass) => classes.push(customClass))

  return classes
}

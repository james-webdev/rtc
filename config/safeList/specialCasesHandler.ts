import {
  addBreakpointClasses,
  addClassesFromMapping,
} from './classUtils'

export const handleSpecialCases = (
  classes: string[],
  prefix: string,
  values: readonly (string | number | boolean)[],
): void => {
  switch (prefix) {
    case 'grow':
      values.forEach((value) =>
        classes.push(value === true ? 'grow' : 'grow-0'),
      )
      break
    case 'position':
    case 'zIndex':
    case 'borderStyle':
      values.forEach((value) => {
        classes.push(String(value))
        addBreakpointClasses(classes, '', String(value))
      })
      break
    case 'radius':
      values.forEach((value) => {
        classes.push(`rounded-${String(value)}`)
        addBreakpointClasses(classes, 'rounded', String(value))
      })
      break
    case 'borderWidth': {
      const borderPrefixes = [
        'border',
        'border-x',
        'border-y',
        'border-t',
        'border-r',
        'border-b',
        'border-l',
      ]
      values.forEach((value) => {
        borderPrefixes.forEach((borderPrefix) => {
          classes.push(`${borderPrefix}-${String(value)}`)
          addBreakpointClasses(classes, borderPrefix, String(value))
        })
      })
      break
    }
    case 'wrap':
    case 'flexDirection':
      values.forEach((value) => {
        classes.push(`flex-${String(value)}`)
        addBreakpointClasses(classes, 'flex', String(value))
      })
      break
    case 'overflow':
      values.forEach((value) => {
        classes.push(`overflow-${String(value)}`)
        addBreakpointClasses(classes, 'overflow', String(value))
      })
      break
    case 'translate-x':
    case 'translate-y':
      values.forEach((value) => {
        const cleanValue = String(value)

        classes.push(`${prefix}-${cleanValue}`)
        addBreakpointClasses(classes, prefix, cleanValue)

        classes.push(`-${prefix}-${cleanValue}`)
        addBreakpointClasses(classes, `-${prefix}`, cleanValue)
      })
      break

    default:
      addClassesFromMapping(classes, prefix, values)
  }
}

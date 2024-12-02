export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

export const addBreakpointClasses = (
  classes: string[],
  prefix: string,
  value: string,
): void => {
  breakpoints.forEach((bp) => classes.push(`${bp}:${prefix}-${value}`))
}

export const addClassesFromMapping = (
  classes: string[],
  prefix: string,
  values: readonly (string | number | boolean)[],
): void => {
  values.forEach((value) => {
    const stringValue = String(value)

    if (stringValue.startsWith('-')) {
      const positiveValue = stringValue.substring(1)
      const negativePrefix = `-${prefix}`
      classes.push(`${negativePrefix}-${positiveValue}`)
      addBreakpointClasses(classes, negativePrefix, positiveValue)
    } else {
      classes.push(`${prefix}-${stringValue}`)
      addBreakpointClasses(classes, prefix, stringValue)
    }
  })
}

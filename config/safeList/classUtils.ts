export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

export const addBreakpointClasses = (
  classes: string[],
  prefix: string,
  value: string,
): void => {
  breakpoints.forEach((bp) =>
    classes.push(`${bp}:${prefix}-${value}`),
  )
}

export const addClassesFromMapping = (
  classes: string[],
  prefix: string,
  values: readonly (string | number | boolean)[],
): void => {
  values.forEach((value) => {
    const stringValue = String(value)
    classes.push(value === '' ? prefix : `${prefix}-${stringValue}`)
    addBreakpointClasses(classes, prefix, stringValue)
  })
}

export function capitalize(str: string | undefined) {
  if (!str) return str // Maneja strings vacíos o nulos
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function serialize(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-')
}

export function trim(str: string) {
  return str.replace(/\s+/g, '')
}

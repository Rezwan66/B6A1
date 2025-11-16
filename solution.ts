function formatValue(
  value: string | number | boolean
): string | number | boolean | undefined {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
  return undefined;
}

function getLength<T>(value: string | T[]): number | undefined {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return undefined;
}

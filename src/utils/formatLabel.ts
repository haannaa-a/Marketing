export const formatLabel = (value: string): string => {
  if (!value) {
    return '';
  }

  return value.replaceAll('_', ' ');
};

export const textCapitalize = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const getIdByUrl = (url: string): number => {
  const urlSplit = url.split('/');
  return Number(urlSplit[urlSplit.length - 2]);
}
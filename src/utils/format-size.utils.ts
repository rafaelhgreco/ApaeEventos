const formatSize = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value;
};
export { formatSize };

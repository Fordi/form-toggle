export const joinClass = (...names) => {
  return names.filter(a => !!a).join(' ');
};

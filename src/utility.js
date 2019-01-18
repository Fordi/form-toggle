export const joinClass = (...names) => {
  return names.filter(a => !!a).join(' ');
};

export const randomId = (base, length = 8) => {
  return (base || '_') + Math.random().toString(36).substr(2, length));
};

export function getCurrentYear () {
  const d = new Date();
  return d.getFullYear();
}

export function sortSlice (list) {
  return list.sort((a, b) => a.order - b.order);
};
export default function orderByProps(sortObj, order) {
  const alfaBatOrder = [];
  const keyOrder = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in sortObj) {
    if (!order.includes(prop)) {
      alfaBatOrder.push({ prop, value: sortObj[`${prop}`] });
    } else {
      keyOrder.push({ prop, value: sortObj[`${prop}`] });
    }
  }
  alfaBatOrder.sort((a, b) => {
    if (a.prop > b.prop) {
      return 1;
    }
    if (a.prop < b.prop) {
      return -1;
    }
    return 0;
  });
  return [...keyOrder, ...alfaBatOrder];
}

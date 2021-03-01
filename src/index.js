/* eslint-disable no-restricted-syntax */
export default function orderByProps(sortObj, order) {
  const alfaBatOrder = [];
  const keyOrder = [];
  // eslint-disable-next-line guard-for-in
  for (const prop in sortObj) {
    if (!order.includes(prop)) {
      alfaBatOrder.push({ prop, value: sortObj[`${prop}`] });
    } else {
      keyOrder[order.indexOf(`${prop}`)] = { prop, value: sortObj[`${prop}`] };
    }
    alfaBatOrder.sort((a, b) => a.prop.localeCompare(b.prop));
  }
  return [...keyOrder, ...alfaBatOrder];
}

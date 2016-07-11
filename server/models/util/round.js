
export function round(val, decimals){
  return Math.round(val * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

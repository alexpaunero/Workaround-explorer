export const formatNumber = (number) => {
  const strNumber = number.toString();
  const len = strNumber.length;
  const modulo = Math.floor(len%3);
  let results = strNumber.slice(len-3,len);
  for (let i = len-3; i >= 1; i-=3){
    results = strNumber.slice(i-3,i)+","+results;
  };
  results = strNumber.slice(0,modulo) + results;
  return results;
}

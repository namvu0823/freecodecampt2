function convertToRoman(num) {
  const numerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
   let romanizedNumerals = '';
   const arabicNumerals = Object.keys(numerals).reverse();
  
   arabicNumerals.forEach(key => {
     while(key <= num) {
       romanizedNumerals += numerals[key];
       num -= key;
     }
   });
  return romanizedNumerals;
 }
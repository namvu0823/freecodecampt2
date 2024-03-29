function palindrome(str) {
  
  const len = str.length - 1;
  str = str.toLowerCase().replace(/[\W_]/g, "");

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}
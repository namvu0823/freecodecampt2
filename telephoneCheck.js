function telephoneCheck(str) {

  let regex= /^[1]{0,1}[' ']{0,1}([(]{0,1}[\d]{3}[)]{0,1})[' ']{0,1}[-]{0,1}[\d]{3}[' ']{0,1}[-]{0,1}[\d]{4}$/;
  if((/\(/).test(str) || (/\)/).test(str)  ) 
  {
    if((/\)/).test(str) )
    {
      return (/\((?=[\d]{3}\))/.test(str)) &&  regex.test(str) ;
    }
    else
    return false;
  }
  else
  {
  return  regex.test(str);
  }
}

telephoneCheck("1231231231-)($");
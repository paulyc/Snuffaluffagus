// Confirmed the GitHub editor does not work in any mobile version of it i have tried chrome firefox the app any of the above with the desktop box checked i edited this in Google Keep and copy pasted it in here! Am i the only one with this problem?
const ascii2bin = (base) => base.charCodeAt() >> 1 & 3;
const testascii2binfun = (fun) => assert(['a', 'c', 't', 'g'].reduce((ok,base,index) => ok && fun(base) === index && fun(base.toUpperCase()) === index, true));
testascii2binfun(ascii2bin);

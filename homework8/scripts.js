let numOrStr = prompt('input number or string');
numOrStr = (numOrStr !== null) ? numOrStr.trim(): numOrStr;
console.log(numOrStr);

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    case !isNaN(+numOrStr) || numOrStr:
        console.log('number is Ba_NaN')
        break;
    default:
        console.log('OK!')
}
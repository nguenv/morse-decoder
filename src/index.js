const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/gi);
    let str = arr.join(',');
    let nothing = str.replace(/00/gi, '');
    let drop = nothing.replace(/10/gi, '.');
    let line = drop.replace(/11/gi, '-');
    let star = line.replace(/\*\*\*\*\*\*\*\*\*\*/gi, ' ');
    let newString = line.split(',');
    let array = [];
        for (let element in newString) {
            for (let prop in MORSE_TABLE) {
                if (newString[element] === prop) {
                    array.push(MORSE_TABLE[prop]);
                }
            }
        }
        let newArray = array.join('');
    return newArray;
}

module.exports = {
    decode
}
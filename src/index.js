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
};

function decode(expr) {
    const splitWords = expr.split('**********');
    let wordsCount = [];
    let words = []; 
    splitWords.forEach((element, index) => {
        const letters = element.split('');
        const counts = letters.length / 10;
        wordsCount.push(counts);
        const letter = [];
        for (let i = 0; i < wordsCount[index]; i++) {
            letter.push(element.slice((i)+'0', ((i+1)+'0')));
        }
        words.push(letter);
    });
    let sentence = [];
    words.forEach(i => {
        const morse = [];
        for (n in i) {
            let j = 0;
            letters = [];
            while(j < i[n].length) {
                if (i[n].slice(j, j+2) == 10) {
                    letters.push(`.`)
                } else if (i[n].slice(j, j+2) == 11) {
                    letters.push(`-`)
                }
                j+=2;
            }
            morse.push(MORSE_TABLE[letters.join('')])
        }
        sentence.push(morse.join(''))
    })
    console.log(sentence.join(' '));
    return sentence.join(' ')
}

module.exports = {
    decode
}

let string = 'The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.        -- Geoffrey James, "The Tao of Programming"'

const splitIntoWorld = (anyString) => {  
    return split = anyString.split(" ");
}
const uniqLetter = (arr) => {
    let map = new Map();
    for (const litera of arr) {
        let current = litera;
        if (map.has(current)) {
            map.set(current, map.get(current) + 1);
        } else {
            map.set(current, 1);
        }
    }
    for (const litera of arr) {
        if (map.get(litera) == 1) {
            return litera;
        }
    }
}
const uniqFirstLetter = (arr) => {
    let arrFirst = [];
    arr.forEach((el) => arrFirst.push(uniqLetter(el)));
    return arrFirst;
}


const uniqFirstLetterAllWords = (anyString) => {
    let arrWords = splitIntoWorld(anyString);
    let wordsUniqLetter = uniqFirstLetter(arrWords);
    console.log(uniqLetter(wordsUniqLetter));
}

uniqFirstLetterAllWords(string);
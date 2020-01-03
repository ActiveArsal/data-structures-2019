function easyReverse(string){
    return string.split('').reverse().join('');
}

function detailedReverse(string){
    let reversed = '';

    for(let char of string){
        reversed = char + reversed;
    }

    return reversed;
}

console.log(easyReverse("yabadabadoo"));
console.log(easyReverse("Hello"));
console.log(easyReverse("anagram"));

console.log('===============')

console.log(detailedReverse("reverse"));
console.log(detailedReverse("blah"));
console.log(detailedReverse("string gnirts"));
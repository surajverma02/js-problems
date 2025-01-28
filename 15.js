// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

const a = 'hi', b = 'how hi many hi times does hi the character hioccurs?';

const occurings = (a, b) => {
    return b.split(a).length -1;
}

console.log(occurings(a, b));
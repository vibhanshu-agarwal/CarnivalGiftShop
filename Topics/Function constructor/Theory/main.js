// You can experiment here, it won’t be checked
let book = {
    name: 'Crime and Punishment',
    author: 'Fedor Mikhailovich Dostoevsky',
    publicationDate: 1866
}

for(let key in book) {
    console.log(key + ': ' + book[key]);
}

let secondBook = {
    "3": 'Doomed city',
    "1": 'Brothers Strugatsky',
    "0": 1972
}

for (let i in secondBook) {
    console.log(secondBook[i]);
}
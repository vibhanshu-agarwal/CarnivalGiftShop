// You can experiment here, it won’t be checked
const array = ["Try", "to", "find", "me", "!"];

console.log(array.includes("find")); // true
console.log(array.includes(5)); // false

console.log(array.includes("me", 2)); // true
console.log(array.includes("me", 4)); // false

console.log(array.includes("me", -10)); // true
console.log(array.includes("me", -1)); // false

const projects = [{name: "To-Do App", lang: "JS"}, {name: "Website", lang: "HTML"}];

console.log(projects.find(e => e.lang === "JS")); // {name: "To-Do App", lang: "JS"}
console.log(projects.find(e => e.lang === "CSS")); // undefined

console.log(projects.findIndex(e => e.lang === "HTML")); // 1
console.log(projects.findIndex(e => e.lang === "C")); // -1

const languages = ["HTML", "CSS", "JS", "Python", "JS"];

console.log(languages.indexOf("JS")); // 2
console.log(languages.indexOf("English")); // -1

console.log(languages.indexOf("JS", 3)); // 4
console.log(languages.indexOf("CSS", 2)); // -1

console.log(languages.lastIndexOf("JS")); // 4
console.log(languages.lastIndexOf("JS", 3)); // 2
console.log(languages.lastIndexOf("JS", 1)); // -1

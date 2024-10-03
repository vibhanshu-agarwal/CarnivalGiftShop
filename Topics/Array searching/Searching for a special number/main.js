function search(numbers) {
// Write your code here
    return numbers.find(e => e % 11 === 0);
}
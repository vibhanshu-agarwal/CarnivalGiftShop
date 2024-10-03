// You can experiment here, it won’t be checked
function removeTail(array) {
     array.splice(-2, 2, 0);
     return array;
}

let arr = ['may', 'june', 'july', 'august'];
console.log(removeTail(arr));


console.log("Reversing an array:");
console.log("");

function reverseArray(array) {
    let newArray = [];

    for (let i = Array(array).length + 1; 0 <= i; i--) {
        newArray.push(array[i]);
    }

    console.log(newArray);
}

reverseArray(["A", "B", "C"])
// Test
console.log("Reversing an array:");
console.log("");

// En funktion til at vende om på en array
function reverseArray(array) {
    
    // Deklarer en ny array som er tom
    let newArray = [];
    
    // Henter antallet af items i et array og minusser med 1 for at få det præcise tal og gemmer det i numberOfItemsInArray
    let numberOfItemsInArray = array.length - 1;

    // En for loop som tæller ned fra numberOfItemsInArray
    for (let i = numberOfItemsInArray; 0 <= i; i--) {
        // Lægger hver array item i newArray, fra enden til starten
        newArray.push(array[i]);
    }
    
    // Returnere newArray
    return newArray;
    
}

// Kalder på reverseArray funktionen og udskriver den
console.log(reverseArray(["A", "B", "C"]));


// En funktion til at vende om på en array
function reverseArrayInPlace(array) {
    
    // Deklarer en ny array som er tom
    let newArray = [];
    
    // Henter antallet af items i et array og minusser med 1 for at få det præcise tal og gemmer det i numberOfItemsInArray
    let numberOfItemsInArray = array.length - 1;

    // Lægger alle items fra array til newArray
    for (let i = 0; i <= numberOfItemsInArray; i++) {
        newArray[i] = array[i];
    }
    
    for (let i = numberOfItemsInArray, o = 0; 0 <= i; i--, o++) {
        // Lægger den sidste item fra newArray til det første item i array ved hver iteration
        array[o] = newArray[i];
    }
    
}

// Initialisere en array med items
let arrayValue = [1, 2, 3, 4, 5];

// Kalder på reverseArrayInPlace funktionen med arrayValue som argument
reverseArrayInPlace(arrayValue);

// Udskriver arrayValue
console.log(arrayValue);

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
    
    // Udskriver newArray items
    console.log(newArray);
}

// Kalder på reverseArray funktionen
reverseArray(["A", "B", "C"])

// Mangler funktionen reverseArrayInPlace
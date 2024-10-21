
let input = parseInt(prompt("Masukkan angka:"));


if (!isNaN(input)) {
   
    for (let i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Pondok"); 
        } else if (i % 5 === 0) {
            console.log("Informatika"); 
        } else {
            console.log(i); 
        }
    }
} else {
    console.log("Masukkan angka yang valid!");
}

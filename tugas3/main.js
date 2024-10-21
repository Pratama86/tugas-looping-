let size = parseInt(prompt("Masukkan Angka:"));
let kotak = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    kotak += "*";
  }
  kotak += "\n";
}

console.log(kotak);
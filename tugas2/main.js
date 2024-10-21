let result = "";
for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        result += "x "; // Jika angka genap, cetak "x"
    } else {
        result += i + " "; // Jika angka ganjil, cetak angka
    }
}
console.log(result.trim());
var input = require('readline-sync');
var jam = input.question ("masukkan jam = ");
var menit = input.question("masukkan menit = ");
var detik = (jam*3600) + (menit*60);
console.log("tampilkan detik " + detik);
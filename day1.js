// identifier


// identifier adalah penamaan variable, fungsi ataupun parameter.adalah
// karakter pertamanya hanya bisa huruf a - z, dan simbol underscore/ dolar
// tidak bisa menggunakan angka didepan
// tidak boleh menggunakan bahasa yang sudah ada di default js


//statementg
/**
 *  statement = suatu pernyataan js yang paling dasar dan meiliki tugas tertentu
 */

// console.log = buat ngprint di js
let name = "Hello world"
console.log(name)

// expressiom
/**
 *  expression = merupakan ekspresin js yang berfungsi untuk menghasilkan nilai tertentu.
 */

// let fungsi nya utk buat variabel

// let first =  1
// let second = 2
// let result = first + second

// if(result>1 ){
//     console.log('maka hasilnya adalah ' +result)
// }

// scope
/**
 *  cakupan kode agar bisa mengakses atau membatasi 
 */


// var 
/**
 * global scope merupakan cakupan di seluruh file
 * var adalah global,  scope sehingga di akses seluruh file.  bahkan dalam function
 * var juga local scope
 */



// var a = "Hallo rekan rekan"
// function first() {
//     console.log(a)
// }

// function second() {
//     a = "nilainya sudah diubah"
//     console.log(a)
// }

// first()
// second()


// Let
/**
 * cakupan nya hanya global block dan local scope
 * variabel bisa diubah isinya
 */


// const
/** 
 *  const tidak bisa diganti isinya seperti val di kotlin 
 * cakupannya block, global, local scope
 */

// const a = "Mobil"
// function kendaraan(){
//     console.log(a)
// }
// kendaraan()

// var a = 'pajero'
// function kendaraan(){
//     // var b menjadi local scoupe krn dia masuk dalam function
//     var b = "datsun" // local scoupe tidak bisa diakses di function lain
//     console.log(b)
// }
// function mobil(){
//     a= "Pugeot"
//     console.log(a)
// }
// kendaraan()
// mobil()

// closure
//closure adalah cara mengakses variable dari parent scope di dalam child scope parent

// function hello(sapa){ // sapa adalah parameter
//     var text = "Assalamualaikum" + sapa
//     return function (){
//         console.log(text)
//     }
// }

// var nama = hello(" fulan")
// nama()

//chalenge
// nama: nama kalian
// kelas: x RPL A

function baru(nama,kelas){
    var name = "Nama: " + nama
    var klas = "Kelas: " + kelas
    return function (){
        console.log(name)
        console.log(klas)
    }
}

var hasil=baru('Altaf', 'X RPL A')
hasil()

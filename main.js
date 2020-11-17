JAVASCRIPT DASAR
/* inner html = untuk nulis konten
 document.getElementById("nama ID").innerHTML = "Apa yang mau diisi"; */

 /*Deklarasi Variable
 Nama dimulai dengan huruf atau $ atau _
 Nama boleh mengandung huruf, angka, underscore, _ dan $
 Nama harus case sensitive
 Ada "Reserved Words" yang tak boleh dipakai
 Var nama elemen = */

 /*Tipe data string
 var text = "Teks kau";*/

 /* tipe data angka
 var angka = 100 * 100;*/

 /* operator matematika + - / * % (sisa hasil pembagian)
 angkabaru++ / increment (menjumlahkan dengan 1)
 angka-- / decrement (mengurangi dengan 1)
 x += y sama saja dengan x = x + y
 x -= y sama saja dengan x = x - y
 x *= y sama saja dengan x = x * y
 x /= y sama saja dengan x = x / y
 x %= y sama saja dengan x = x % y

 OPERATOR PERBANDINGAN
 == sama dengan
 != tidak sama dengan
 === strict sama dengan
 
 */

 /*Metode Number
 ToFixed (n), toString (n), random(), min (a,b,c), max (a,b,c)
 var angka_baru = angka2.toFixed(3);
 var angka2 = Math.random();
 var angka3 = Math.max(1,2,3)
 */

 /*Metode Number (2)
 Round (), ceil (), floor (), ObjectMethods (Contoh: Abs, log)
 random spesific  formula > Math.floor(Math.random() * x ) + 1*/
 var x = 5
 var y = 3;// range.jarak

/*metode string
length indexOf lastIndexof search charAt
toUpperCase () toLowerCase(), replace
substring (start, end), substr (start, length)
parseInt parseFloat*/

/*fungsi
function NamaFungsi(){
alert("selamat datang!");
}
Memanggil fungsi
namaFungsi();*/

/*tipe data array
array dimulai dari angka 0*/

 /*metode array
 sort, reverse, concat, length, join ("separator")
 concat = menyatukan seluruh array*/
 /*splice>add(mulai, dihapus?, isi) splice>remove
 pop, push, shift(), unshift()
 */
 /* if dan else
 dua syarat atau lebih
 dan && .... atau | |
 */
 /*syarat bercabang
 if (){
 if (){
}
}
}*/
 /* Switch case
 switch (nama)
 case "Endy":

 Default:*/
 /**/
// pengulangan
// 1. for loop
// for (mulai; sampai/syarat; perpindahan)
//
//
// 2. while loop
// while (syarat)
//
//
// do while
//

DOM JAVASCRIPT
// Selector
document.getElementById(Nama ID).innerHTML = "asda";
document.getElementsByClassName (nama class)[barisan kelas ke berapa]
documents.getElementsByTagName (nama tag)

// Menambahkan elemen
document.createElement (nama elemen)
document.createTextNode (isi teks)
namaVariable.appendChild(text)

// Menghapus elemen
namaVariable.removeChild (nama var)

// Mengedit elemen
NamaParentVariable.replaceChild (elemen baru, elemen lama)

// Mengubah atribut
objek.atribut

namaVar.SetAttribute(nama atribut, nilai atribut)

// Bermain CSS
NamaVar.ClassName()

namaAtribut.style.property =

// Event Javascript
1. Langsung diklik = onclick = 'nama elemen()'
2. namaElemen.onclick =
3.
namaElemen.AddEventListener('namaAction', function(){})

onload = "alert('')"

// querySelectorAll
document.querySelectorAll('#namaID')[0].InnerHTML
document.querySelectorAll('.namaClass')[0].InnerHTML
//

ES 6 JAVASCRIPT
// var, let, const
var // function scope
let, const // block scope

// sintaks row
=>

// default parameter
createTag

// Rest dan spread
...(namaVar)

// Template Literal
${username}

// Promise

JQUERY JAVASCRIPT
// memastikan file sudah diload dengan sempurna
$(document).ready(function(){
  $('h1').css('color', 'red');
//memilih tag id dan class
$('#box')
$('.box')
:first
:last
:eq(0)
});

// event dan this
$('h1').click(function(){
});
.mouseenter()
.mouseleave()
this

// get dan set nilai
$('form').submit(function(){
  var text = $('#inputText').val();
  .text()
})

.html()

// mencegah efek
event.preventDefault();

//menghapus dan menambah elemen
//append prepend || after before
//remove dan empty

//CSS JQUERY
$('h1').css({
  'color' : 'red',
})
.addClass('namaKelas')
.toggleClass

// nilai dimensi
// innerWidth = konten + padding
// outerWidth = konten + padding + border
.innerWidth
.outerWidth

// menampilkan dan menyembunyikan
// hide - show - toggle
$('btn1').click(function(){
  $('#box1').show();
})

// fadein fadeout fadeto (time, opacity) fade toggle

// slideUp slidedown slidetoggle

//stop animasi - callback - chaining

//traversing
.filter
.not

// siblings next nextAll nextUntil('param') ~ prev

// children find parent parents() parentsUntil

OBJEK JAVASCRIPT
//membuat objek
// key => value
var programmer = {
  nama : "Hai",
  umur : 23,

};

var designer = new Object();
designer.nama = "yoo"

//metode pada Object
getData : function(){
  return "Nama " + this.nama
},
setData : function(nama){
  this.nama = nama
}

//objek prototype
pemain_bola.prototype.negara = 3

// sifat mutable
membuat galeri foto javascript
//https://www.youtube.comjyyfytu/watch?v=Hwxy0Kn4Jj4&list=PLCZlgfAG0GXAKYkZcZcRwtV-0WFFCxvlZ&index=1

GALERI FOTO DENGAN JQUERY
//https://www.youtube.com/watch?v=XjvWdWOOVgo&list=PLCZlgfAG0GXD8otdI_nRNiOL0-polKqeJ&index=1

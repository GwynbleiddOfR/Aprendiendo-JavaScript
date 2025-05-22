// 1. Escribe un comentario en una linea

// Este es un comentario en una linea

// 2. Escribe un comentario en varias lineas

/* Este es 
un comentario en
varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let cadenaDeTexto = "Esto es un String"
let numero = 1
let booleano = true
let booleanoFalso = false
let valorSinDefinir
let valorNulo = null
let simbolo = Symbol("misimbolo")
let numeroGrande = BigInt(2138912839182391293982391)

// 4. Imprime por consola el valor de todas las variables

console.log(cadenaDeTexto)
console.log(numero)
console.log(booleano)
console.log(valorSinDefinir)
console.log(valorNulo)
console.log(simbolo)
console.log(numeroGrande)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof cadenaDeTexto)
console.log(typeof numero)
console.log(typeof booleano)
console.log(typeof valorSinDefinir)
console.log(typeof valorNulo)
console.log(typeof simbolo)
console.log(typeof numeroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadenaDeTexto = "Este es otro String"
numero = 2
booleano = false
valorSinDefinir = 5
valorNulo = "Valor que no es nulo"
simbolo = Symbol("Mi simbolo 2")
numeroGrande = BigInt(21398127389748771290839132098)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadenaDeTexto = 1
numero = "Esto es un String en una variable que era un numero"
booleano = 3
valorSinDefinir = "Ahora es un String con valor definido"
valorNulo = true
simbolo = BigInt(213123123123123311313131313131313132)
numeroGrande = Symbol("mi simbolo 3")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombre = "Sebastian"
const edad = 24
const esPracticante = true
//const valorQueNoDefino
const otroValorNulo = null
const otroSimbolo = Symbol(3)
const otroNumeroGrande = 128939102839012839812039120938

// 9. A continuación, modifica los valores de las constantes

/*
nombre = "Marcelo"
edad = 25
esPracticante = false
valorQueNoDefino = "Ahora si lo defino"
otroValorNulo = "Ahora es un valor no nulo"
otroSimbolo = Symbol(88)
otroNumeroGrande = "Ahora es un String porque si"
*/

// 10. Comenta las lineas que produzcan algún tipo de error al ejecutarse
// Tipos de datos primitivos

// Cadena de texto (String)
let nombre = "Sebastian Apileo"
let alias = 'Lukepanqeqe'
let email = `apileosebastian@gmail.com`

// Números (number)
let edad = 24 // Entero
let altura = 1.71 // Decimal

// Booleanos (boolean)
let esEstudiante = true
let esDesarrollador = false

// Sin defenir (undefined)
let valorSinDefinir
console.log(valorSinDefinir)

// Nulo (null)
// Se declara nulo porque quizás a futuro tenga otro valor
let valorNulo = null

// Simbolo (Symbol)
// Se usa habitualmente para identificar valores únicos.
// Es un tipo de dato primitivo introducido en ECMAScript 2015 (ES6).
// Cada Symbol() creado es único, incluso si tienen la misma descripción.
let miSimbolo = Symbol("misimbolo")

// Número entero grande (BigInt)
let miBigInt = BigInt(21329187381273891723981723897129837192)
let miBigInt2 = 21329187381273891723981723897129837192n

// Mostrar los tipos de datos
console.log(typeof nombre)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof edad)
console.log(typeof altura)

console.log(typeof esEstudiante)
console.log(typeof esDesarrollador)

console.log(typeof valorSinDefinir)

// Cuando se le hace el typeof nos damos cuenta que null es un objeto
// Imprimirá "object" (un error histórico en JavaScript)
console.log(typeof valorNulo)

console.log(typeof miSimbolo)

console.log(typeof miBigInt)
console.log(typeof miBigInt2)
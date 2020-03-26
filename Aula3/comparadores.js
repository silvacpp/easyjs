//COMPARADORES
// MAIOR     >
// Menor     <
// Maior ou igual  >=
// Menor ou igual <=
// Igual  ==
// Diferente !=



console.log('Comparacoes')
console.log('b > a', b > a)
console.log('b < a', b < a)
console.log('a == a ', a == a)
console.log('a == b ', a == b)
console.log('a != b', a != b)
console.log('a < b', a < b)
console.log('a <= a', a <= a)


var verdadeiro = true
var falso = false
// E  (&&)         Ou ( || )           Nao(!)
// 2Verdadeiras    1Verdadeiro         Negacao
console.log('E')
console.log(' V e V', verdadeiro && verdadeiro) // true
console.log(' V e F', verdadeiro && falso) // false
console.log(' F e V', falso && verdadeiro) // false
console.log(' F e F', falso && falso)  // false

console.log('OU')
console.log(' V ou V', verdadeiro || verdadeiro) // true
console.log(' V ou F', verdadeiro || falso) // false
console.log(' F ou V', falso || verdadeiro) // false
console.log(' F ou F', falso || falso)  // false

console.log('NEGACAO') // !
console.log(!verdadeiro) // false
console.log(!falso) // true

console.log('BUGANDO A MENTE')
console.log(!!!verdadeiro) // false
          //   false
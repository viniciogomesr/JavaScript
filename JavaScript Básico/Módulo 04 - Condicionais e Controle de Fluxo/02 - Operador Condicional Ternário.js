// Operador condicional ternário

let age = 16
console.log(
   age >= 18 // condição
   ? "Você pode dirigir." // se verdadeiro
   : "Você não pode dirigir." // se falso
)
// a expressão acima é dividida em 3 etapas (por isso ternário):
// a primeira etapa é a condição : (age >= 18 
// a segunda etapa é o que vai acontecer se a condição for verdadeira: ? "Você pode dirigir."
// a terceira etapa é o que vai acontecer se a condição for falsa: : "Você não pode dirigir."
// o sinal de "?" é o operador que indica o que deve acontecer se o resultado da condição for verdadeira.
// o sinal de ":" é o operador que indica o que deve acontecer se o resultado da condição for falsa.

// Invertendo a lógica:

console.log(age < 18 ? "Você não pode dirigir garotinho." : "Você pode dirigir meu patrão.")
/* 
   - Conversão de tipos (type casting ou type conversion):
   ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão
*/
let value = "9"
console.log(typeof value)
console.log(typeof Number(value))

let age = 18
console.log(typeof age)
console.log(typeof String(age))

let option = 1
console.log(typeof option)
console.log(typeof Boolean(option))
console.log(Boolean(option)) // se o valor foi >= ou <= 1 retorna true, se for 0 e apenas 0 retorna false.
option = 0
console.log(Boolean(option))

/*
   - Coersão de tipos:
   Acontece de forma automática (implicitamente). O JS tenta automáticamente converter um dos valores para um tipo compatível antes de realizar a operação.
*/

console.log("10" + 5) // retorna 105, porque o JS transforma o 5 em string e não soma, mas sim concatena, veja:
console.log(typeof ("10" + 5))
console.log(10 / "2") // aqui ele transforma o 2 em number, veja:
console.log(typeof (10 / "2")) // o console retorna number
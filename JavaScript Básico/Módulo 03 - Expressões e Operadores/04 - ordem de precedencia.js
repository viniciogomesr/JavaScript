// Ordem de precedência:
// Quando uma expressão tem multiplos operadores, na programação e na matemática, a ordem de precedência define qual operação será realizada primeiro.

/*
NÍVEL |   CATEGORIA      |  OPERADORES
7     | Exponênciação    |  **
6     | multiplicação    |  *, /, //, %
5     | adição/subtração |  +
4     | relacional       | ==, !=, <=, >=, <, >
3     | lógico           | not
2     | lógico           | and
1     | lógico           | or
*/

console.log(2 + 3 * 4)
// pelo senço comum de sequência, 2 + 3 = 5 * 4 = 20
// porém, o correto, devido a ordem de precedência é: 3 * 4 = 12 + 2 = 14
console.log((2 + 3) * 4)
// agora, ao aprender a questão da precedência, achamos que seria 3 * 4 e depois o resultado + 2, porém o 2 + 3 estão entre parênteses, por isso eles tem o maior nível de precedência, então neste caso faresmo primeiro a soma e depois a multiplicação;
// (2 + 3) = 5 * 4 = 20
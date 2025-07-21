// Undefined (indefinido) e null (vazio)

let emptiness // aqui o valor ainda não foi atribuído, por isso é indefinido
console.log("O valor é:", emptiness) 

let mundialDoPalmeiras = null // aqui o valor foi atribuído como vazio, não é indefinido (não sabemos ainda qual valor irá receber), já sabemos que o valor é vazio.
console.log("O valor é:", mundialDoPalmeiras)

// Exemplos:
let idade
console.log("Quantos anos você tem?")
// vamos supor que a pessoa respondeu 18
idade = 18
console.log(`Legal, você já tem ${idade} anos. Parabéns!`)

let userLogin = null
console.log(userLogin)
// depois do login:
userLogin = {
   nome: "Vinício",
   email: "vinicio@email.com"
}
console.log(userLogin)
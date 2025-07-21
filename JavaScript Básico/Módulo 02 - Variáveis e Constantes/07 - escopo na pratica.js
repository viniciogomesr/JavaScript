/* uso da variável antes da sua declaração. possível apenas com 'var', ele retorna undefined.

console.log(user)
var user = "Jesus"

Hoisting (o que acontece por debaixo dos panos no var):
ele pega a declaração (var user) e leva para o topo, em seguida ele executa o console.log(user), por isso ele retorna undefined, porque ele eleva só a declaração, não o seu valor atribuído.
ou seja, ao fazer a declaração exemplificada acima, o js interpreta desta forma:

   var user -> por isso retorna undefined
   console.log(user)
   user = "Jesus"
*/

/* 
Escopo de função (global):
var email = "joao@email.com"

Escopo de bloco:
{
   console.log(email)
} 
*/

/*
{
   let age = 18
}
console.log(age)
retornará erro porque a variável está "presa" no bloco
mas o contrário daria certo, pois a variável respeita a hierarquia e pode ser acessada dentro de um escopo de bloco:

let age = 18
{
   age = 19 -> inclusive é possível fazer reatribuição
   console.log(age)
}
*/

const nome = "Vinício"
console.log(`Meu nome é ${nome}`)
{
   const nome = "Samara"
   console.log(`O nome da minha noiva é ${nome}`)
   {
      const nome = "Eva"
      console.log(`Se tivermos uma filha menina, o nome dela será ${nome}.`)
      {
         const nome = "Arthur"
         console.log(`Se for menino, pensamos em ${nome}, por causa do protagonista do jogo Red Dead Redemption 2 (confesso que a escolha é mais minha que dela aqui).`)
      }
   }
}
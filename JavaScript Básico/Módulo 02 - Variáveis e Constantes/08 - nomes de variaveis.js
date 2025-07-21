// Javascript é case sensitive, logo
let username = "Rodrigo"
let userName = "Marcos"

console.log(username)
console.log(userName)
// username é diferente de userName.

// Podemos usar caractéres especiais e acentuações:
let _email = "joao@email.com"
let $email = "jose@email.com"
let Ação = "cadastrar"
let user_email = "pedro@email.com"

console.log(_email)
console.log($email)
console.log(Ação)
console.log(user_email)

/* 
Não podemos:
let 1user = "Primeiro Colocado" -> usar números para iniciar o nome da variável (causa erro)
let product name = "Mouse" -> dar espaço nos nomes de variáveis
*/

// RECOMENDAÇÕES:
// 1ª escrever os nomes de variáveis em inglês:
let register = "Cadastrar"
console.log(register)

// 2ª evitar acentuação.
// 3ª não dê nomes genéricos as variáveis, quanto mais específico, melhor.
let mousegamer = "Logitech G305"
console.log(mousegamer)

// 4ª recomendação camelCase (remete a corcunda do camêlo, e essa concurda no texto é escrever a primeira palavra toda minúscula e a primeira letra da segunda paalavra ser maiúscula)
let mechanicalKeyboard = "Akko 3068s"
console.log(mechanicalKeyboard)

// 5ª recomendação snake_case (escreve tudo em minúsculo e separa as palavras com o uso do underline)
let first_name = "Vinício"
let middle_name = "Gomes"
let last_name = "Rodrigues"
let full_name = (`${first_name} ${middle_name} ${last_name}`)
console.log(full_name)
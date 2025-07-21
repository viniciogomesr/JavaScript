/*
Hoisting - (levantar ou içar) se refere ao comportamento do interpretador de mover as declarações de variáveis e funções para o topo do escopo em que foram definidas, antes mesmo da execução do código. (então é possível usar uma variável antes dela ser declarada, isso não acontece com outras linguagens)

esse comportamento possibilita usar uma variável ou função antes que ela esteja definida.
(isso quer dizer que ele faz isso quando o js é interpretado, antes de ser executado.)

Hoisting de variáveis - todas as declarações de variáveis são movidas para o topo do seu escopo independentemente de onde tenha sido declarada, ela estará disponível para uso em todo o escopo em que foi definida.

IMPORTANTE - mesmo que as declarações de variáveis sejam movidas para o topo do escopo, elas ainda precisam ser declaradas antes de serem utilizadas. Caso contrário, você receberá uma referência indefinida (undefined).

todas as declarações de funções também são movidas para o topo do escopo. isso significa que você consegue chamar uma função antes mesmo de declará-la.
essa característica do JS permite que você organize seu código de forma mais intuitiva, definindo as funções em qualquer ordem que desejar.
*/
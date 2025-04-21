//functions devem ser definidas por verbo + Substantivo

/*resetCor
alterarObejto
*/

let CorSite = "Azul";
function resetaCor(cor, tonalidade){
    CorSite = cor + ' ' + tonalidade;
};

console.log(CorSite);
resetaCor('Amarelo','escuro');
console.log(CorSite);


let familiaAtual = ['André','Mírian','Ária'];
let familiaNova = ['André','Mírian','Ária','Davi']; 

    function mudarFamilia(novosMembros){
        familiaAtual = novosMembros
    };

console.log(familiaAtual);
mudarFamilia(familiaNova);
console.log(familiaAtual);
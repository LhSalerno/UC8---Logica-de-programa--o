/*nome peça*/

var pecas = ['pneu', 'óleo', 'ar']

    for (var index = 0; index < pecas.length; index++){
    console.log (' a peça na posição' + index + ' é o ' + pecas [index])

    var textoVetor = pecas [index]

    if (textoVetor.length <3){
        console.log(pecas [index] + ' : nome da peça é invalido ')

         }else{
            console.log(pecas [index] + ' : Cadastro concluido')
        }
}
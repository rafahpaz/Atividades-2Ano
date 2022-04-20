const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Cotonete':
            console.log('Opção selecionada é Cotonete')
            resultado.innerHTML = "Higiene pessoal"
            break;
        case 'Maça':
            console.log('Opção selecionada é Maça')
            resultado.innerHTML = "Alimento perecível"
            break
        case 'Arroz':
            console.log('Opção selecionada é Arroz')
            resultado.innerHTML = "Alimento não-perecível"
            break;
        case 'açúcar':
            console.log('Opção selecionada é açúcar')
            resultado.innerHTML = "Alimento não-perecível"
            break;
        case 'Moletom':
            console.log('Opção selecionada é Moletom')
            resultado.innerHTML = "Vestuário"
            break;
        case 'Detergente':
            console.log('Opção selecionada é Detergente')
            resultado.innerHTML = "Limpeza e utensílios domésticos"
            break;
    }
}
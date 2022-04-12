const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Arroz Carreteiro':
            console.log('Opção selecionada é Arroz Carreteiro')
            resultado.innerHTML = "Comida tipica feita pelos Gaúchos!"
            break;
        case 'Caruru':
            console.log('Opção selecionada é Caruru')
            resultado.innerHTML = "Essa comida é da região Norte do Brasil!"
            break
        case 'Pizza':
            console.log('Opção selecionada é Pizza')
            resultado.innerHTML = "A pizza não é do Brasil, foi criada pela Itália!"
            break;
        case 'Baião de Dois':
            console.log('Opção selecionada é Baião de Dois')
            resultado.innerHTML = "Comida tipica da região nordestina!"
            break;
        case 'Mujica de Peixe':
            console.log('Opção selecionada é Mujica de Peixe')
            resultado.innerHTML = "Essa comida é da região Norte do Brasil!"
            break;
        case 'Sopa paraguaia':
            console.log('Opção selecionada é Sopa paraguaia')
            resultado.innerHTML = "Essa comida é da região Centro-oeste do Brasil!"
            break;
        case 'Feijão tropeiro':
            console.log('Opção selecionada é Feijão tropeiro')
            resultado.innerHTML = "Essa comida é da região Sudeste do Brasil!"
            break;
        case 'Moules Frites':
            console.log('Opção selecionada é Moules Frites')
            resultado.innerHTML = "Aclamado como paixão nacional da Bélgica, esta comida não é tipica do Brasil!"
            break;
        case 'Torta do Pastor':
            console.log('Opção selecionada é Torta do Pastor')
            resultado.innerHTML = "Esta comida não é da região do Brasil, ela foi criada na Irlanda!!"
            break;
        default:
            console.log('Opção inválida!');
            resultado.innerHTML = "Opção inválida"
            break;
    }
}
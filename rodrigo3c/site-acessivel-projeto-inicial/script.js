documento.addEventListener('DOMContentLoaded', função () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    })
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste')

    



    deixe tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuirFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    alternaContraste.addEventListener('clique', função(){
        document.body.classList.toggle('alto-contraste')
})

ScrollReveal().reveal('#inicio', { atraso: 500 });
ScrollReveal().reveal('#tropicalia', { atraso: 500 });
ScrollReveal().reveal('#galeria', { atraso: 500 });
ScrollReveal().reveal('#contato', { atraso: 500 });
})

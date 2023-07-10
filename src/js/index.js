// O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

//  OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//  passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
//  passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
//  passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

//  OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
//  passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
//  passo 2 - alterar a imagem do personagem grande
//  passo 3 - alterar o nome do personagem grande
//  passo 4 - alterar a descrição do personagem grande

// Aqui vc pega todos os personagens do HTML e tranforma em uma lista / array.
const personagens = document.querySelectorAll('.personagem'); 

// Usar o forEach para percorrer cada item da lista e depois add um evento nele, dentro do evento add uma classe na tag do personagem em que o mouse passar.
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();

        // aqui add a classe novamente
        personagem.classList.add('selecionado');
        
        alterarImagemPersongagemSelecionado(personagem);
        
        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {

    // através do id da descrição do personagem, é trocado a descrição do personagem pegando um atributo usando a classe data.
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {

    // através do id do nome do personagem, é trocado o nome do personagem pegando um atributo usando a classe data.
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersongagemSelecionado(personagem) {

    // aqui vc pega o elemento do personagem pra add novas informações
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // através do id de cada personagem, é usado a interpolação pra contatenar uma string com uma variável, e assim trocar a imagem grande dos personagens conforme passa o mouse na lista de personagens.
    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {

    // aqui é criado uma nova váriavel para selecionar um item da lista que contém a classe .selecionado e remover ela da tag HTML.
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}


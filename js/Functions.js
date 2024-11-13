// Manipulação de objetos DOM (Document Object Model)
//Representação de dados dos objetos que compõem uma estutura 
// e o conteúdo de um documento web

//essencial para manipular e interagir com elementos de uma página
// Document.querySelector();

//Exemplo: 

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modifico'; // Modifica o texto do elemento 

// Uso Principal: Buscar e modificar elementos HTML 

//Document.createElement()
//Cria novos elementos dinamicamente

//Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Coisa adicionada'
document.body.appendChild(novoElemento);

//Uso principal: Adicionar novos elementos ao DOM 

// addEventListener()
//Funções que lidam com interações dos usuários
// Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert('otario HAHAHAHAHAHAHAH');
}
);

//Uso principal: Criar interatividade, como cliques ou movimentos do mouse

// setTimeout();
// Controlam ações que ocorrem em intervalos ou apos um tempo 
// Executa uma função apos um periodo de tempo (unidade de medida = milisegundos)

setTimeout(() =>{
    alert.log('executando em 5 segundos');
},5000);

//Uso principal: Atrasar execuções ou criar temporizadores

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Função Lista de amigos 
let amigos = [];

//Adicionar amigos
function adicionarAmigo() {
    const amigoInput = document.getElementById('nomeAmigo');
    const nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo === ' ') {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);        
    }
}

//Função para sortear amigos
 function sortearAmigo() {
    const botaoResultado = document.getElementById('amigoAleatorio');

    //verificar se tem amigo disponivel
    if (amigos.length === 0) {
        botaoResultado.innerHTML = 'Nenhum amigo disponivel para sortear.';
        return
    }
 }

// Gera um índice aleatório
const randomIndex = Math.floor(Math.random() * amigos.length);
    
// Obtém o nome sorteado
const amigoAleatorio = amigos[randomIndex];

// Mostra o resultado
botaoResultado.innerHTML = `Amigo sorteado: ${amigoAleatorio}`;

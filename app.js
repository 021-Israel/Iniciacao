//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Função Lista de amigos 
let arrayAmigos = [];
const resultadoSorteio = document.getElementById("amigoAleatorio");

//Adicionar amigos
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo").value.trim();
    if (amigoInput === "") {
        alert("Por favor, insira um nome.");
        return
    } else {
        arrayAmigos.push(amigoInput);
        console.log(arrayAmigos);
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = `$(arrayAmigos)`  
    }
}

//Função para sortear amigos
 function sortearAmigo() {
     //verificar se tem amigo disponivel
    if (arrayAmigos.length === 0) {
        botaoResultado.innerHTML = 'Nenhum amigo disponivel para sortear.';
        return
    }
    const botaoResultado = document.getElementById('amigoAleatorio');

   
 }

// Gera um índice aleatório
const randomIndex = Math.floor(Math.random() * amigos.length);
    
// Obtém o nome sorteado
const amigoAleatorio = amigos[randomIndex];

// Mostra o resultado
botaoResultado.innerHTML = `Amigo sorteado: ${amigoAleatorio}`;
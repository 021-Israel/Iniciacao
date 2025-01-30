// Variáveis
let arrayAmigos = [];
const resultadoSorteio = document.getElementById("amigoAleatorio");

// Função para adicionar amigos
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo").value.trim();
    if (amigoInput === "") {
        alert("Por favor, insira um nome.");
        return;
    } else {
        arrayAmigos.push(amigoInput);
        console.log(arrayAmigos);

        // Atualiza a lista de amigos na tela
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpa a lista antes de atualizar
        arrayAmigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });

        // Limpa o campo de input após adicionar
        document.getElementById("amigo").value = "";
    }
}

// Função para sortear amigo
function sortearAmigo() {
    // Verifica se há amigos disponíveis para sortear
    if (arrayAmigos.length === 0) {
        resultadoSorteio.innerHTML = 'Nenhum amigo disponível para sortear.';
        return;
    }

    // Sorteia um amigo aleatório
    const randomIndex = Math.floor(Math.random() * arrayAmigos.length);
    const amigoAleatorio = arrayAmigos[randomIndex];

    // Exibe o resultado do sorteio
    resultadoSorteio.innerHTML = `Amigo sorteado: ${amigoAleatorio}`;
}

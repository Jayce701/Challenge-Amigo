let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.classList.add("remove-button");
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigoSecreto() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para o sorteio.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let indiceSorteado;
        do {
            indiceSorteado = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indiceSorteado] === amigos[i]);
        
        resultado.push(`${amigos[i]} → ${sorteio[indiceSorteado]}`);
        sorteio.splice(indiceSorteado, 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}

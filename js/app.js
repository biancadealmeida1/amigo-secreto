let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value; 

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert('Por favor, insira um nome que ainda não foi adicionado!');
        return;
    }

    let campoListaAmigos = document.getElementById("lista-amigos"); 
    listaAmigos.push(nomeAmigo); 
    campoListaAmigos.textContent = listaAmigos.join(", "); 
    document.getElementById("nome-amigo").value = ""; 
    atualizarLista();
    atualizarSorteio();
}

function sortear() {

    if (listaAmigos.length < 4) {
        alert('Por favor, adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(listaAmigos); 
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] +' --> ' + listaAmigos[0] + '<br/>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] +' --> ' + listaAmigos[i + 1] + '<br/>';
        }
    }
}

function excluirAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) { 
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}

function atualizarLista() {
    let campoListaAmigos = document.getElementById('lista-amigos');
    campoListaAmigos.innerHTML = '';


    for (let i = 0; i < listaAmigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaAmigos[i];
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        campoListaAmigos.appendChild(paragrafo);
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
const usuarios = [
    { nome: 'Ana', idade: 25, cpf: '123.456.789-00' },
    { nome: 'Carla', idade: 30, cpf: '987.654.321-00' },
    { nome: 'Trísia', idade: 28, cpf: '456.789.123-00' }
];

const listaUsuariosElement = document.createElement('ul');
document.body.appendChild(listaUsuariosElement);

for (let usuario of usuarios) {
    inserirUsuarioNaLista(usuario);
}

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');
    const usuario = {
        nome: inputNomeElement.value,
        idade: inputIdadeElement.value,
        cpf: inputCpfElement.value
    };
    inserirUsuarioNaLista(usuario);
}

function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = 'Nome: ' + usuario.nome + ' Idade: ' + usuario.idade + ' Cpf: ' + usuario.cpf;

    spanElement.addEventListener('click', event => {
        const inputElement = document.createElement('input');
        inputElement.value = usuario.nome;
        const inputIdadeElement = document.createElement('input');
        inputIdadeElement.value = usuario.idade;
        const inputCpfElement = document.createElement('input');
        inputCpfElement.value = usuario.cpf;
        liElement.appendChild(inputElement);
        liElement.appendChild(inputIdadeElement);
        liElement.appendChild(inputCpfElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaUsuariosElement.appendChild(liElement);
}
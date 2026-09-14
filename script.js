// ==============================
// SUMMER GIRL - CARRINHO
// ==============================

// Lista de produtos da loja
const produtos = [
    {
        nome: "Biquíni Summer",
        preco: 89.90
    },
    {
        nome: "Saída de Praia",
        preco: 119.90
    },
    {
        nome: "Bolsa Summer",
        preco: 79.90
    },
    {
        nome: "Óculos de Sol",
        preco: 59.90
    }
];


// Carrinho começa vazio
let carrinho = [];


// ==============================
// MOSTRAR OS PRODUTOS
// ==============================

const body = document.body;

const areaProdutos = document.createElement("section");

areaProdutos.id = "produtos";

areaProdutos.innerHTML = `
    <h2>Nossos produtos 🌸</h2>
`;


// Criar cada produto na página
produtos.forEach(function(produto, indice) {

    const card = document.createElement("div");

    card.className = "produto";

    card.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>

        <button onclick="adicionarAoCarrinho(${indice})">
            Adicionar ao carrinho 🛍️
        </button>
    `;

    areaProdutos.appendChild(card);

});


// Colocar os produtos no final da página
body.appendChild(areaProdutos);


// ==============================
// ADICIONAR AO CARRINHO
// ==============================

function adicionarAoCarrinho(indice) {

    const produto = produtos[indice];

    carrinho.push(produto);

    alert(produto.nome + " foi adicionado ao carrinho! 💗");

    console.log(carrinho);

}

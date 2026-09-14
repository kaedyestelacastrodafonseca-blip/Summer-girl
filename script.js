// ========================================
// SUMMER GIRL - JAVASCRIPT
// ========================================

// Pegamos o ícone do carrinho que existe no HTML
const carrinho = document.getElementById("carrinho");

// Verificamos se o carrinho existe antes de adicionar o evento
if (carrinho) {

    carrinho.addEventListener("click", function () {

        alert("Seu carrinho está vazio 🛍️💗");

    });

}


// ========================================
// CARRINHO DE COMPRAS
// ========================================

// Lista onde vamos guardar os produtos
let produtosNoCarrinho = [];


// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {

    const produto = {
        nome: nome,
        preco: preco
    };

    produtosNoCarrinho.push(produto);

    console.log("Produto adicionado:", produto);

}


// Função para mostrar os produtos no carrinho
function mostrarCarrinho() {

    console.log("Produtos no carrinho:");

    console.log(produtosNoCarrinho);

}


// ========================================
// TESTE
// ========================================

console.log("JavaScript da Summer Girl funcionando! 💗");

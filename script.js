const botaoCarrinho = document.getElementById("carrinho");
if (botaocarrinho) {

const carrinho = document.createElement("div");

carrinho.innerHTML = `
    <h2>Meu carrinho 🛍️</h2>

    <div id="itensCarrinho">
        <p>Seu carrinho está vazio.</p>
    </div>

    <p id="totalCarrinho">Total: R$ 0,00</p>

    <button id="fecharCarrinho">Fechar</button>
`;

carrinho.style.position = "fixed";
carrinho.style.top = "80px";
carrinho.style.right = "20px";
carrinho.style.background = "white";
carrinho.style.padding = "20px";
carrinho.style.borderRadius = "15px";
carrinho.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
carrinho.style.zIndex = "9999";
carrinho.style.display = "none";

document.body.appendChild(carrinho);


// CONTADOR
let quantidadeCarrinho = 0;

const contador = document.createElement("span");

contador.id = "contador-carrinho";
contador.textContent = quantidadeCarrinho;

contador.style.marginLeft = "4px";
contador.style.fontWeight = "bold";

botaoCarrinho.appendChild(contador);


// ABRIR CARRINHO
botaoCarrinho.onclick = function() {
    carrinho.style.display = "block";
};


// FECHAR CARRINHO
document.getElementById("fecharCarrinho").onclick = function() {
    carrinho.style.display = "none";
};


// PRODUTOS
const botoesAdicionar = document.querySelectorAll(".btn-carrinho");

botoesAdicionar.forEach(function(botao) {

    botao.onclick = function() {

        const produto = botao.closest(".produto-card");

        const nome = produto.querySelector("h3").textContent;
        const precoTexto = produto.querySelector(".preco").textContent;

        const preco = parseFloat(
            precoTexto
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
        );

        quantidadeCarrinho++;

        contador.textContent = quantidadeCarrinho;

        const itensCarrinho = document.getElementById("itensCarrinho");

        if (quantidadeCarrinho === 1) {
            itensCarrinho.innerHTML = "";
        }

        const item = document.createElement("p");

        item.textContent = `${nome} - ${precoTexto}`;

        itensCarrinho.appendChild(item);

        atualizarTotal();
    };
});


// TOTAL
let total = 0;

function atualizarTotal() {

    total = 0;

    const itens = document.querySelectorAll("#itensCarrinho p");

    itens.forEach(function(item) {

        const texto = item.textContent;

        const precoTexto = texto.split(" - R$ ")[1];

        if (precoTexto) {

            const preco = parseFloat(
                precoTexto
                    .replace(".", "")
                    .replace(",", ".")
            );

            total += preco;
        }
    });

    document.getElementById("totalCarrinho").textContent =
        `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
}
}

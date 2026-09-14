document.addEventListener("DOMContentLoaded", function () {

    const botaoCarrinho = document.getElementById("carrinho");

    const carrinho = document.createElement("div");

    carrinho.id = "carrinho-menu";

    carrinho.innerHTML = `
        <h2>Meu carrinho 🛍️</h2>
        <p>Seu carrinho está vazio.</p>
        <button id="fechar-carrinho">Fechar</button>
    `;

    document.body.appendChild(carrinho);

    carrinho.style.display = "none";

    botaoCarrinho.addEventListener("click", function () {
        carrinho.style.display = "block";
    });

    document.getElementById("fechar-carrinho").addEventListener("click", function () {
        carrinho.style.display = "none";
    });

});

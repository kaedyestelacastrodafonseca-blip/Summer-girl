document.addEventListener("DOMContentLoaded", function () {

    const carrinhoBotao = document.getElementById("carrinho");

    if (!carrinhoBotao) {
        alert("Não encontrei o botão do carrinho.");
        return;
    }

    const carrinho = document.createElement("div");

    carrinho.id = "carrinho-menu";

    carrinho.innerHTML = `
        <h2>Meu carrinho 🛍️</h2>
        <p>Seu carrinho está vazio.</p>
        <button id="fechar-carrinho">Fechar</button>
    `;

    carrinho.style.display = "none";

    document.body.appendChild(carrinho);

    carrinhoBotao.addEventListener("click", function () {
        carrinho.style.display = "block";
    });

    document
        .getElementById("fechar-carrinho")
        .addEventListener("click", function () {
            carrinho.style.display = "none";
        });

});

const botaoCarrinho = document.getElementById("carrinho");

const carrinho = document.createElement("div");

carrinho.innerHTML = `
    <h2>Meu carrinho 🛍️</h2>
    <p>Seu carrinho está vazio.</p>
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

botaoCarrinho.onclick = function() {
    carrinho.style.display = "block";
};

document.getElementById("fecharCarrinho").onclick = function() {
    carrinho.style.display = "none";
};

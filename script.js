// ==========================================
// SUMMER GIRL - CARRINHO
// ==========================================

// Pegamos o ícone do carrinho no HTML
const carrinhoBotao = document.getElementById("carrinho");

// Criamos a área do carrinho
const carrinho = document.createElement("div");

carrinho.id = "carrinho-menu";

carrinho.innerHTML = `
    <div>
        <h2>Meu carrinho 🛍️</h2>

        <p>Seu carrinho está vazio.</p>

        <button id="fechar-carrinho">
            Fechar
        </button>
    </div>
`;

// Colocamos o carrinho na página
document.body.appendChild(carrinho);


// ==========================================
// ABRIR O CARRINHO
// ==========================================

carrinhoBotao.addEventListener("click", function() {

    carrinho.style.display = "block";

});


// ==========================================
// FECHAR O CARRINHO
// ==========================================

const fecharCarrinho = document.getElementById("fechar-carrinho");

fecharCarrinho.addEventListener("click", function() {

    carrinho.style.display = "none";

});


// ==========================================
// CARRINHO COMEÇA FECHADO
// ==========================================

carrinho.style.display = "none";

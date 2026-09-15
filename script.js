document.addEventListener("DOMContentLoaded", function () {

    const botaoCarrinho = document.getElementById("carrinho");

    if (!botaoCarrinho) {
        return;
    }

    const carrinho = document.createElement("div");

    carrinho.innerHTML = `
        <div id="cabecalhoCarrinho">
            <h2>Meu carrinho 🛍️</h2>
            <button id="fecharCarrinho">×</button>
        </div>

        <div id="itensCarrinho">
            <p id="carrinhoVazio">Seu carrinho está vazio 🌸</p>
        </div>

        <div id="rodapeCarrinho">
            <p id="totalCarrinho">Total: R$ 0,00</p>
        </div>
    `;

    carrinho.style.position = "fixed";
    carrinho.style.top = "80px";
    carrinho.style.right = "20px";
    carrinho.style.width = "330px";
    carrinho.style.maxWidth = "calc(100% - 40px)";
    carrinho.style.maxHeight = "70vh";
    carrinho.style.overflowY = "auto";
    carrinho.style.background = "#fff8fa";
    carrinho.style.padding = "20px";
    carrinho.style.borderRadius = "20px";
    carrinho.style.boxShadow = "0 8px 30px rgba(0,0,0,0.18)";
    carrinho.style.zIndex = "9999";
    carrinho.style.display = "none";
    carrinho.style.fontFamily = "Arial, sans-serif";

    document.body.appendChild(carrinho);


    /* TÍTULO */
    const cabecalho = document.getElementById("cabecalhoCarrinho");

    cabecalho.style.display = "flex";
    cabecalho.style.justifyContent = "space-between";
    cabecalho.style.alignItems = "center";
    cabecalho.style.marginBottom = "15px";

    cabecalho.querySelector("h2").style.margin = "0";
    cabecalho.querySelector("h2").style.color = "#d95c82";


    /* BOTÃO FECHAR */
    const fechar = document.getElementById("fecharCarrinho");

    fechar.style.border = "none";
    fechar.style.background = "none";
    fechar.style.fontSize = "28px";
    fechar.style.cursor = "pointer";
    fechar.style.color = "#d95c82";


    /* CONTADOR */
    let quantidadeCarrinho = 0;

    const contador = document.createElement("span");

    contador.id = "contador-carrinho";
    contador.textContent = quantidadeCarrinho;

    contador.style.marginLeft = "4px";
    contador.style.fontWeight = "bold";
    contador.style.color = "#d95c82";

    botaoCarrinho.appendChild(contador);


    /* ABRIR */
    botaoCarrinho.onclick = function () {
        carrinho.style.display = "block";
    };


    /* FECHAR */
    fechar.onclick = function () {
        carrinho.style.display = "none";
    };


    /* PRODUTOS */
    const botoesAdicionar = document.querySelectorAll(".btn-carrinho");

    botoesAdicionar.forEach(function (botao) {

        botao.onclick = function () {

            const produto = botao.closest(".produto-card");

            const nome = produto.querySelector("h3").textContent;
            const precoTexto = produto.querySelector(".preco").textContent;

            quantidadeCarrinho++;

            contador.textContent = quantidadeCarrinho;

            const itensCarrinho = document.getElementById("itensCarrinho");

            const carrinhoVazio = document.getElementById("carrinhoVazio");

            if (quantidadeCarrinho === 1 && carrinhoVazio) {
                carrinhoVazio.remove();
            }


            /* CRIA O ITEM */
            const item = document.createElement("div");

            item.style.background = "white";
            item.style.padding = "12px";
            item.style.marginBottom = "10px";
            item.style.borderRadius = "12px";
            item.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";

            item.innerHTML = `
                <strong style="color:#555;">${nome}</strong>
                <br>
                <span style="color:#d95c82; font-weight:bold;">
                    ${precoTexto}
                </span>
            `;

            itensCarrinho.appendChild(item);

            atualizarTotal();
        };
    });


    /* TOTAL */
    let total = 0;

    function atualizarTotal() {

        total = 0;

        const itens = document.querySelectorAll("#itensCarrinho > div");

        itens.forEach(function (item) {

            const texto = item.textContent;

            const precoEncontrado = texto.match(/R\$\s*([\d.,]+)/);

            if (precoEncontrado) {

                const preco = parseFloat(
                    precoEncontrado[1]
                        .replace(".", "")
                        .replace(",", ".")
                );

                total += preco;
            }
        });

        document.getElementById("totalCarrinho").textContent =
            `Total: R$ ${total.toFixed(2).replace(".", ",")}`;

        document.getElementById("totalCarrinho").style.color = "#d95c82";
        document.getElementById("totalCarrinho").style.fontWeight = "bold";
        document.getElementById("totalCarrinho").style.fontSize = "18px";
        document.getElementById("totalCarrinho").style.marginTop = "15px";
    }

});

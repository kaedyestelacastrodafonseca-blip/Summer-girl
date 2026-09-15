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

// LOGIN
const botaoLogin = document.querySelector(".icones span:nth-child(2)");

if (botaoLogin) {

    const telaLogin = document.createElement("div");

    telaLogin.innerHTML = `
        <div id="caixaLogin">
            <button id="fecharLogin">×</button>

            <h2>Bem-vinda à Summer Girl 🌸</h2>
            <p>Entre na sua conta</p>

            <input type="email" id="emailLogin" placeholder="Seu e-mail">

            <input type="password" id="senhaLogin" placeholder="Sua senha">

            <button id="entrarLogin">Entrar</button>
        </div>
    `;

    telaLogin.style.position = "fixed";
    telaLogin.style.top = "0";
    telaLogin.style.left = "0";
    telaLogin.style.width = "100%";
    telaLogin.style.height = "100%";
    telaLogin.style.background = "rgba(0, 0, 0, 0.35)";
    telaLogin.style.display = "none";
    telaLogin.style.justifyContent = "center";
    telaLogin.style.alignItems = "center";
    telaLogin.style.zIndex = "10000";

    document.body.appendChild(telaLogin);


    // CAIXA DO LOGIN
    const caixaLogin = document.getElementById("caixaLogin");

    caixaLogin.style.background = "#fff8fa";
    caixaLogin.style.padding = "30px";
    caixaLogin.style.borderRadius = "20px";
    caixaLogin.style.width = "320px";
    caixaLogin.style.maxWidth = "80%";
    caixaLogin.style.textAlign = "center";
    caixaLogin.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";


    // TÍTULO
    caixaLogin.querySelector("h2").style.color = "#d95c82";
    caixaLogin.querySelector("h2").style.marginBottom = "5px";


    // CAMPOS
    const campos = caixaLogin.querySelectorAll("input");

    campos.forEach(function(campo) {
        campo.style.width = "100%";
        campo.style.boxSizing = "border-box";
        campo.style.padding = "12px";
        campo.style.marginTop = "10px";
        campo.style.border = "1px solid #f0b6c8";
        campo.style.borderRadius = "10px";
        campo.style.outline = "none";
    });


    // BOTÃO ENTRAR
    const entrar = document.getElementById("entrarLogin");

    entrar.style.width = "100%";
    entrar.style.padding = "12px";
    entrar.style.marginTop = "15px";
    entrar.style.border = "none";
    entrar.style.borderRadius = "10px";
    entrar.style.background = "#d95c82";
    entrar.style.color = "white";
    entrar.style.fontWeight = "bold";
    entrar.style.cursor = "pointer";


    // BOTÃO FECHAR
    const fecharLogin = document.getElementById("fecharLogin");

    fecharLogin.style.position = "absolute";
    fecharLogin.style.marginLeft = "130px";
    fecharLogin.style.marginTop = "-20px";
    fecharLogin.style.border = "none";
    fecharLogin.style.background = "none";
    fecharLogin.style.fontSize = "28px";
    fecharLogin.style.color = "#d95c82";
    fecharLogin.style.cursor = "pointer";


    // ABRIR LOGIN
    botaoLogin.onclick = function() {
        telaLogin.style.display = "flex";
    };


    // FECHAR LOGIN
    fecharLogin.onclick = function() {
        telaLogin.style.display = "none";
    };

}

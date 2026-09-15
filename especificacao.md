# Especificação do Projeto — Summer Girl

## 1. Descrição do Projeto

O Summer Girl é um projeto de desenvolvimento web para uma loja virtual voltada para produtos e acessórios relacionados ao verão.

O sistema terá uma interface moderna, intuitiva e responsiva, permitindo que os usuários visualizem produtos, conheçam as coleções disponíveis e tenham acesso às informações da loja.

O projeto será desenvolvido utilizando HTML5, CSS3, JavaScript e PHP, com integração a um banco de dados relacional nas etapas posteriores.

---

## 2. Objetivo

O objetivo do projeto é desenvolver uma aplicação web de comércio eletrônico que apresente produtos de forma organizada e ofereça uma experiência simples e agradável para o usuário.

O sistema deverá permitir a visualização, cadastro, alteração e remoção de registros, além de possuir autenticação de usuários e armazenamento dos dados em banco de dados.

---

## 3. Requisitos Funcionais

### RF01 — Cadastro de usuário

O sistema deverá permitir que novos usuários realizem seu cadastro informando os dados solicitados.

### RF02 — Autenticação de usuário

O sistema deverá permitir que usuários cadastrados realizem login para acessar funcionalidades que necessitem de autenticação.

### RF03 — Visualização de produtos

O sistema deverá permitir que o usuário visualize os produtos disponíveis na loja.

### RF04 — Visualização dos detalhes do produto

O sistema deverá permitir que o usuário visualize informações detalhadas de cada produto.

### RF05 — Cadastro de produtos

O sistema deverá permitir o cadastro de novos produtos.

### RF06 — Alteração de produtos

O sistema deverá permitir a alteração das informações de produtos cadastrados.

### RF07 — Remoção de produtos

O sistema deverá permitir a remoção de produtos cadastrados.

### RF08 — Persistência de dados

O sistema deverá armazenar os registros em um banco de dados relacional.

### RF09 — Interface responsiva

O sistema deverá apresentar uma interface adaptável a diferentes tamanhos de tela e dispositivos.

---

## 4. Requisitos Não Funcionais

### RNF01 — Usabilidade

A interface deverá ser simples, intuitiva e fácil de utilizar.

### RNF02 — Responsividade

O sistema deverá funcionar adequadamente em computadores, tablets e celulares.

### RNF03 — Segurança

As informações de usuários deverão ser protegidas e as funcionalidades administrativas deverão possuir controle de acesso.

### RNF04 — Desempenho

As páginas deverão carregar de forma eficiente, evitando elementos desnecessários que possam prejudicar o desempenho.

### RNF05 — Manutenibilidade

O código deverá ser organizado para facilitar futuras alterações e melhorias no sistema.

---

## 5. Regras de Negócio

### RN01

Cada usuário deverá possuir um e-mail único no sistema.

### RN02

O cadastro de usuário deverá possuir os campos obrigatórios definidos pelo sistema.

### RN03

Somente usuários autenticados poderão acessar funcionalidades administrativas.

### RN04

Todo produto deverá possuir nome, preço, categoria e imagem.

### RN05

O preço de um produto deverá ser maior que zero.

### RN06

Produtos removidos não deverão ser exibidos na área de produtos disponíveis.

### RN07

Os dados cadastrados deverão ser armazenados no banco de dados.

---

## 6. Fluxo Principal

1. O usuário acessa o site Summer Girl.
2. O sistema apresenta a página inicial.
3. O usuário navega pelas categorias e produtos.
4. O usuário seleciona um produto.
5. O sistema apresenta os detalhes do produto.
6. Caso necessário, o usuário poderá realizar seu cadastro ou login.
7. Usuários autorizados poderão realizar operações administrativas.
8. As informações alteradas serão armazenadas no banco de dados.

---

## 7. Fluxos Alternativos

### FA01 — Usuário não cadastrado

Caso o usuário tente acessar uma funcionalidade que exija autenticação, o sistema deverá solicitar que ele realize o cadastro ou login.

### FA02 — Dados inválidos

Caso o usuário informe dados inválidos ou deixe campos obrigatórios vazios, o sistema deverá informar o erro e solicitar a correção.

### FA03 — Produto inexistente

Caso um produto não esteja disponível, o sistema deverá informar que o produto não foi encontrado.

### FA04 — Erro no cadastro

Caso ocorra algum problema durante o cadastro, o sistema deverá informar o usuário e não deverá concluir o registro até que os dados estejam corretos.

---

## 8. Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- PHP
- Banco de dados relacional
- Visual Studio Code
- Git e GitHub

---

## 9. Estrutura Inicial do Projeto

O projeto será organizado da seguinte forma:

- `index.html` — página principal do site.
- `css/style.css` — estilos e aparência da aplicação.
- `imagens/` — imagens utilizadas no projeto.
- `js/` — arquivos JavaScript.
- `especificacao.md` — documentação dos requisitos e regras do projeto.
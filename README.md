# Portfólio de Desenvolvedor Web

Este é um projeto de portfólio pessoal desenvolvido para demonstrar competências em desenvolvimento web front-end. O objetivo foi criar uma página de perfil profissional que seja moderna, interativa e totalmente responsiva, aplicando conceitos fundamentais e avançados de HTML5, CSS3 e JavaScript.

### 🔗 [Veja o projeto ao vivo aqui!](https://tenchini.github.io/atividade-4-maispraTi/)

![Screenshot do Portfólio](https://imgur.com/a/CX5AK9Z)

---

## ✨ Funcionalidades Principais

-   **Design Responsivo:** Layout que se adapta perfeitamente a desktops, tablets e dispositivos móveis.
-   **Seletor de Tema (Dark/Light):** Permite ao usuário alternar entre o modo escuro e claro. A preferência é salva no navegador (`localStorage`) para visitas futuras.
-   **Efeitos Interativos:** Transições suaves, efeitos de `hover` em links e botões, e um efeito _glitch_ animado na foto de perfil.
-   **Navegação Fixa e Suave:** O menu de navegação acompanha a rolagem da página e os links âncora possuem um scroll suave para as seções.
-   **Menu Hamburger:** Navegação otimizada para telas menores.

---

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Estruturação semântica do conteúdo.
-   **CSS3:** Estilização, layout com Flexbox, responsividade e animações.
-   **JavaScript (ES6+):** Manipulação do DOM para interatividade (menu hamburger e seletor de tema).
-   **Font Awesome:** Ícones vetoriais.
-   **Google Fonts:** Fonte personalizada (`Quicksand`).

---

## ✅ Checklist de Requisitos do Projeto

Este projeto foi desenvolvido para atender aos seguintes critérios:

### 1. Estrutura de Arquivos

-   [x] `perfil.html` na raiz do projeto.
-   [x] `styles.css` para a estilização.
-   [x] Pasta `assets` para imagens e outros recursos.

### 2. HTML5 Semântico

-   [x] **`<header>`**: Contém o logotipo e a navegação principal.
-   [x] **`<nav>`**: Menu de navegação com links âncora.
-   [x] **`<main>`**: Agrupa todo o conteúdo principal da página.
-   [x] **`<section>`**: Utilizada para dividir os blocos temáticos: Início (`hero-section`), Sobre, Habilidades, Projetos e Contato.
-   [x] **`<article>`**: Usada para encapsular cada projeto individualmente na seção de Projetos.
-   [x] **`<footer>`**: Rodapé com informações de direitos autorais.

### 3. CSS

-   [x] **Seletores:** O projeto utiliza uma combinação de seletores por elemento (`body`, `h1`), por classe (`.hero-content`) e por ID (`#theme-switcher`) para uma estilização precisa e organizada.
-   [x] **Layout:** A estrutura foi construída primariamente com **Flexbox** para alinhar e distribuir os elementos de forma flexível e responsiva.
-   [x] **Reset CSS:** Um reset básico foi aplicado no início do CSS (`* { margin: 0; padding: 0; box-sizing: border-box; }`) para garantir consistência entre navegadores.
-   [x] **Recursos Avançados:**
    -   **Variáveis CSS:** Utilizadas extensivamente (`:root { --cor-fundo: ... }`) para facilitar a manutenção e a implementação do tema dark/light.
    -   **Pseudo-classes:** Aplicadas para interatividade, como em `a:hover` e `button:focus-visible`.
    -   **Pseudo-elementos:** Essenciais no efeito _glitch_ da foto de perfil, que utiliza `::before` e `::after`.
-   [x] **Responsividade:** O design é totalmente responsivo, utilizando **Media Queries** para ajustar o layout, o tamanho das fontes e a navegação (introduzindo o menu hamburger) em diferentes larguras de tela.

---

## 🚀 Como Executar o Projeto Localmente

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd seu-repositorio
    ```
3.  Abra o arquivo `perfil.html` no seu navegador de preferência.

---

## Autor

**Vinicius Tenchini**

-   [GitHub](https://github.com/tenchini)
-   [LinkedIn](https://www.linkedin.com/in/viniciustenchini/)

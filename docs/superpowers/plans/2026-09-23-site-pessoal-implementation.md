# Site pessoal (Bárbara Sylos) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir o site pessoal de uma página de Bárbara Sylos (`index.html`, `style.css`, `script.js`), com tema claro/escuro, menu responsivo e rolagem suave.

**Architecture:** Três arquivos estáticos sem build: HTML semântico com âncoras por seção, CSS com variáveis de cor trocadas via atributo `data-theme` no `<html>`, e um `script.js` pequeno que só cuida de tema e do menu mobile (a rolagem suave é 100% CSS).

**Tech Stack:** HTML5, CSS3 (custom properties, media query, grid), JavaScript puro (DOM API, `localStorage`, `matchMedia`). Sem framework, sem npm, sem build.

**Spec:** `docs/superpowers/specs/2026-09-23-site-pessoal-design.md`

## Global Constraints

- Apenas HTML, CSS e JavaScript puros — sem framework, sem npm, sem etapa de build, sem `node_modules`.
- Exatamente três arquivos na raiz: `index.html`, `style.css`, `script.js`. Sem `README.md` nem arquivos de configuração.
- Todos os caminhos entre os três arquivos são relativos (`style.css`, `script.js`), nunca absolutos (`/style.css`).
- Identificadores de código (variáveis, funções, classes CSS, ids) em inglês; comentários e todo texto visível no site em português do Brasil.
- Projeto sem controle de versão (decisão da usuária) — nenhuma tarefa abaixo inclui passos de `git commit`.

## Review Focus

- Abrir `index.html` direto pelo sistema de arquivos (`file://`, duplo clique) sem erro 404 no console — confirma que os caminhos relativos para `style.css` e `script.js` estão corretos.
- Redimensionar a janela de desktop (menu aberto) para largura mobile e de volta para desktop não deve deixar o menu num estado quebrado (aberto e sobreposto, ou sumido).
- A escolha de tema feita pela usuária deve sobreviver a um F5 e a uma nova aba, e essa escolha manual deve ter prioridade sobre o `prefers-color-scheme` do sistema depois da primeira troca.
- Clicar em qualquer link do menu no modo mobile deve fechar o menu automaticamente, não só rolar até a seção.
- Copiar a pasta inteira do site para dentro de uma subpasta e abrir o `index.html` de lá deve continuar funcionando (CSS, JS e troca de tema) — confirma que nenhum caminho absoluto foi usado.

---

## Task 1: Estrutura e conteúdo (`index.html`)

**Files:**
- Create: `index.html`
- Create: `style.css` (arquivo vazio nesta tarefa, só para o link relativo não dar 404)
- Create: `script.js` (arquivo vazio nesta tarefa, mesmo motivo)

**Interfaces:**
- Produces (contrato de ids/classes que as próximas tarefas vão consumir):
  - `#menu-toggle` — botão hambúrguer (mobile)
  - `#nav-links` — `<ul>` com os links do menu, classe `.nav-links`; cada link tem classe `.nav-link`
  - `#theme-toggle` — botão de alternância de tema
  - Seções âncora: `#sobre`, `#projetos`, `#contato`
  - Cartões de projeto: `.cards` (contêiner) e `.card` (cada cartão)
  - CTA do topo: `.cta-button` (aponta para `#contato`)

- [ ] **Passo 1: Criar `index.html` com a estrutura e o conteúdo completos**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bárbara Sylos — Portfólio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <nav class="nav" id="nav">
      <button id="menu-toggle" class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-links">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <ul id="nav-links" class="nav-links">
        <li><a href="#sobre" class="nav-link">Sobre</a></li>
        <li><a href="#projetos" class="nav-link">Projetos</a></li>
        <li><a href="#contato" class="nav-link">Contato</a></li>
      </ul>
      <button id="theme-toggle" class="theme-toggle" aria-label="Alternar tema claro e escuro">🌙</button>
    </nav>

    <div class="hero">
      <h1 class="hero-name">Bárbara Sylos</h1>
      <p class="hero-tagline">Desenvolvedora criando soluções simples para problemas reais.</p>
      <a href="#contato" class="cta-button">Fale comigo</a>
    </div>
  </header>

  <main>
    <section id="sobre" class="section">
      <h2>Sobre</h2>
      <p>Sou Bárbara Sylos, desenvolvedora apaixonada por transformar ideias em software funcional e bem construído. Trabalho com atenção aos detalhes, buscando sempre entender o problema antes de escrever qualquer linha de código.</p>
      <p>Este portfólio reúne alguns dos projetos em que venho trabalhando. Fique à vontade para explorar os cartões abaixo e, se algo despertar seu interesse, entre em contato — terei prazer em conversar.</p>
    </section>

    <section id="projetos" class="section">
      <h2>Projetos</h2>
      <div class="cards">
        <article class="card">
          <h3>Projeto 1</h3>
          <p>Descrição breve do projeto, destacando o problema resolvido e as tecnologias usadas.</p>
          <a href="#" class="card-link">Ver projeto</a>
        </article>
        <article class="card">
          <h3>Projeto 2</h3>
          <p>Descrição breve do projeto, destacando o problema resolvido e as tecnologias usadas.</p>
          <a href="#" class="card-link">Ver projeto</a>
        </article>
        <article class="card">
          <h3>Projeto 3</h3>
          <p>Descrição breve do projeto, destacando o problema resolvido e as tecnologias usadas.</p>
          <a href="#" class="card-link">Ver projeto</a>
        </article>
      </div>
    </section>

    <section id="contato" class="section">
      <h2>Contato</h2>
      <p><a href="mailto:barbara.sylos@gmail.com">barbara.sylos@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/barbara-sylos" target="_blank" rel="noopener">linkedin.com/in/barbara-sylos</a></p>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Passo 2: Criar `style.css` e `script.js` vazios (stubs)**

Criar os dois arquivos na raiz do projeto, sem nenhum conteúdo por enquanto — só para os links relativos do `index.html` não gerarem erro 404.

- [ ] **Passo 3: Verificação manual no navegador**

Abrir `index.html` diretamente no navegador (duplo clique no arquivo, URL começando com `file://`, sem servidor).

Esperado:
- A página carrega sem erro 404 no console do navegador (F12 → aba Console/Rede) para `style.css` e `script.js`.
- O título da aba mostra "Bárbara Sylos — Portfólio".
- Aparecem, na ordem: menu (links Sobre/Projetos/Contato + botão de tema, sem estilo), nome "Bárbara Sylos", frase de apresentação, botão "Fale comigo", seção Sobre com dois parágrafos, três cartões de projeto (Projeto 1/2/3) e a seção Contato com os dois links.
- Clicar em "Sobre", "Projetos", "Contato" ou em "Fale comigo" leva à seção correta (sem rolagem suave ainda, pois o CSS está vazio — isso é esperado nesta tarefa).
- O link de e-mail abre o cliente de e-mail padrão para `barbara.sylos@gmail.com`; o link do LinkedIn abre `https://www.linkedin.com/in/barbara-sylos` em nova aba.

---

## Task 2: Estilo visual e responsividade (`style.css`)

**Files:**
- Modify: `style.css`

**Interfaces:**
- Consumes: ids/classes produzidos na Task 1 (`#menu-toggle`, `#nav-links`/`.nav-links`/`.nav-link`, `#theme-toggle`, `.hero`, `.hero-name`, `.hero-tagline`, `.cta-button`, `.section`, `.cards`, `.card`, `.card-link`).
- Produces: seletor de tema escuro `[data-theme="dark"]` no `<html>` (Task 3 vai definir esse atributo via JS); classe `.nav-links.is-open` que controla a visibilidade do menu mobile (Task 3 vai alternar essa classe via JS).

- [ ] **Passo 1: Escrever `style.css` completo**

```css
/* ===== Variáveis de cor (tema claro, padrão) ===== */
:root {
  --color-bg: #ffffff;
  --color-bg-alt: #f4f4f5;
  --color-text: #1a1a1a;
  --color-primary: #2563eb;
  --color-border: #e2e2e2;
}

/* Tema escuro: sobrescreve as variáveis quando <html data-theme="dark"> */
[data-theme="dark"] {
  --color-bg: #121212;
  --color-bg-alt: #1e1e1e;
  --color-text: #f2f2f2;
  --color-primary: #60a5fa;
  --color-border: #333333;
}

/* ===== Reset simples e base ===== */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth; /* rolagem suave ao clicar em links de âncora */
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* ===== Cabeçalho e barra de navegação ===== */
.header {
  position: relative; /* serve de referência para o menu mobile (position: absolute) */
  padding: 1rem 1.5rem 3rem;
  border-bottom: 1px solid var(--color-border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover {
  color: var(--color-primary);
}

/* Botão de alternância de tema */
.theme-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  width: 2.25rem;
  height: 2.25rem;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--color-text);
}

/* Botão hambúrguer: escondido no desktop, aparece só no mobile (media query abaixo) */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 2.25rem;
  height: 2.25rem;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
}

/* ===== Seção de introdução (hero) ===== */
.hero {
  max-width: 40rem;
  margin: 3rem auto 0;
  text-align: center;
}

.hero-name {
  font-size: 2.5rem;
  margin: 0 0 0.5rem;
}

.hero-tagline {
  font-size: 1.15rem;
  margin: 0 0 1.5rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: #ffffff;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
}

/* ===== Seções gerais ===== */
.section {
  max-width: 48rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* ===== Cartões de projeto ===== */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1.25rem;
}

.card-link {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}

/* ===== Responsivo: menu vira hambúrguer abaixo de 768px ===== */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* escondido até o botão hambúrguer abrir (classe is-open abaixo) */
    position: absolute;
    top: 4rem;
    left: 1rem;
    right: 1rem;
    flex-direction: column;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
    z-index: 10;
  }

  .nav-links.is-open {
    display: flex; /* classe adicionada/removida pelo script.js (Task 3) */
  }

  .menu-toggle {
    display: flex; /* só aparece no mobile */
  }
}
```

- [ ] **Passo 2: Verificação manual — layout desktop**

Abrir `index.html` no navegador com a janela larga (acima de 768px).

Esperado: menu horizontal com os três links e o botão de tema visíveis lado a lado; botão hambúrguer não aparece; cartões de projeto lado a lado (grid); cores do tema claro aplicadas (fundo branco, texto escuro, botão "Fale comigo" azul).

- [ ] **Passo 3: Verificação manual — layout mobile e classe `is-open`**

Redimensionar a janela do navegador para menos de 768px de largura (ou usar o modo de emulação mobile do DevTools).

Esperado: o menu horizontal desaparece e o botão hambúrguer (três risquinhos) aparece no lugar. Como o `script.js` ainda não existe (Task 3), simular manualmente pelo Console do DevTools: `document.getElementById('nav-links').classList.add('is-open')` deve fazer a lista de links aparecer como um menu suspenso abaixo do cabeçalho; `classList.remove('is-open')` deve escondê-la de novo.

- [ ] **Passo 4: Verificação manual — tema escuro via atributo**

No Console do DevTools, rodar `document.documentElement.setAttribute('data-theme', 'dark')`.

Esperado: fundo escuro, texto claro, botão "Fale comigo" e links de destaque em azul mais claro, cartões com fundo levemente diferente do fundo da página. Rodar `document.documentElement.removeAttribute('data-theme')` deve voltar ao tema claro.

- [ ] **Passo 5: Verificação manual — resize de mobile (aberto) para desktop e volta (Review Focus)**

Com a janela em largura mobile, adicionar a classe `is-open` como no Passo 3 (menu aberto). Redimensionar a janela para desktop (acima de 768px) e depois de volta para mobile.

Esperado: ao voltar para desktop, o menu horizontal normal aparece (a media query deixa de valer, `.nav-links` volta a ser `display: flex` da regra base) sem nenhum menu suspenso sobreposto; ao voltar para mobile, o comportamento do Passo 3 se repete normalmente, sem sobreposição quebrada.

---

## Task 3: Comportamento — tema e menu mobile (`script.js`)

**Files:**
- Modify: `script.js`

**Interfaces:**
- Consumes: `#theme-toggle`, `#menu-toggle`, `#nav-links` e `.nav-link` (Task 1); classe `.nav-links.is-open` e seletor `[data-theme="dark"]` (Task 2).
- Produces: nenhuma tarefa depende deste arquivo — é a última camada.

- [ ] **Passo 1: Escrever `script.js` completo**

```javascript
// Chave usada para salvar a escolha de tema no localStorage
const THEME_STORAGE_KEY = 'theme';

const themeToggleButton = document.getElementById('theme-toggle');
const menuToggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Descobre o tema inicial: usa o que a pessoa já escolheu antes (localStorage);
// se nunca escolheu, segue a preferência do sistema operacional.
function getPreferredTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return systemPrefersDark ? 'dark' : 'light';
}

// Aplica o tema na página e atualiza o ícone do botão
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleButton.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggleButton.textContent = '🌙';
  }
}

// Alterna entre claro e escuro e salva a escolha para as próximas visitas
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
}

applyTheme(getPreferredTheme());
themeToggleButton.addEventListener('click', toggleTheme);

// Abre e fecha o menu mobile ao clicar no botão hambúrguer
function toggleMobileMenu() {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggleButton.setAttribute('aria-expanded', String(isOpen));
}

menuToggleButton.addEventListener('click', toggleMobileMenu);

// Fecha o menu mobile automaticamente ao clicar em um link
// (a rolagem suave até a seção já é feita pelo CSS, não precisa de JS para isso)
navLinks.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('is-open');
    menuToggleButton.setAttribute('aria-expanded', 'false');
  });
});
```

- [ ] **Passo 2: Verificação manual — alternância de tema**

Abrir `index.html` no navegador (desktop). Clicar no botão de tema (ícone 🌙).

Esperado: a página muda para o tema escuro, o ícone do botão vira ☀️. Clicar de novo volta ao tema claro e o ícone volta a 🌙.

- [ ] **Passo 3: Verificação manual — persistência do tema (Review Focus)**

Com o tema escuro ativo (Passo 2), recarregar a página com F5.

Esperado: a página recarrega já em tema escuro (sem piscar no tema claro por engano), confirmando que a escolha foi lida do `localStorage`. Abrir a mesma página em uma nova aba deve manter o tema escuro também.

- [ ] **Passo 4: Verificação manual — prioridade da escolha manual sobre `prefers-color-scheme` (Review Focus)**

No DevTools, abrir o simulador de `prefers-color-scheme` (Chrome: Rendering tab → "Emulate CSS media feature prefers-color-scheme") e alternar entre claro/escuro do sistema, com o tema manual já salvo do Passo 3.

Esperado: o tema mostrado continua sendo o que foi escolhido manualmente (salvo no `localStorage`), independente da preferência do sistema mudar. Para confirmar o comportamento padrão, limpar o `localStorage` (DevTools → Application → Local Storage → remover a chave `theme`) e recarregar: agora a página deve seguir a preferência do sistema.

- [ ] **Passo 5: Verificação manual — menu mobile**

Redimensionar a janela para largura mobile (abaixo de 768px). Clicar no botão hambúrguer.

Esperado: a lista de links aparece como menu suspenso; o atributo `aria-expanded` do botão vira `"true"` (conferir no DevTools). Clicar no hambúrguer de novo fecha o menu e `aria-expanded` volta a `"false"`.

- [ ] **Passo 6: Verificação manual — fechar menu ao clicar em link (Review Focus)**

Ainda em largura mobile, abrir o menu (Passo 5) e clicar no link "Projetos".

Esperado: a página rola suavemente até a seção Projetos **e** o menu suspenso fecha sozinho (não fica sobreposto ao conteúdo).

- [ ] **Passo 7: Verificação final — site completo dentro de uma subpasta (Review Focus)**

Copiar os três arquivos (`index.html`, `style.css`, `script.js`) para dentro de uma subpasta nova, por exemplo `C:\sitepessoal\teste-subpasta\`, e abrir o `index.html` de lá direto no navegador (`file://`).

Esperado: o site carrega, estilizado, com tema (claro ou escuro conforme o sistema/`localStorage` daquele contexto) e menu mobile funcionando normalmente — confirma que nenhum caminho absoluto foi usado em nenhum dos três arquivos. Depois de validar, apagar a subpasta de teste.

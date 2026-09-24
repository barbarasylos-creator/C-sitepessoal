# Site pessoal — Bárbara Sylos (spec de design)

Data: 2026-09-23

## Contexto e objetivo

Site pessoal de uma página só, para Bárbara Sylos, desenvolvedora, com o
objetivo de divulgar seu portfólio e projetos. Público-alvo: recrutadores,
clientes em potencial e contatos profissionais que cheguem ao site pelo
link do LinkedIn ou por indicação.

## Requisitos técnicos

- Apenas HTML, CSS e JavaScript puros. Sem framework, sem npm, sem etapa
  de build, sem `node_modules`.
- Exatamente três arquivos na raiz do projeto: `index.html`, `style.css`
  e `script.js`. Sem `README.md` nem arquivos de configuração.
- Todos os caminhos entre os três arquivos são relativos
  (`style.css`, `script.js`), nunca absolutos (`/style.css`), porque o
  site pode ser publicado dentro de uma subpasta.
- Identificadores de código (nomes de variáveis, funções, classes CSS)
  em inglês, seguindo convenção comum de código; comentários e todo o
  texto visível no site em português do Brasil.

## Estrutura da página (`index.html`)

Seções, nessa ordem, cada uma com `id` para navegação por âncora:

1. **Cabeçalho (`header`)** — nome "Bárbara Sylos", frase de apresentação
   e um botão que rola até `#contato`.
2. **`nav`** — links para `#sobre`, `#projetos`, `#contato`. No celular,
   os links somem e aparece um botão de três risquinhos (hambúrguer) que
   abre/fecha a lista de links.
3. **`section#sobre`** — dois parágrafos de apresentação.
4. **`section#projetos`** — três cartões (`article`), cada um com
   título, descrição e link.
5. **`section#contato`** — e-mail e link do LinkedIn.

Um botão de alternância de tema (claro/escuro) fica visível no
cabeçalho, fora do menu hambúrguer (não deve ficar escondido no
celular).

### Conteúdo textual definido

- Frase de apresentação: "Desenvolvedora criando soluções simples para
  problemas reais."
- Texto do botão do cabeçalho: "Fale comigo" (rola até `#contato`).
- Parágrafo 1 (Sobre): "Sou Bárbara Sylos, desenvolvedora apaixonada por
  transformar ideias em software funcional e bem construído. Trabalho
  com atenção aos detalhes, buscando sempre entender o problema antes de
  escrever qualquer linha de código."
- Parágrafo 2 (Sobre): "Este portfólio reúne alguns dos projetos em que
  venho trabalhando. Fique à vontade para explorar os cartões abaixo e,
  se algo despertar seu interesse, entre em contato — terei prazer em
  conversar."
- Cartões de projeto (placeholder, a autora substitui depois): título
  "Projeto 1" / "Projeto 2" / "Projeto 3"; descrição "Descrição breve do
  projeto, destacando o problema resolvido e as tecnologias usadas.";
  link com texto "Ver projeto" apontando para `#`.
- Contato: e-mail `barbara.sylos@gmail.com` como link `mailto:`; link do
  LinkedIn `https://www.linkedin.com/in/barbara-sylos`, abrindo em nova
  aba (`target="_blank" rel="noopener"`).

## Estilo (`style.css`)

- Cores definidas como variáveis CSS em `:root` (tema claro, padrão):
  fundo, texto, destaque/primária, fundo dos cartões, borda. Paleta
  neutra com azul como cor de destaque.
- Tema escuro: mesmas variáveis redefinidas dentro de um seletor
  `[data-theme="dark"]` aplicado no `<html>`.
- Fonte: pilha de fontes do sistema (`system-ui` e alternativas), sem
  carregar fonte externa — mantém o site sem dependências e rápido.
- Layout responsivo com uma media query (breakpoint em 768px): acima
  disso, menu normal em linha; abaixo, menu vira lista escondida
  controlada pelo botão hambúrguer.
- Rolagem suave: `scroll-behavior: smooth` no `html`, cobrindo os
  cliques nos links do menu e no botão do cabeçalho sem precisar de
  JavaScript.
- Cada bloco de regras comentado em português explicando seu papel.

## Comportamento (`script.js`)

Três responsabilidades, cada uma comentada em português:

1. **Alternância de tema** — lê a preferência salva em `localStorage`;
   se não houver nenhuma, usa `prefers-color-scheme` do sistema como
   padrão. O botão de alternância troca o atributo `data-theme` no
   `<html>` e salva a nova escolha no `localStorage`.
2. **Menu mobile** — o botão hambúrguer abre/fecha a lista de links
   (classe que controla visibilidade). Clicar em qualquer link do menu
   fecha o menu automaticamente (útil no celular, onde a lista cobre
   parte da tela).
3. Nenhuma lógica de rolagem em JS — fica a cargo do
   `scroll-behavior: smooth` do CSS.

## Fora de escopo

- Conteúdo real dos três projetos (fica como placeholder combinado).
- Formulário de contato, analytics, SEO avançado, animações além da
  rolagem suave e da transição de tema.
- Testes automatizados, build, lint ou qualquer ferramenta de
  desenvolvimento — não há etapa de build no projeto.

## Critérios de aceite

- Abrir `index.html` direto no navegador (sem servidor) funciona,
  incluindo troca de tema e menu mobile — confirma que os caminhos
  relativos estão corretos.
- Redimensionar a janela para largura de celular mostra o botão
  hambúrguer no lugar do menu horizontal.
- Clicar nos links do menu e no botão do cabeçalho rola suavemente até
  a seção correspondente.
- Alternar o tema muda as cores e a escolha permanece após recarregar a
  página (F5).
- Copiar a pasta do site para dentro de uma subpasta e abrir
  `index.html` de lá continua funcionando (valida os caminhos
  relativos).

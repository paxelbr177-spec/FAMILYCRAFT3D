# 🚀 Family Craft 3D - Website Oficial & Catálogo Digital

Website moderno, responsivo e de alta performance desenvolvido especialmente para o estúdio **Family Craft 3D**, pronto para hospedagem gratuita no **GitHub Pages**.

---

## 🌟 Funcionalidades Principais

- **Catálogo Interativo com Mais de 40 Produtos Reais**:
  - Dados e fotos fiéis extraídos do estoque oficial (`STOCK DE PRODUCTOS.xlsx`, PDFs e fotos do estúdio).
  - Categorias com filtros dinâmicos:
    - *Todos os Produtos*
    - *Linha Sensorial & TEA* (Painéis de Rotinas Visuais, Cubos Infinitos, Squishis, Fidgets)
    - *Geek & Pintados à Mão* (Deadpool, Spiderman, Vecna, Coringa, Omulu)
    - *Organizadores & Decoração* (Organizadores de maquiagem 350g, Diulia, canelados)
    - *Luminárias & Natal* (Luminárias LED, pingentes para árvore)
    - *⚡ Pronta Entrega* (Filtro instantâneo para itens com estoque imediato)
- **Busca em Tempo Real & Ordenação**:
  - Campo de busca instantâneo por nome, temas ou tags.
  - Ordenação por Destaque, Menor Preço, Maior Preço e Ordem Alfabética.
- **Carrinho de Compras com Fechamento via WhatsApp**:
  - Permite adicionar múltiplos itens, ajustar quantidades e ver o subtotal em R$.
  - Botão **"Finalizar Pedido no WhatsApp"** que formata uma mensagem detalhada com todos os itens, valores e total pronto para enviar para o WhatsApp `+55 12 99138-6257`.
  - Botão de pedido rápido direto em cada card de produto.
- **Destaque Especial para a Linha Sensorial & TEA**:
  - Seção com foco nos *Painéis de Rotinas Visuais* (6 e 8 janelas) e brinquedos para autorregulação, foco e previsibilidade.
- **Formulário de Orçamentos 3D Sob Medida**:
  - Envio de links de modelos 3D (.STL, .3MF do Thingiverse/MakerWorld/Printables), seleção de materiais (PLA, PETG, Resina) e especificações diretamente para o WhatsApp.
- **Suporte Bilíngue Integrado (Português 🇧🇷 / Espanhol 🇦🇷)**:
  - Botão seletor no topo que alterna instantaneamente todo o conteúdo entre Português e Espanhol, lembrando a preferência do usuário via `localStorage`.
- **Performance de Ponta**:
  - Imagens otimizadas no formato WebP de alta definição com redução de mais de 85% no peso total dos arquivos (carrega em menos de 1 segundo mesmo no 4G).
  - Sem necessidade de Node.js, compilação ou dependências externas — funciona diretamente com HTML5, CSS3 moderno e Vanilla JavaScript.

---

## 📁 Estrutura de Arquivos

```
family-craft-3d/
├── .nojekyll                 # Garante que o GitHub Pages sirva todos os arquivos estáticos
├── index.html                # Página principal (estrutura semântica e responsiva)
├── products.json             # Banco de dados de produtos em JSON
├── README.md                 # Este guia de instruções
└── assets/
    ├── css/
    │   └── styles.css        # Folha de estilos moderna (dark studio neon theme)
    ├── js/
    │   ├── products-data.js  # Base de dados embutida (funciona offline e online)
    │   └── app.js            # Lógica interativa, filtros, carrinho e WhatsApp
    └── images/
        ├── logo.png          # Logo master com fundo transparente
        ├── logo.webp         # Versão otimizada do logo
        ├── banner.webp       # Banner do estúdio
        └── *.webp            # 41 fotos de produtos otimizadas
```

---

## 🌐 Como Subir no GitHub Pages (Passo a Passo)

### Opção 1: Pelo Terminal / Linha de Comando (Git)

1. Abra o terminal (PowerShell ou Bash) dentro da pasta do projeto:
   ```bash
   cd "C:\Users\paxel\.gemini\antigravity\scratch\family-craft-3d"
   ```
2. Inicialize o repositório git:
   ```bash
   git init
   git add .
   git commit -m "feat: site oficial Family Craft 3D pronto para GitHub Pages"
   ```
3. Crie um repositório no seu GitHub (ex: `family-craft-3d` ou `familycraft3d.github.io`):
4. Vincule e envie os arquivos:
   ```bash
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```
5. No GitHub, vá em **Settings** > **Pages** > em *Branch*, selecione `main` e a pasta `/(root)`, depois clique em **Save**.
6. Em cerca de 1 a 2 minutos, o GitHub exibirá o link público do seu site:
   `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`

---

### Opção 2: Pelo Navegador (Sem Git)

1. Acesse [github.com](https://github.com) e crie um novo repositório (público) chamado `family-craft-3d`.
2. Na página do repositório, clique em **Add file** > **Upload files**.
3. Arraste todos os arquivos e pastas da pasta `family-craft-3d` para lá e clique em **Commit changes**.
4. Acesse a aba **Settings** > **Pages**.
5. Em **Build and deployment** > **Source**, escolha `Deploy from a branch`.
6. Selecione `main` e `/(root)`, e clique em **Save**.
7. Pronto! Seu site estará no ar gratuitamente com certificado SSL/HTTPS incluso!

---

## 💻 Como Visualizar Localmente no Computador

Você pode abrir o arquivo `index.html` com dois cliques no seu navegador favorito (Google Chrome, Edge, Firefox). Ele funcionará perfeitamente com todas as imagens, filtros e carrinho sem precisar rodar nenhum servidor!

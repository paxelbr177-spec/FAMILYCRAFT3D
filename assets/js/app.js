/**
 * FAMILY CRAFT 3D - Interactive Web Application
 * Handles Catalog Rendering, Search, Filtering, Cart & WhatsApp Order Generation,
 * Multi-language support (PT/ES), and Modal Views.
 */

// Business Configuration
const CONFIG = {
  WHATSAPP_NUMBER: '5512991386257', // +55 12 99138-6257
  INSTAGRAM_USER: 'familycraft.3d',
  TIKTOK_USER: 'familycraft236',
  CURRENCY_SYMBOL: 'R$'
};

// Multi-language UI Dictionaries
const I18N = {
  pt: {
    // Nav
    nav_home: 'Início',
    nav_catalog: 'Catálogo & Estoque',
    nav_tea: 'Linha TEA / Sensorial',
    nav_custom: 'Sob Encomenda',
    nav_about: 'O Estúdio',
    nav_faq: 'Dúvidas',
    nav_whatsapp: 'Fale no WhatsApp',

    // Hero
    hero_badge: 'Estúdio de Impressão 3D & Arte Manual',
    hero_title: 'Torne suas ideias realidade em 3D',
    hero_subtitle: 'Figuras colecionáveis pintadas à mão, brinquedos sensoriais e recursos terapêuticos para TEA, organizadores modernos e projetos sob medida no Vale do Paraíba com envio para todo o Brasil.',
    hero_cta_catalog: 'Ver Catálogo Completo',
    hero_cta_custom: 'Pedir Orçamento Exclusivo',
    hero_stat_models: 'Modelos Exclusivos',
    hero_stat_painted: 'Pintado à Mão',
    hero_stat_wholesale: 'Varejo & Atacado',

    // Trust Features
    feature_1_title: 'Alta Precisão & Acabamento',
    feature_1_desc: 'Camadas imperceptíveis e pintura artesanal',
    feature_2_title: 'Linha Sensorial & TEA',
    feature_2_desc: 'Aprovado para foco, ansiedade e terapia',
    feature_3_title: 'Envio Rápido p/ Todo Brasil',
    feature_3_desc: 'Embalagem reforçada e rastreamento',
    feature_4_title: 'Projetos Personalizados',
    feature_4_desc: 'Traga seu arquivo STL ou sua ideia',

    // Catalog
    cat_badge: 'Estoque & Catálogo Oficial',
    cat_title: 'Explore Nossas Criações',
    cat_desc: 'Escolha entre produtos à pronta entrega e modelos feitos sob encomenda com suas cores preferidas.',
    tab_all: 'Todos os Produtos',
    tab_sensorial: 'Sensorial & TEA',
    tab_geek: 'Geek & Pintados à Mão',
    tab_organizadores: 'Organizadores & Casa',
    tab_decor: 'Decoração & Arte',
    tab_natal: 'Luminárias & Natal',
    tab_instock: '⚡ Pronta Entrega',
    search_placeholder: 'Buscar por nome, categoria ou tema (ex: homem aranha, cubo, organizador)...',
    sort_featured: 'Destaques',
    sort_price_asc: 'Menor Preço',
    sort_price_desc: 'Maior Preço',
    sort_name: 'Nome (A-Z)',
    badge_in_stock: 'Pronta Entrega',
    badge_on_demand: 'Sob Encomenda',
    units_left: 'unid.',
    btn_add_cart: 'Adicionar ao Carrinho',
    btn_quick_wa: 'Pedir Agora via WhatsApp',
    btn_details: 'Ver Detalhes',
    no_results_title: 'Nenhum produto encontrado',
    no_results_desc: 'Tente alterar os termos de busca ou mudar a categoria selecionada.',

    // TEA Section
    tea_badge: 'Especial Desenvolvimento Infantil & Neurodiversidade',
    tea_title: 'Linha Terapêutica, Sensorial & TEA',
    tea_desc: 'Nossos produtos sensoriais e painéis de rotinas visuais foram desenvolvidos para auxiliar crianças e adultos na regulação emocional, alívio de estresse, foco e previsibilidade diária.',
    tea_item1_title: 'Painéis de Rotina Visual Interativos',
    tea_item1_desc: 'Com 6 ou 8 janelas deslizantes que conferem autonomia à criança para acompanhar e concluir tarefas do dia a dia.',
    tea_item2_title: 'Fidgets Cinéticos & Táteis',
    tea_item2_desc: 'Cubos infinitos, chaveiros com relevos e empanadinhas espirais que acalmam as mãos e promovem a concentração.',
    tea_item3_title: 'Materiais Atóxicos & Seguros',
    tea_item3_desc: 'Produzidos em PLA biodegradável ecológico com cantos arredondados e alta durabilidade.',
    tea_btn_order: 'Ver Toda a Linha Sensorial',

    // Custom Quote
    quote_badge: 'Serviço Sob Demanda',
    quote_title: 'Imprima Sua Própria Ideia em 3D',
    quote_desc: 'Tem um arquivo 3D (.STL, .3MF, .OBJ) do Thingiverse, Printables, MakerWorld ou uma necessidade específica para sua empresa ou festa? Nós orçamos e imprimimos para você!',
    quote_step1: 'Envie o link do modelo ou descreva seu projeto',
    quote_step2: 'Escolha material, cores e acabamento',
    quote_step3: 'Receba orçamento detalhado no WhatsApp em minutos',
    form_name: 'Seu Nome',
    form_phone: 'WhatsApp com DDD',
    form_material: 'Material Preferido',
    form_material_pla: 'PLA (Geral / Decorativo / Ecológico)',
    form_material_petg: 'PETG (Resistente / Água / Calor)',
    form_material_resin: 'Resina Ultra Detalhada',
    form_material_unsure: 'Preciso de Recomendação',
    form_link: 'Link do Modelo ou Ideia (Thingiverse, etc.)',
    form_details: 'Detalhes (Dimensões, cores desejadas, quantidade)',
    btn_send_quote: 'Enviar Projeto via WhatsApp',

    // About
    about_badge: 'Nossa História',
    about_title: 'Family Craft: Paixão por Criar e Transformar',
    about_p1: 'A Family Craft nasceu no Vale do Paraíba como um estúdio familiar apaixonado pela magia da manufatura aditiva. Acreditamos que a impressão 3D é uma ponte entre a imaginação e o mundo real.',
    about_p2: 'Cada peça que sai da nossa farm de impressão é inspecionada, tratada e, quando aplicável, pintada à mão com todo o carinho e dedicação artesanal. Atendemos clientes particulares, profissionais de saúde e empresas que buscam brindes personalizados de alto padrão.',

    // FAQ
    faq_badge: 'Perguntas Frequentes',
    faq_title: 'Tire Suas Dúvidas',
    faq_q1: 'Como faço para encomendar um produto?',
    faq_a1: 'Você pode adicionar os itens desejados ao carrinho neste site e clicar em "Finalizar Pedido via WhatsApp", ou clicar diretamente no botão de WhatsApp em qualquer produto. Você será direcionado para uma conversa com nossa equipe já com a lista do seu pedido pronta!',
    faq_q2: 'Vocês enviam para todo o Brasil?',
    faq_a2: 'Sim! Enviamos para todo o território nacional via Correios (PAC / Sedex) e transportadoras. Para clientes da região do Vale do Paraíba / Litoral Norte de São Paulo, também temos opções facilitadas de entrega e retirada.',
    faq_q3: 'O que é filamento PLA e PETG?',
    faq_a3: 'O PLA é um bioplástico termoplástico biodegradável de origem vegetal (milho/cana-de-açúcar), atóxico e perfeito para peças decorativas e infantis. O PETG é mais maleável, muito resistente a impactos, umidade e temperatura.',
    faq_q4: 'As peças pintadas à mão desbotam?',
    faq_a4: 'Não! Nossas peças pintadas recebem primer especial de aderência, camadas de tinta acrílica de alta qualidade e são seladas com verniz protetor fosco ou brilhante para garantir máxima durabilidade.',
    faq_q5: 'Fazem vendas no atacado ou brindes corporativos?',
    faq_a5: 'Sim! Oferecemos condições especiais e descontos progressivos para compras em quantidade, lembrancinhas de aniversário, consultórios e brindes para empresas. Fale conosco no WhatsApp para um orçamento exclusivo.',

    // Cart
    cart_title: 'Seu Pedido',
    cart_empty: 'Seu carrinho está vazio.',
    cart_empty_sub: 'Navegue pelo catálogo e adicione itens para montar seu pedido!',
    cart_total: 'Total Estimado:',
    cart_shipping_disclaimer: 'O frete e prazos exatos serão combinados no WhatsApp.',
    cart_checkout: 'Finalizar Pedido no WhatsApp',
    toast_added: 'adicionado ao carrinho!',

    // Modal
    modal_stock_info: 'Estoque:',
    modal_specs_label: 'Especificações Técnicas:',
    modal_btn_wa: 'Pedir Este Produto via WhatsApp',
    modal_btn_cart: 'Adicionar ao Carrinho'
  },

  es: {
    // Nav
    nav_home: 'Inicio',
    nav_catalog: 'Catálogo & Stock',
    nav_tea: 'Línea TEA / Sensorial',
    nav_custom: 'Por Encargo',
    nav_about: 'El Estudio',
    nav_faq: 'Preguntas',
    nav_whatsapp: 'Hablar por WhatsApp',

    // Hero
    hero_badge: 'Estudio de Impresión 3D & Arte Manual',
    hero_title: 'Hacé tu idea realidad en 3D',
    hero_subtitle: 'Figuras coleccionables pintadas a mano, juguetes sensoriales y recursos terapéuticos para TEA, organizadores modernos y proyectos a medida con envíos a todo destino.',
    hero_cta_catalog: 'Ver Catálogo Completo',
    hero_cta_custom: 'Pedir Presupuesto Exclusivo',
    hero_stat_models: 'Modelos Exclusivos',
    hero_stat_painted: 'Pintado a Mano',
    hero_stat_wholesale: 'Venta Mayor y Menor',

    // Trust Features
    feature_1_title: 'Alta Precisión & Acabado',
    feature_1_desc: 'Capas imperceptibles y pintura artesanal',
    feature_2_title: 'Línea Sensorial & TEA',
    feature_2_desc: 'Aprobado para enfoque, ansiedad y terapia',
    feature_3_title: 'Envíos Rápidos y Seguros',
    feature_3_desc: 'Embalaje reforzado y seguimiento',
    feature_4_title: 'Proyectos a Medida',
    feature_4_desc: 'Traé tu archivo STL o tu idea',

    // Catalog
    cat_badge: 'Stock & Catálogo Oficial',
    cat_title: 'Explorá Nuestras Creaciones',
    cat_desc: 'Elegí entre productos de entrega inmediata y modelos fabricados por encargo con tus colores preferidos.',
    tab_all: 'Todos los Productos',
    tab_sensorial: 'Sensorial & TEA',
    tab_geek: 'Geek & Pintados a Mano',
    tab_organizadores: 'Organizadores & Hogar',
    tab_decor: 'Decoración & Arte',
    tab_natal: 'Lámparas & Navidad',
    tab_instock: '⚡ Entrega Inmediata',
    search_placeholder: 'Buscar por nombre, categoría o tema (ej: spiderman, cubo, organizador)...',
    sort_featured: 'Destacados',
    sort_price_asc: 'Menor Precio',
    sort_price_desc: 'Mayor Precio',
    sort_name: 'Nombre (A-Z)',
    badge_in_stock: 'Entrega Inmediata',
    badge_on_demand: 'Por Encargo',
    units_left: 'unid.',
    btn_add_cart: 'Agregar al Carrito',
    btn_quick_wa: 'Pedir Ahora por WhatsApp',
    btn_details: 'Ver Detalles',
    no_results_title: 'No se encontraron productos',
    no_results_desc: 'Probá cambiando las palabras de búsqueda o seleccionando otra categoría.',

    // TEA Section
    tea_badge: 'Especial Desarrollo Infantil & Neurodiversidad',
    tea_title: 'Línea Terapéutica, Sensorial & TEA',
    tea_desc: 'Nuestros productos sensoriales y paneles de rutinas visuales fueron diseñados para ayudar a niños y adultos en la autorregulación emocional, alivio del estrés, enfoque y previsibilidad.',
    tea_item1_title: 'Paneles de Rutina Visual Interactivos',
    tea_item1_desc: 'Con 6 u 8 ventanas deslizantes que brindan autonomía al niño para seguir y completar sus actividades diarias.',
    tea_item2_title: 'Fidgets Cinéticos & Táctiles',
    tea_item2_desc: 'Cubos infinitos, llaveros con relieves y empanaditas espirales que calman las manos y favorecen la atención.',
    tea_item3_title: 'Materiales No Tóxicos & Seguros',
    tea_item3_desc: 'Fabricados en PLA biodegradable ecológico con bordes redondeados y alta durabilidad.',
    tea_btn_order: 'Ver Toda la Línea Sensorial',

    // Custom Quote
    quote_badge: 'Servicio a Pedido',
    quote_title: 'Imprimí Tu Propia Idea en 3D',
    quote_desc: '¿Tenés un archivo 3D (.STL, .3MF, .OBJ) de Thingiverse, Printables, MakerWorld o una necesidad para tu emprendimiento? ¡Nosotros te lo presupuestamos e imprimimos!',
    quote_step1: 'Enviá el link del modelo o describí tu idea',
    quote_step2: 'Elegí material, colores y dimensiones',
    quote_step3: 'Recibí tu presupuesto por WhatsApp en minutos',
    form_name: 'Tu Nombre',
    form_phone: 'WhatsApp con código de área',
    form_material: 'Material Preferido',
    form_material_pla: 'PLA (General / Decorativo / Ecológico)',
    form_material_petg: 'PETG (Resistente / Agua / Temperatura)',
    form_material_resin: 'Resina Ultra Detallada',
    form_material_unsure: 'Necesito Asesoramiento',
    form_link: 'Link del Modelo o Idea (Thingiverse, etc.)',
    form_details: 'Detalles (Medidas aproximadas, colores, cantidad)',
    btn_send_quote: 'Enviar Proyecto por WhatsApp',

    // About
    about_badge: 'Nuestra Historia',
    about_title: 'Family Craft: Pasión por Crear y Transformar',
    about_p1: 'Family Craft nació en el Vale do Paraíba como un estudio familiar apasionado por la magia de la fabricación aditiva. Creemos que la impresión 3D es el puente entre la imaginación y la realidad.',
    about_p2: 'Cada pieza que sale de nuestro taller es revisada minuciosamente y, cuando corresponde, pintada a mano con amor y dedicación artesanal. Atendemos a clientes particulares, terapeutas y empresas.',

    // FAQ
    faq_badge: 'Preguntas Frecuentes',
    faq_title: 'Despejá Tus Dudas',
    faq_q1: '¿Cómo hago para encargar un producto?',
    faq_a1: 'Podés agregar los productos que quieras al carrito y presionar "Finalizar Pedido en WhatsApp", o tocar directamente el botón de WhatsApp en cualquier producto. ¡Se te abrirá el chat con el mensaje pre-cargado!',
    faq_q2: '¿Hacen envíos a todo el país?',
    faq_a2: '¡Sí! Enviamos por correo y encomiendas a todo el territorio con embalaje protegido y código de seguimiento.',
    faq_q3: '¿Qué diferencia hay entre PLA y PETG?',
    faq_a3: 'El PLA es un bioplástico vegetal no tóxico, ideal para figuras, juguetes y decoración. El PETG es mucho más elástico y resistente al impacto, agua y sol.',
    faq_q4: '¿Las piezas pintadas se despintan con el tiempo?',
    faq_a4: '¡No! Se preparan con imprimación especial, pinturas acrílicas artísticas de primera calidad y sellado de laca protectora.',
    faq_q5: '¿Tienen venta por mayor o souvenirs?',
    faq_a5: '¡Sí! Contamos con precios especiales y descuentos por cantidad para consultorios, escuelas, fiestas y empresas.',

    // Cart
    cart_title: 'Tu Pedido',
    cart_empty: 'Tu carrito está vacío.',
    cart_empty_sub: '¡Mirá nuestro catálogo y elegí tus modelos favoritos!',
    cart_total: 'Total Estimado:',
    cart_shipping_disclaimer: 'El envío y tiempo de entrega se coordinan por WhatsApp.',
    cart_checkout: 'Finalizar Pedido en WhatsApp',
    toast_added: '¡agregado al carrito!',

    // Modal
    modal_stock_info: 'Stock disponible:',
    modal_specs_label: 'Especificaciones Técnicas:',
    modal_btn_wa: 'Pedir Este Producto por WhatsApp',
    modal_btn_cart: 'Agregar al Carrito'
  }
};

// Global App State
const state = {
  products: window.PRODUCTS_DATA || [],
  currentCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  lang: localStorage.getItem('fc_lang') || 'pt',
  cart: JSON.parse(localStorage.getItem('fc_cart') || '[]')
};

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCatalog();
  initCart();
  initModal();
  initCustomQuoteForm();
  initFAQ();
  initMobileNav();
  initScrollAnimations();
});

/* ==========================================================================
   LANGUAGE (I18N)
   ========================================================================== */
function initLanguage() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      state.lang = state.lang === 'pt' ? 'es' : 'pt';
      localStorage.setItem('fc_lang', state.lang);
      updateLanguageUI();
    });
  }
  updateLanguageUI();
}

function updateLanguageUI() {
  const dict = I18N[state.lang];
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = state.lang === 'pt' 
      ? '<span style="font-size:1.1em">🇧🇷</span> PT / ES' 
      : '<span style="font-size:1.1em">🇦🇷</span> ES / PT';
  }

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput && dict.search_placeholder) {
    searchInput.placeholder = dict.search_placeholder;
  }

  // Re-render components with translated content
  renderProducts();
  renderCart();
}

/* ==========================================================================
   CATALOG RENDERING & FILTERING
   ========================================================================== */
function initCatalog() {
  // Category tabs
  const tabButtons = document.querySelectorAll('.filter-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById('catalogSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const dict = I18N[state.lang];
  let list = [...state.products];

  // Category Filter
  if (state.currentCategory === 'instock') {
    list = list.filter(p => p.stock > 0);
  } else if (state.currentCategory !== 'all') {
    list = list.filter(p => p.category === state.currentCategory);
  }

  // Search query filter
  if (state.searchQuery) {
    const q = state.searchQuery;
    list = list.filter(p => {
      const name = (p.name || '').toLowerCase();
      const nameEs = (p.name_es || '').toLowerCase();
      const descPt = (p.desc_pt || '').toLowerCase();
      const descEs = (p.desc_es || '').toLowerCase();
      const tags = (p.tags || []).join(' ').toLowerCase();
      return name.includes(q) || nameEs.includes(q) || descPt.includes(q) || descEs.includes(q) || tags.includes(q);
    });
  }

  // Sorting
  if (state.sortBy === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'name') {
    list.sort((a, b) => {
      const nameA = state.lang === 'pt' ? a.name : a.name_es;
      const nameB = state.lang === 'pt' ? b.name : b.name_es;
      return nameA.localeCompare(nameB);
    });
  } else {
    // Featured: prioritize in stock and highlights
    list.sort((a, b) => {
      if (b.stock > 0 && a.stock === 0) return 1;
      if (a.stock > 0 && b.stock === 0) return -1;
      return 0;
    });
  }

  // Render HTML
  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-box-open"></i>
        <h3>${dict.no_results_title}</h3>
        <p>${dict.no_results_desc}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(item => {
    const name = state.lang === 'pt' ? item.name : item.name_es;
    const desc = state.lang === 'pt' ? item.desc_pt : item.desc_es;
    const inStock = item.stock > 0;
    const stockBadge = inStock 
      ? `<span class="badge badge-green"><i class="fa-solid fa-check-circle"></i> ${dict.badge_in_stock} (${item.stock} ${dict.units_left})</span>`
      : `<span class="badge badge-purple"><i class="fa-solid fa-cube"></i> ${dict.badge_on_demand}</span>`;
    
    const tagsHtml = (item.tags || []).slice(0, 3).map(t => `<span class="tag-pill">${t}</span>`).join('');
    
    const promoHtml = item.promo_note 
      ? `<span class="badge badge-amber" style="margin-top:0.35rem;"><i class="fa-solid fa-tag"></i> ${item.promo_note}</span>` 
      : '';

    const priceFormatted = formatCurrency(item.price);
    const oldPriceHtml = item.original_price ? `<span class="price-old">${formatCurrency(item.original_price)}</span>` : '';

    return `
      <article class="product-card" data-id="${item.id}">
        <div class="product-img-wrap" onclick="openProductModal('${item.id}')">
          <img src="${item.image}" alt="${name}" loading="lazy" />
          <div class="product-badges">
            ${stockBadge}
            ${promoHtml}
          </div>
        </div>

        <div class="product-body">
          <div class="product-tags">${tagsHtml}</div>
          <h3 class="product-title" onclick="openProductModal('${item.id}')">${name}</h3>
          <p class="product-desc">${desc}</p>

          <div class="product-footer">
            <div class="product-pricing">
              ${oldPriceHtml}
              <span class="price-current">${priceFormatted}</span>
            </div>

            <div class="product-actions">
              <button class="btn-card-action btn-add-cart" title="${dict.btn_add_cart}" onclick="addToCart('${item.id}')">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
              <button class="btn-card-action btn-quick-order" title="${dict.btn_quick_wa}" onclick="orderDirectWhatsApp('${item.id}')">
                <i class="fa-brands fa-whatsapp"></i>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   CART & ORDER MANAGEMENT
   ========================================================================== */
function initCart() {
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCartDrawer(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCartDrawer(false));

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleCartCheckoutWhatsApp);
  }

  renderCart();
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    if (open) {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
}

function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      name_es: product.name_es,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  
  const dict = I18N[state.lang];
  const prodName = state.lang === 'pt' ? product.name : product.name_es;
  showToast(`"${prodName}" ${dict.toast_added}`);
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('fc_cart', JSON.stringify(state.cart));
}

function renderCart() {
  const badge = document.getElementById('cartBadge');
  const cartItemsContainer = document.getElementById('cartItemsList');
  const cartTotalValue = document.getElementById('cartTotalValue');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  const dict = I18N[state.lang];

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  const grandTotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (cartTotalValue) {
    cartTotalValue.textContent = formatCurrency(grandTotal);
  }

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>${dict.cart_empty}</h4>
        <p style="font-size:0.85rem; margin-top:0.35rem;">${dict.cart_empty_sub}</p>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.style.opacity = '0.5';
    return;
  }

  if (checkoutBtn) checkoutBtn.style.opacity = '1';

  cartItemsContainer.innerHTML = state.cart.map(item => {
    const name = state.lang === 'pt' ? item.name : item.name_es;
    const itemSubtotal = formatCurrency(item.price * item.qty);

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${name}</h4>
          <span class="cart-item-price">${formatCurrency(item.price)} each</span>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            <span style="font-size:0.85rem; font-weight:700; margin-left:auto; color:var(--text-main);">${itemSubtotal}</span>
          </div>
        </div>
        <button class="remove-item-btn" title="Remover" onclick="removeFromCart('${item.id}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');
}

function handleCartCheckoutWhatsApp() {
  if (state.cart.length === 0) return;

  const isPt = state.lang === 'pt';
  const grandTotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  let message = isPt 
    ? `Olá, Family Craft 3D! 👋 Gostaria de fazer o seguinte pedido pelo site:\n\n`
    : `¡Hola, Family Craft 3D! 👋 Me gustaría realizar el siguiente pedido desde la web:\n\n`;

  state.cart.forEach(item => {
    const name = isPt ? item.name : item.name_es;
    message += `• ${item.qty}x *${name}* - ${formatCurrency(item.price * item.qty)}\n`;
  });

  message += isPt
    ? `\n💰 *Total Estimado:* ${formatCurrency(grandTotal)}\n📍 Por favor, poderiam me informar o frete e prazo de entrega para meu CEP?`
    : `\n💰 *Total Estimado:* ${formatCurrency(grandTotal)}\n📍 ¿Podrían confirmarme el costo de envío y tiempo de entrega?`;

  const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

function orderDirectWhatsApp(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const isPt = state.lang === 'pt';
  const name = isPt ? product.name : product.name_es;

  const message = isPt
    ? `Olá, Family Craft 3D! 👋 Vi no site o produto *${name}* (${formatCurrency(product.price)}) e gostaria de encomendar!`
    : `¡Hola, Family Craft 3D! 👋 Vi en la web el producto *${name}* (${formatCurrency(product.price)}) y me gustaría encargarlo!`;

  const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

/* ==========================================================================
   PRODUCT DETAIL MODAL
   ========================================================================== */
function initModal() {
  const overlay = document.getElementById('productModalOverlay');
  const closeBtn = document.getElementById('closeModalBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProductModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
}

function openProductModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('productModalOverlay');
  const dict = I18N[state.lang];

  const name = state.lang === 'pt' ? product.name : product.name_es;
  const desc = state.lang === 'pt' ? product.desc_pt : product.desc_es;
  const inStock = product.stock > 0;
  const stockText = inStock 
    ? `<span class="badge badge-green"><i class="fa-solid fa-check-circle"></i> ${dict.badge_in_stock} (${product.stock} ${dict.units_left})</span>`
    : `<span class="badge badge-purple"><i class="fa-solid fa-cube"></i> ${dict.badge_on_demand}</span>`;

  modal.innerHTML = `
    <button class="close-modal-btn" id="closeModalBtn" onclick="closeProductModal()">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="modal-img-wrap">
      <img src="${product.image}" alt="${name}" />
    </div>
    <div class="modal-info">
      <div>
        <div style="margin-bottom:0.65rem;">${stockText}</div>
        <h2 class="modal-title">${name}</h2>
      </div>

      <div class="modal-price-row">
        ${product.original_price ? `<span class="price-old">${formatCurrency(product.original_price)}</span>` : ''}
        <span class="modal-price">${formatCurrency(product.price)}</span>
        ${product.promo_note ? `<span class="badge badge-amber">${product.promo_note}</span>` : ''}
      </div>

      <p class="modal-desc">${desc}</p>

      ${product.specs ? `
        <div class="modal-specs">
          <strong>${dict.modal_specs_label}</strong><br />
          ${product.specs}
        </div>
      ` : ''}

      <div class="modal-actions">
        <button class="btn btn-whatsapp" onclick="orderDirectWhatsApp('${product.id}')">
          <i class="fa-brands fa-whatsapp"></i> ${dict.modal_btn_wa}
        </button>
        <button class="btn btn-outline" onclick="addToCart('${product.id}'); closeProductModal();">
          <i class="fa-solid fa-cart-plus"></i> ${dict.modal_btn_cart}
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const overlay = document.getElementById('productModalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   CUSTOM 3D QUOTE FORM
   ========================================================================== */
function initCustomQuoteForm() {
  const form = document.getElementById('customQuoteForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('quoteName')?.value.trim();
    const phone = document.getElementById('quotePhone')?.value.trim();
    const material = document.getElementById('quoteMaterial')?.value;
    const link = document.getElementById('quoteLink')?.value.trim();
    const details = document.getElementById('quoteDetails')?.value.trim();

    const isPt = state.lang === 'pt';
    let msg = isPt
      ? `Olá, Family Craft 3D! 👋 Gostaria de solicitar um orçamento para impressão 3D personalizada:\n\n`
      : `¡Hola, Family Craft 3D! 👋 Quisiera solicitar un presupuesto para impresión 3D a medida:\n\n`;

    if (name) msg += `👤 *Nome:* ${name}\n`;
    if (phone) msg += `📞 *WhatsApp:* ${phone}\n`;
    if (material) msg += `⚙️ *Material Escolhido:* ${material}\n`;
    if (link) msg += `🔗 *Link / Referência:* ${link}\n`;
    if (details) msg += `📝 *Descrição do Projeto:* ${details}\n`;

    const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  });
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast toast-success';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ==========================================================================
   UTILITIES
   ========================================================================== */
function formatCurrency(value) {
  if (typeof value !== 'number') return `${CONFIG.CURRENCY_SYMBOL} 0,00`;
  return `${CONFIG.CURRENCY_SYMBOL} ${value.toFixed(2).replace('.', ',')}`;
}

function initScrollAnimations() {
  // Smooth active nav link highlight
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
}

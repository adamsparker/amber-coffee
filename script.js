/* Amber Coffee — vanilla JavaScript for the full menu and local cart. */
const SECTIONS = [
  { id: "dishes", label: "Блюда", filter: "food", image: "food", icon: "ph-fork-knife" },
  { id: "desserts", label: "Десерты", filter: "dessert", image: "dessert", icon: "ph-cake" },
  { id: "breakfast", label: "Завтраки", filter: "food", image: "food", icon: "ph-sun-horizon" },
  { id: "pasta", label: "Пасты", filter: "food", image: "food", icon: "ph-bowl-food" },
  { id: "salads", label: "Салаты", filter: "food", image: "food", icon: "ph-plant" },
  { id: "soups", label: "Супы", filter: "food", image: "food", icon: "ph-cooking-pot" },
  { id: "black-coffee", label: "Чёрный кофе", filter: "coffee", image: "coffee", icon: "ph-coffee" },
  { id: "alternative-coffee", label: "Альтернативный кофе", filter: "coffee", image: "coffee", icon: "ph-coffee" },
  { id: "milk-coffee", label: "Молочный кофе", filter: "coffee", image: "coffee", icon: "ph-coffee" },
  { id: "raf", label: "Раф", filter: "coffee", image: "coffee", icon: "ph-coffee" },
  { id: "cold-coffee", label: "Холодный кофе", filter: "cold", image: "cold", icon: "ph-snowflake" },
  { id: "lemonades", label: "Лимонады", filter: "cold", image: "cold", icon: "ph-drop" },
  { id: "fresh", label: "Фрэш", filter: "cold", image: "cold", icon: "ph-orange-slice" },
  { id: "tea", label: "Чай", filter: "tea", image: "tea", icon: "ph-teapot" },
  { id: "not-coffee", label: "Не кофе", filter: "noncoffee", image: "coffee", icon: "ph-cup" },
  { id: "signature-tea", label: "Авторский чай", filter: "tea", image: "tea", icon: "ph-teapot" },
];

const PRODUCTS = [
  ["dishes", "Нагетсы", 180], ["dishes", "Креветки в кляре", 640], ["dishes", "Стейк Пеппер", 1100, "Гарнир на выбор"], ["dishes", "Медальоны в грибном соусе", 1100], ["dishes", "Бургер куриный", 490], ["dishes", "Бургер говяжий", 590], ["dishes", "Булгур в соусе Амур", 540], ["dishes", "Лапша Соба", 580], ["dishes", "Тартар с лососем и яйцом пашот", 790], ["dishes", "Медальоны с соусом Демиглас", 850], ["dishes", "Курица Карри", 590], ["dishes", "Кус-кус с лососем", 640], ["dishes", "Бефстроганов", 480], ["dishes", "Куринные Медальоны", 680], ["dishes", "Медальйоны с авокадо гриль", 950],
  ["desserts", "Мороженое", 120, "Шарик"], ["desserts", "Фондан шоколадный", 350], ["desserts", "Блинный десерт", 460],
  ["breakfast", "Сискал т1о берам", 250], ["breakfast", "Кукурузная каша", 250], ["breakfast", "Шакшука", 320], ["breakfast", "Брускетта с креветками", 490], ["breakfast", "Кесадилья", 390], ["breakfast", "Поке с креветками", 440], ["breakfast", "Поке с лососем", 520], ["breakfast", "Боул с курицей", 420], ["breakfast", "Рисовая каша на кокосовом молоке", 390], ["breakfast", "Рисовая каша на банановом молоке", 390], ["breakfast", "Блин с сёмгой", 420], ["breakfast", "Сэндвич Amber с курицей", 340], ["breakfast", "Сэндвич Amber с лососем", 440], ["breakfast", "Скрембл с лососем", 560], ["breakfast", "Драники с лососем", 490], ["breakfast", "Английский завтрак", 390], ["breakfast", "Сырники", 310],
  ["pasta", "Лапша Соба", 580], ["pasta", "Орзо с курицей", 440], ["pasta", "Орзо с креветками", 530], ["pasta", "Паста фетучини", 420], ["pasta", "Паста Хот-Чили", 350], ["pasta", "Паста с морепродуктами", 640], ["pasta", "Лапша вок", 450], ["pasta", "Паста Песто", 420],
  ["salads", "Салат Амбер", 650], ["salads", "Греческий салат", 310], ["salads", "Теплый салат с вырезкой", 390], ["salads", "Цезарь с курицей", 390],
  ["soups", "Куриный суп", 340], ["soups", "Чечевичный крем-суп", 320], ["soups", "Суп Фо-Бо", 510], ["soups", "Том ям", 620], ["soups", "Рамен с курицей", 420],
  ["black-coffee", "Эспрессо", 200], ["black-coffee", "Эспрессо мощный", 250], ["black-coffee", "Американо", 200], ["black-coffee", "Апельсиновый шот", 290], ["black-coffee", "Гранатовый шот", 290],
  ["alternative-coffee", "Воронка V60", 330], ["alternative-coffee", "Фильтр кофе", 280, "250 / 350 мл · 280 / 320 ₽"],
  ["milk-coffee", "Капучино", 280, "250 / 350 мл · 280 / 330 ₽"], ["milk-coffee", "Флэт уайт", 280], ["milk-coffee", "Латте", 300], ["milk-coffee", "Тыквенный Латте", 330],
  ["raf", "Цитрусовый раф", 380], ["raf", "Классический раф", 360], ["raf", "Раф с урбечом", 380], ["raf", "Раф Банан-карамель", 380], ["raf", "Раф Баунти", 380], ["raf", "Раф Лавандовый", 380], ["raf", "Раф Медово-ореховый", 380],
  ["cold-coffee", "Айс кофе", 290], ["cold-coffee", "Айс урбеч", 380], ["cold-coffee", "Фраппучино", 350], ["cold-coffee", "Бамбл кофе", 420], ["cold-coffee", "Бамбл-Гран", 420], ["cold-coffee", "Гранатовый тоник", 280], ["cold-coffee", "Эспрессо тоник", 260], ["cold-coffee", "Тоник Комбо", 420],
  ["lemonades", "Лимонад Яблоко-Киви", 300], ["lemonades", "Лимонад Щавелевый", 300], ["lemonades", "Лимонад Клубника-апельсин", 300], ["lemonades", "Лимонад Манго-маракуйа", 300], ["lemonades", "Лимонад Слива-ананас", 300], ["lemonades", "Лимонад Ягодный", 300], ["lemonades", "Мохито классический", 300], ["lemonades", "Мохито клубничный", 300], ["lemonades", "Лимонад Ананас-маракуйя", 300],
  ["fresh", "Фрэш Ананас", 540], ["fresh", "Фрэш Апельсин", 380], ["fresh", "Фрэш Апельсин-яблоко", 380], ["fresh", "Фрэш Щавель-яблоко", 380], ["fresh", "Фрэш Яблоко", 380], ["fresh", "Гранатовый фрэш", 420], ["fresh", "Гранат-Апельсин", 400],
  ["tea", "Глинтвейн Вишневый", 280], ["tea", "Глинтвейн Гранатовый", 280], ["tea", "Ассам", 280], ["tea", "Зеленый-сенча", 280], ["tea", "Молочный-улун", 280], ["tea", "Граф Орлов", 280], ["tea", "Лев", 280], ["tea", "Эрл-грей", 280],
  ["not-coffee", "Какао", 250], ["not-coffee", "Горячий шоколад", 300], ["not-coffee", "Матча латте", 280], ["not-coffee", "Матча латте cold", 280], ["not-coffee", "Матча Бамбл", 440], ["not-coffee", "Голубая матча Малина", 300], ["not-coffee", "Драгон фрукт матча", 300], ["not-coffee", "Матча Манго", 300],
  ["signature-tea", "Имбирь-Малина", 380], ["signature-tea", "Ананас Маракуйя", 430], ["signature-tea", "Манго Маракуйя", 380], ["signature-tea", "Ягодный", 380], ["signature-tea", "Облепиховый", 430], ["signature-tea", "Анчан", 380], ["signature-tea", "Киви фейхоя", 380],
].map(([section, name, price, detail = ""]) => ({ id: `${section}-${name}`.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, "-").replace(/^-|-$/g, ""), section, name, price, detail }));

const FILTERS = [
  { id: "all", label: "Всё меню" }, { id: "food", label: "Кухня" }, { id: "dessert", label: "Десерты" }, { id: "coffee", label: "Кофе" }, { id: "cold", label: "Холодное" }, { id: "tea", label: "Чай" }, { id: "noncoffee", label: "Не кофе" },
];
const ADMIN_ORDERS = [
  { id: "A-1048", guest: "Мария В.", phone: "+7 999 123-45-67", time: "12:42", status: "new", payment: "Онлайн", channel: "Самовывоз", total: 920, note: "Позвонить гостю за 5 минут до готовности.", items: ["Капучино × 2", "Блинный десерт × 1"] },
  { id: "A-1047", guest: "Алексей К.", phone: "+7 999 863-04-21", time: "12:35", status: "work", payment: "Картой", channel: "В зале", total: 1260, items: ["Стейк Пеппер × 1", "Лимонад Амбер × 1"] },
  { id: "A-1046", guest: "Ирина С.", phone: "+7 999 412-80-15", time: "12:18", status: "ready", payment: "Онлайн", channel: "Самовывоз", total: 660, items: ["Латте × 1", "Сырники × 1"] },
  { id: "A-1045", guest: "Гость", phone: "—", time: "12:07", status: "work", payment: "Картой", channel: "В зале", total: 1180, items: ["Том ям × 1", "Раф Цитрусовый × 1", "Кукис × 1"] },
];
const STORAGE_KEY = "amber-coffee-cart";
let activeCategory = new URLSearchParams(window.location.search).get("category") || "all";
let cart = readCart();
let noticeTimer;
let menuImageObserver;

function readCart() {
  try { const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); return Array.isArray(parsed) ? parsed.filter((item) => item.id && item.quantity > 0 && findProduct(item.id)) : []; } catch { return []; }
}
function saveCart() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch { /* Storage may be unavailable. */ } }
function findProduct(id) { return PRODUCTS.find((product) => product.id === id); }
function findSection(id) { return SECTIONS.find((section) => section.id === id); }
function getProductVisual(product) { return findSection(product.section)?.image || "coffee"; }
function getMenuImageUrl(name) { return `./assets/menu-items/${encodeURIComponent(name.trim().toLocaleLowerCase("ru-RU"))}.webp`; }
function formatPrice(price) { return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(price); }
function getCartLines() { return cart.map((line) => ({ ...findProduct(line.id), quantity: line.quantity })).filter((line) => line.id); }
function getCartCount() { return cart.reduce((total, item) => total + item.quantity, 0); }

function createProductCard(product) {
  const section = findSection(product.section);
  const detail = product.detail || section.label;
  return `<article class="menu-product menu-product--${section.image}"><img class="menu-product__image" data-menu-image loading="lazy" decoding="async" alt="" aria-hidden="true" /><div class="menu-product__content"><div class="menu-product__top"><i class="ph ${section.icon}" aria-hidden="true"></i><span>${section.label}</span></div><div class="menu-product__body"><h3>${product.name}</h3><p>${detail}</p><div class="menu-product__footer"><strong>${formatPrice(product.price)}</strong><button class="icon-action" type="button" data-add-product="${product.id}" aria-label="Добавить «${product.name}» в корзину"><i class="ph ph-plus" aria-hidden="true"></i></button></div></div></div></article>`;
}

function initMenuImages(container) {
  if (menuImageObserver) menuImageObserver.disconnect();
  const images = [...container.querySelectorAll("[data-menu-image]")];
  const loadImage = (image) => {
    if (image.dataset.loaded) return;
    const title = image.closest(".menu-product")?.querySelector(".menu-product__body h3")?.textContent?.trim();
    if (!title) return;
    image.dataset.loaded = "true";
    image.addEventListener("load", () => image.closest(".menu-product")?.classList.add("menu-product--has-image"), { once: true });
    image.addEventListener("error", () => image.remove(), { once: true });
    image.src = getMenuImageUrl(title);
  };
  if (!("IntersectionObserver" in window)) { images.forEach(loadImage); return; }
  menuImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      loadImage(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "320px 0px" });
  images.forEach((image) => menuImageObserver.observe(image));
}

function initMainVideo() {
  const video = document.querySelector("[data-main-video]");
  const source = video?.querySelector("[data-src]");
  if (!video || !source || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const loadVideo = () => {
    if (!source.dataset.loaded) {
      source.src = source.dataset.src;
      source.dataset.loaded = "true";
      video.load();
    }
    video.play().catch(() => { /* Autoplay can be restricted by the browser. */ });
  };
  if (!("IntersectionObserver" in window)) { loadVideo(); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) loadVideo(); else video.pause();
    });
  }, { rootMargin: "160px 0px" });
  observer.observe(video);
}

function renderMenu() {
  const grid = document.querySelector("[data-product-grid]");
  const filters = document.querySelector("[data-menu-filters]");
  if (!grid || !filters) return;
  if (!FILTERS.some((filter) => filter.id === activeCategory)) activeCategory = "all";
  filters.innerHTML = FILTERS.map((filter) => `<button class="filter-row__button${filter.id === activeCategory ? " filter-row__button--active" : ""}" type="button" data-category="${filter.id}">${filter.label}</button>`).join("");
  const visibleSections = SECTIONS.filter((section) => activeCategory === "all" || section.filter === activeCategory);
  grid.innerHTML = visibleSections.map((section) => {
    const sectionProducts = PRODUCTS.filter((product) => product.section === section.id);
    return `<section class="catalog-group" id="${section.id}"><div class="catalog-group__heading"><div><i class="ph ${section.icon}" aria-hidden="true"></i><h2>${section.label}</h2></div><span>${sectionProducts.length} поз.</span></div><div class="product-grid">${sectionProducts.map(createProductCard).join("")}</div></section>`;
  }).join("");
  initMenuImages(grid);
}

function addToCart(id) {
  const existing = cart.find((line) => line.id === id);
  if (existing) existing.quantity += 1; else cart.push({ id, quantity: 1 });
  saveCart(); renderCart(); showNotice(`«${findProduct(id).name}» добавлен в корзину`);
}
function updateQuantity(id, amount) {
  const line = cart.find((item) => item.id === id);
  if (!line) return;
  line.quantity += amount;
  if (line.quantity < 1) cart = cart.filter((item) => item.id !== id);
  saveCart(); renderCart();
}
function removeLine(id) { cart = cart.filter((item) => item.id !== id); saveCart(); renderCart(); }

function renderCart() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((element) => { element.textContent = String(count); element.hidden = count === 0; });
  document.querySelectorAll("[data-cart-content]").forEach((container) => {
    const lines = getCartLines();
    if (!lines.length) { container.innerHTML = `<div class="empty-cart"><div class="empty-cart__icon"><i class="ph ph-handbag" aria-hidden="true"></i></div><h3>Здесь пока пусто</h3><p>Добавьте напиток или блюдо — заказ появится здесь.</p><a href="menu.html">Открыть меню <i class="ph ph-arrow-right" aria-hidden="true"></i></a></div>`; return; }
    const total = lines.reduce((sum, item) => sum + item.price * item.quantity, 0);
    container.innerHTML = `<div class="cart-lines">${lines.map((item) => { const section = findSection(item.section); const visual = getProductVisual(item); return `<div class="cart-line"><span class="cart-line__thumbnail cart-line__thumbnail--${visual}" aria-hidden="true"><i class="ph ${section.icon}"></i></span><div class="cart-line__main"><strong>${item.name}</strong><span>${formatPrice(item.price)}</span><div class="quantity-control"><button type="button" data-decrease="${item.id}" aria-label="Уменьшить количество"><i class="ph ph-minus" aria-hidden="true"></i></button><b>${item.quantity}</b><button type="button" data-increase="${item.id}" aria-label="Увеличить количество"><i class="ph ph-plus" aria-hidden="true"></i></button></div></div><button class="remove-line" type="button" data-remove="${item.id}" aria-label="Удалить из корзины"><i class="ph ph-trash" aria-hidden="true"></i></button></div>`; }).join("")}</div><div class="cart-total"><span>Итого</span><strong>${formatPrice(total)}</strong></div><button class="checkout-button" type="button" data-checkout>Перейти к оформлению <i class="ph ph-arrow-right" aria-hidden="true"></i></button><button class="clear-cart" type="button" data-clear-cart>Очистить корзину</button>`;
  });
}

function openCart() { document.body.classList.add("cart-open"); document.querySelectorAll(".cart-panel").forEach((panel) => panel.setAttribute("aria-hidden", "false")); }
function closeCart() { document.body.classList.remove("cart-open"); document.querySelectorAll(".cart-panel").forEach((panel) => panel.setAttribute("aria-hidden", "true")); }
function showNotice(message) { const element = document.querySelector("[data-notice]"); if (!element) return; element.textContent = message; element.classList.add("notice--visible"); window.clearTimeout(noticeTimer); noticeTimer = window.setTimeout(() => element.classList.remove("notice--visible"), 2800); }
function toggleMobileMenu(target) { const isOpen = document.body.classList.toggle("nav-open"); target.setAttribute("aria-expanded", String(isOpen)); target.innerHTML = `<i class="ph ${isOpen ? "ph-x" : "ph-list"}" aria-hidden="true"></i>`; }

function initInteractions() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, a");
    if (!target) return;
    if (target.matches("[data-menu-toggle]")) toggleMobileMenu(target);
    if (target.matches("[data-cart-open]")) openCart();
    if (target.matches("[data-cart-close]")) closeCart();
    if (target.dataset.category) { activeCategory = target.dataset.category; renderMenu(); window.history.replaceState({}, "", `menu.html${activeCategory === "all" ? "" : `?category=${activeCategory}`}`); }
    if (target.dataset.addProduct) addToCart(target.dataset.addProduct);
    if (target.dataset.increase) updateQuantity(target.dataset.increase, 1);
    if (target.dataset.decrease) updateQuantity(target.dataset.decrease, -1);
    if (target.dataset.remove) removeLine(target.dataset.remove);
    if (target.matches("[data-clear-cart]")) { cart = []; saveCart(); renderCart(); }
    if (target.matches("[data-checkout]")) { closeCart(); showNotice("Заказ сохранён. Онлайн-оформление можно подключить следующим шагом."); }
    if (target.closest(".main-nav")) document.body.classList.remove("nav-open");
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeCart(); document.body.classList.remove("nav-open"); } });
}

function formatAdminStatus(status) {
  return { new: "Новый", work: "В работе", ready: "Готов" }[status] || "Новый";
}

function initAdmin() {
  const root = document.querySelector("[data-admin-root]");
  if (!root) return;
  let selectedId = ADMIN_ORDERS[0].id;
  let filter = "all";
  let query = "";
  let toastTimer;
  const list = root.querySelector("[data-admin-order-list]");
  const detail = root.querySelector("[data-admin-detail]");
  const toast = document.querySelector("[data-admin-toast]");

  function showAdminToast(message) {
    toast.textContent = message;
    toast.classList.add("admin-toast--visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("admin-toast--visible"), 2400);
  }

  function renderAdmin() {
    const visibleOrders = ADMIN_ORDERS.filter((order) => {
      const hasText = `${order.id} ${order.guest}`.toLowerCase().includes(query.toLowerCase());
      return hasText && (filter === "all" || order.status === filter);
    });
    if (!visibleOrders.some((order) => order.id === selectedId) && visibleOrders[0]) selectedId = visibleOrders[0].id;
    root.querySelector("[data-admin-nav-count]").textContent = String(ADMIN_ORDERS.filter((order) => order.status === "new").length);
    root.querySelector("[data-admin-stat-new]").textContent = String(ADMIN_ORDERS.filter((order) => order.status === "new").length);
    list.innerHTML = visibleOrders.length ? visibleOrders.map((order) => `<button class="admin-order-row${order.id === selectedId ? " admin-order-row--active" : ""}" type="button" data-admin-order="${order.id}"><span class="admin-order-row__top"><strong>#${order.id}</strong><em class="admin-status admin-status--${order.status}">${formatAdminStatus(order.status)}</em></span><span class="admin-order-row__bottom"><span>${order.guest} · ${order.channel}</span><b>${formatPrice(order.total)}</b></span></button>`).join("") : `<p class="admin-empty">Заказов по этому фильтру нет.</p>`;
    const order = ADMIN_ORDERS.find((item) => item.id === selectedId) || visibleOrders[0];
    if (!order) { detail.innerHTML = `<div class="admin-empty-detail"><i class="ph ph-receipt"></i><h2>Выберите заказ</h2><p>Детали выбранного заказа появятся здесь.</p></div>`; return; }
    detail.innerHTML = `<div class="admin-detail-panel__top"><div><p class="admin-overline">Заказ #${order.id}</p><h2>${order.guest}</h2><p>${order.phone}</p></div><em class="admin-status admin-status--${order.status}">${formatAdminStatus(order.status)}</em></div><div class="admin-detail-meta"><div><span>Время</span><strong>${order.time}</strong></div><div><span>Получение</span><strong>${order.channel}</strong></div><div><span>Оплата</span><strong>${order.payment}</strong></div></div><section class="admin-detail-section"><h3>Состав заказа</h3><div class="admin-detail-items">${order.items.map((item) => `<div class="admin-detail-item"><span>${item}</span><b>—</b></div>`).join("")}</div><div class="admin-detail-total"><span>Итого</span><strong>${formatPrice(order.total)}</strong></div></section><section class="admin-detail-section"><h3>Комментарий</h3><textarea class="admin-note" data-admin-note placeholder="Добавьте заметку для команды">${order.note || ""}</textarea><button type="button" class="admin-note-save" data-admin-save-note>Сохранить заметку</button></section><section class="admin-detail-section"><h3>Статус заказа</h3><div class="admin-status-actions"><button type="button" data-admin-status="new" data-current="${order.status === "new"}">Новый</button><button type="button" data-admin-status="work" data-current="${order.status === "work"}">В работе</button><button type="button" data-admin-status="ready" data-current="${order.status === "ready"}">Готов</button></div><div class="admin-detail-actions"><button type="button" data-admin-print><i class="ph ph-printer" aria-hidden="true"></i>Чек</button><button type="button" data-admin-archive><i class="ph ph-archive" aria-hidden="true"></i>В архив</button></div></section>`;
  }

  root.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.dataset.adminOrder) { selectedId = target.dataset.adminOrder; renderAdmin(); }
    if (target.dataset.adminFilter) { filter = target.dataset.adminFilter; root.querySelectorAll("[data-admin-filter]").forEach((button) => button.classList.toggle("admin-filter--active", button.dataset.adminFilter === filter)); renderAdmin(); }
    if (target.dataset.adminStatus) { const order = ADMIN_ORDERS.find((item) => item.id === selectedId); order.status = target.dataset.adminStatus; renderAdmin(); showAdminToast(`Статус заказа #${order.id} изменён локально.`); }
    if (target.matches("[data-admin-save-note]")) { const order = ADMIN_ORDERS.find((item) => item.id === selectedId); order.note = root.querySelector("[data-admin-note]").value.trim(); showAdminToast(`Заметка к заказу #${order.id} сохранена локально.`); }
    if (target.matches("[data-admin-print]")) showAdminToast(`Чек заказа #${selectedId} подготовлен как заглушка.`);
    if (target.matches("[data-admin-archive]")) { const index = ADMIN_ORDERS.findIndex((item) => item.id === selectedId); const archived = ADMIN_ORDERS.splice(index, 1)[0]; selectedId = ADMIN_ORDERS[0]?.id || ""; renderAdmin(); showAdminToast(`Заказ #${archived.id} перенесён в архив локально.`); }
    if (target.matches("[data-admin-create]")) { const nextNumber = Math.max(...ADMIN_ORDERS.map((item) => Number(item.id.replace(/\D/g, "")))) + 1; const newOrder = { id: `A-${nextNumber}`, guest: "Новый гость", phone: "Не указан", time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }), status: "new", payment: "Не выбрана", channel: "Самовывоз", total: 0, note: "", items: ["Добавьте позиции в заказ"] }; ADMIN_ORDERS.unshift(newOrder); selectedId = newOrder.id; filter = "all"; root.querySelectorAll("[data-admin-filter]").forEach((button) => button.classList.toggle("admin-filter--active", button.dataset.adminFilter === "all")); renderAdmin(); showAdminToast(`Создан локальный заказ #${newOrder.id}.`); }
    if (target.matches("[data-admin-placeholder]")) showAdminToast("Это статичная CRM-заглушка: действие не подключено к серверу.");
  });
  root.querySelector("[data-admin-search]").addEventListener("input", (event) => { query = event.target.value; renderAdmin(); });
  renderAdmin();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderCart();
  initInteractions();
  initMainVideo();
  initAdmin();
});

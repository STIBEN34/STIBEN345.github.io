// Carrito de compras
let cart = [];
const MAIN_PRODUCT_PRICE = 330000;
const MAIN_PRODUCT_NAME = 'Oso de Rosas Por Mayor (x6)';
const WHATSAPP_NUMBER = '573168022611'; // Número sin +

// Datos de productos (27 productos)
const productsData = [
    { id: 1, name: 'Oso Fucsia Deluxe', price: 180000, image: 'images/oso-rojo-1.jpg' },
    { id: 2, name: 'Oso Morado Oscuro', price: 180000, image: 'images/osos rojo 2.jpg' },
    { id: 3, name: 'Oso Rosa Claro', price: 150000, image: 'images/osos rojo 3.jpg' },
    { id: 4, name: 'Oso Surtido Premium', price: 250000, image: 'images/oso morado 4.jpg' },
    { id: 5, name: 'Oso Fucsia Galaxia', price: 200000, image: 'images/oso panda 5.jpg' },
    { id: 6, name: 'Oso Morado Noche', price: 200000, image: 'images/oso panda 6.jpg' },
    { id: 7, name: 'Oso Rosa Pastel', price: 150000, image: 'images/oso amarillo 7.jpg' },
    { id: 8, name: 'Oso Fucsia Brillante', price: 220000, image: 'images/oso rojo 8.jpg' },
    { id: 9, name: 'Oso Multicolor XL', price: 350000, image: 'images/oso morado 9.jpg' },
    { id: 10, name: 'Oso Fucsia Mini', price: 120000, image: 'images/oso rosado 10.jpg' },
    { id: 11, name: 'Oso Morado Premium', price: 250000, image: 'images/stitch 11.jpg' },
    { id: 12, name: 'Oso Rosa Elegante', price: 200000, image: 'images/oso azul 12.jpg' },
    { id: 13, name: 'Oso Fucsia Lujo', price: 300000, image: 'images/oso rosa 13.jpg' },
    { id: 14, name: 'Oso Bicolor Fucsia-Morado', price: 280000, image: 'images/oso azul claro 14.jpg' },
    { id: 15, name: 'Oso Rosa Romántico', price: 230000, image: 'images/oso azul oscuro 15.jpg' },
    { id: 16, name: 'Oso Fucsia Edición Limitada', price: 400000, image: 'images/hello kity 16.jpg' },
    { id: 17, name: 'Oso Morado Encanto', price: 220000, image: 'images/oso blanco 17.jpg' },
    { id: 18, name: 'Oso Rosa Diamante', price: 280000, image: 'images/oso blanco 18.jpg' },
    { id: 19, name: 'Oso Fucsia Deslumbrante', price: 190000, image: 'images/oso blanco rosa 19.jpg' },
    { id: 20, name: 'Oso Morado Místico', price: 260000, image: 'images/oso negro 20.jpg' },
    { id: 21, name: 'Oso Rosa Celestial', price: 210000, image: 'images/unicornio21.jpg' },
    { id: 22, name: 'Oso Fucsia Atardecer', price: 240000, image: 'images/oso blanco 17.jpg' },
    { id: 23, name: 'Oso Morado Profundo', price: 270000, image: 'images/oso blanco rosa 19.jpg' },
    { id: 24, name: 'Oso Rosa Infinito', price: 290000, image: 'images/oso negro 20.jpg' },
    { id: 25, name: 'Oso Arcoíris Premium', price: 380000, image: 'images/hello kity 16.jpg' },
    { id: 26, name: 'Oso Fucsia Espectacular', price: 310000, image: 'images/stitch 11.jpg' },
    { id: 27, name: 'Oso Colección Especial', price: 420000, image: 'images/unicornio21.jpg' }
];

// Inicializar carrito desde localStorage
function initCart() {
    const savedCart = localStorage.getItem('tienda_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
    // Inicializar opciones de embalaje del producto principal
    updatePackOptions();
    updateSelectedPrice();
    // Generar grid de productos
    generateProductsGrid();
}

// Toggle para mostrar/ocultar opciones de producto en grid
function toggleProductOptionsGrid(productId) {
    const optionsDiv = document.getElementById(`product-options-${productId}`);
    if (optionsDiv) {
        optionsDiv.classList.toggle('active');
    }
}

// Generar grid de productos
function generateProductsGrid() {
    const gridContainer = document.getElementById('productsGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = productsData.map(product => `
        <div style="background: linear-gradient(135deg, #f9f0ff 0%, #ffe0f5 100%); border-radius: 12px; overflow: hidden; border: 2px solid rgba(255, 20, 147, 0.2); transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(138, 43, 226, 0.15);" class="product-item-grid">
            <div style="width: 100%; height: 180px; overflow: hidden; background: #ddd;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23f0e6ff%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2224%22%3E🌹%3C/text%3E%3C/svg%3E'">
            </div>
            <div style="padding: 1rem;">
                <h3 style="color: #1a0033; font-size: 0.9rem; margin: 0 0 0.5rem 0; font-weight: 700; line-height: 1.2;">${product.name}</h3>
                <!-- Precio dinámico según selección; no mostrar precio base aquí -->
                <button onclick="toggleProductOptionsGrid(${product.id})" style="width: 100%; padding: 0.6rem; background: linear-gradient(135deg, #ff1493 0%, #4a0080 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 0.9rem; box-shadow: 0 0 15px rgba(255, 20, 147, 0.4); transition: all 0.3s ease; margin-top: 0.8rem; margin-bottom: 0;" class="send-whatsapp-btn">⚡ VER OPCIONES</button>
                <div id="product-options-${product.id}" style="max-height: 0; overflow: hidden; opacity: 0; visibility: hidden; transform: translateY(-20px) scale(0.95); transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); margin: 0.75rem 0; background: linear-gradient(135deg, #6b0a8f 0%, #4a0080 100%); padding: 1.2rem; border-radius: 12px;">
                    <h4 style="color: white; font-size: 1.1rem; margin: 0 0 1rem 0; font-weight: 700;">Opciones de tamaño y embalaje</h4>
                    <label style="display:block; margin: 0 0 0.8rem 0; font-size: 1rem; color: white; font-weight: 700; animation: fadeInUp 0.5s ease forwards;">Tamaño:
                        <select id="sizeOption-${product.id}" style="width: 100%; padding: 0.8rem; margin-top: 0.5rem; border-radius: 10px; border: 2px solid rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.95); color: #333; font-size: 1rem; font-weight: 600; cursor: pointer;" onchange="updatePackOptions(${product.id}); updateSelectedPrice()">
                            <option value="19">19cm</option>
                            <option value="25">25cm</option>
                            <option value="grande">Grande</option>
                        </select>
                    </label>
                    <label style="display:block; margin: 0 0 0.8rem 0; font-size: 1rem; color: white; font-weight: 700; animation: fadeInUp 0.5s ease forwards; animation-delay: 0.1s;">¿En qué lo quieres?
                        <select id="packOption-${product.id}" style="width: 100%; padding: 0.8rem; margin-top: 0.5rem; border-radius: 10px; border: 2px solid rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.95); color: #333; font-size: 1rem; font-weight: 600; cursor: pointer;">
                            <!-- Se actualiza dinámicamente -->
                        </select>
                    </label>
                    <label style="display:block; margin: 0 0 0.8rem 0; font-size: 1rem; color: white; font-weight: 400; animation: fadeInUp 0.5s ease forwards; animation-delay: 0.2s;">
                        <input id="domicilioExtra-${product.id}" type="checkbox" style="margin-right: 0.5rem; width: 18px; height: 18px; cursor: pointer;" onchange="updateSelectedPrice()"> <span style="font-weight: 700;">Domicilio adicional (+\$20.000)</span>
                    </label>
                    <h5 style="font-size: 1rem; margin: 0.8rem 0 0.6rem 0; color: white; font-weight: 700;">Adicionales (opcionales)</h5>
                    <label style="font-size: 1rem; color: white; display: block; margin: 0.4rem 0; animation: fadeInUp 0.5s ease forwards; animation-delay: 0.3s;"><input type="checkbox" value="20000" data-label="Esmeraldas" class="addon-option-${product.id}" style="margin-right: 0.5rem; width: 18px; height: 18px; cursor: pointer;"> Esmeraldas (+\$20.000)</label>
                    <label style="font-size: 1rem; color: white; display: block; margin: 0.4rem 0; animation: fadeInUp 0.5s ease forwards; animation-delay: 0.4s;"><input type="checkbox" value="20000" data-label="Luces" class="addon-option-${product.id}" style="margin-right: 0.5rem; width: 18px; height: 18px; cursor: pointer;"> Luces (+\$20.000)</label>
                    <label style="font-size: 1rem; color: white; display: block; margin: 0.4rem 0; animation: fadeInUp 0.5s ease forwards; animation-delay: 0.5s;"><input type="checkbox" value="20000" data-label="Letreros" class="addon-option-${product.id}" style="margin-right: 0.5rem; width: 18px; height: 18px; cursor: pointer;"> Letreros (+\$20.000)</label>
                    <div style="display: flex; flex-direction: column; gap: 0.4rem; margin: 0.8rem 0 0; animation: fadeInUp 0.5s ease forwards; animation-delay: 0.6s;">
                        <span style="font-size: 1rem; color: white; font-weight: 700;">Cantidad:</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <button type="button" onclick="adjustProductQty(${product.id}, -1)" style="background: #ff1493; border: none; color: white; border-radius: 6px; width: 32px; height: 32px; cursor: pointer; font-weight: 700;">-</button>
                            <input id="quantity-${product.id}" type="number" value="1" min="1" style="width: 70px; text-align: center; padding: 0.4rem; border-radius: 6px; border: 2px solid rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.95); color: #333; font-size: 0.9rem; font-weight: 600;">
                            <button type="button" onclick="adjustProductQty(${product.id}, 1)" style="background: #4a0080; border: none; color: white; border-radius: 6px; width: 32px; height: 32px; cursor: pointer; font-weight: 700;">+</button>
                        </div>
                    </div>
                    <button onclick="sendProductToWhatsApp(${product.id}, '${product.name.replace(/'/g, "\\\u0027")}', ${product.price})" style="width: 100%; padding: 0.7rem; background: linear-gradient(135deg, #ff1493 0%, #4a0080 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 0.9rem; box-shadow: 0 0 15px rgba(255, 20, 147, 0.4); transition: all 0.3s ease; margin-top: 0.8rem; animation: fadeInUp 0.5s ease forwards; animation-delay: 0.7s;">📱 ENVIAR</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Inicializar opciones de embalaje para todos los productos
    productsData.forEach(product => {
        updatePackOptions(product.id);
    });
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountEl = document.getElementById('cart-count');
    const cartCountMobileEl = document.getElementById('cart-count-mobile');
    const cartCountMobileMenuEl = document.getElementById('cart-count-mobile-menu');
    if (cartCountEl) cartCountEl.textContent = count;
    if (cartCountMobileEl) cartCountMobileEl.textContent = count;
    if (cartCountMobileMenuEl) cartCountMobileMenuEl.textContent = count;
}

// Actualizar opciones de embalaje según tamaño seleccionado
function updatePackOptions(productId = null) {
    const sizeSelect = productId ? document.getElementById(`sizeOption-${productId}`) : document.getElementById('sizeOption');
    const packSelect = productId ? document.getElementById(`packOption-${productId}`) : document.getElementById('packOption');
    
    if (!sizeSelect || !packSelect) return;
    
    const selectedSize = sizeSelect.value;
    let packOptions = [];
    
    // Opciones según tamaño con precios indicados
    if (selectedSize === '19') {
        packOptions = [
            { text: 'Envoltura sencilla (50.000)', value: 50000 },
            { text: 'Caja de acetato (60.000)', value: 60000 }
        ];
    } else if (selectedSize === '25') {
        packOptions = [
            { text: 'Envoltura sencilla (95.000)', value: 95000 },
            { text: 'Caja de acetato (110.000)', value: 110000 }
        ];
    } else if (selectedSize === 'grande') {
        packOptions = [
            { text: 'Envoltura sencilla (110.000)', value: 110000 },
            { text: 'Caja de acetato (125.000)', value: 125000 }
        ];
    }
    
    // Actualizar select de embalaje
    packSelect.innerHTML = packOptions.map(opt => 
        `<option value="${opt.value}">${opt.text}</option>`
    ).join('');
}

function adjustProductQty(productId, change) {
    const input = document.getElementById(`quantity-${productId}`);
    if (!input) return;
    let value = parseInt(input.value, 10) || 1;
    value += change;
    if (value < 1) value = 1;
    input.value = value;
}

// Toggle para mostrar/ocultar opciones de producto
function toggleProductOptions() {
    const optionsPanel = document.querySelector('.product-options');
    const buttonsPanel = document.querySelector('.action-buttons');
    if (optionsPanel) {
        optionsPanel.classList.toggle('active');
    }
    if (buttonsPanel) {
        buttonsPanel.classList.toggle('menu-expanded');
    }
}

// Aumentar cantidad
function increaseQty() {
    const qtyInput = document.getElementById('quantity');
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

// Disminuir cantidad
function decreaseQty() {
    const qtyInput = document.getElementById('quantity');
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}

// Añadir al carrito (desde la página principal)
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    
    const existingProduct = cart.find(item => item.name === MAIN_PRODUCT_NAME);
    
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            id: 0,
            name: MAIN_PRODUCT_NAME,
            price: MAIN_PRODUCT_PRICE,
            quantity: quantity,
            image: 'images/1.jpg'
        });
    }
    
    localStorage.setItem('tienda_cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`✓ ${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} añadidas al carrito`);
    document.getElementById('quantity').value = 1;
}

// Mostrar menú de opciones primero (para modal de productos)
function showProductOptionsMenu(productId) {
    // Este número se usará para enfoque en opciones
    return true;
}

// Enviar producto individual a WhatsApp
function sendProductToWhatsApp(productId, productName, price) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const sizeSelect = document.getElementById(`sizeOption-${productId}`);
    const packSelect = document.getElementById(`packOption-${productId}`);
    const addonChecks = document.querySelectorAll(`.addon-option-${productId}:checked`);

    const sizeText = sizeSelect ? sizeSelect.options[sizeSelect.selectedIndex].text : '19cm';
    const packText = packSelect ? packSelect.options[packSelect.selectedIndex].text : 'Envoltura sencilla 19cm';
    const packValue = packSelect ? Number(packSelect.value) : 60000;
    const paymentMethod = document.getElementById('paymentMethod') ? document.getElementById('paymentMethod').value : 'Nequi';
    const domicilioProductCheckbox = document.getElementById(`domicilioExtra-${productId}`);
    const domicilioGlobalCheckbox = document.getElementById('domicilioExtra');
    const domicilioExtraChecked = domicilioProductCheckbox ? domicilioProductCheckbox.checked : (domicilioGlobalCheckbox ? domicilioGlobalCheckbox.checked : false);
    const domicilioText = domicilioExtraChecked ? 'Sí (+$20.000)' : 'No';
    const domicilioValue = domicilioExtraChecked ? 20000 : 0;

    const addonsList = [];
    let addonsValue = 0;
    addonChecks.forEach(check => {
        addonsList.push(check.dataset.label || check.parentElement.textContent.trim());
        addonsValue += Number(check.value);
    });

    const addonsText = addonsList.length ? addonsList.join(', ') : 'Ninguno';
    
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

    const selectedPrice = (packValue + domicilioValue + addonsValue) * quantity;
    const photoUrl = window.location.origin + '/' + product.image.replace(/^\//, '');

    const message = `Hola 👋\n\nMe interesa este producto:\n\n📦 ${productName}\n\n🧩 Opciones seleccionadas:\n- Tamaño: ${sizeText}\n- Embalaje: ${packText}\n- Domicilio adicional: ${domicilioText}\n- Método de pago: ${paymentMethod}\n- Adicionales: ${addonsText}\n- Cantidad: ${quantity}\n\n💰 Precio calculado: $${selectedPrice.toLocaleString('es-CO')}\n\n📸 Foto del producto: ${photoUrl}\n\n¿Disponibilidad y detalles de envío?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

// Agregar producto al carrito (desde grid)
function addProductToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    localStorage.setItem('tienda_cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`✓ ${product.name} añadido al carrito`);
}

// Abrir productos modal
function openProductsModal() {
    const modal = document.getElementById('productsModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Cerrar productos modal
function closeProductsModal() {
    const modal = document.getElementById('productsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Abrir carrito modal
function openCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'flex';
        updateCartDisplay();
    }
}

// Cerrar carrito modal
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Actualizar vista del carrito
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItemsList) return;
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p style="text-align: center; color: #666;">Tu carrito está vacío</p>';
        if (cartTotal) cartTotal.textContent = '0';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartItemsList.innerHTML = cart.map((item, index) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem; border-bottom: 1px solid #eee;">
            <div>
                <p style="margin: 0 0 0.3rem 0; color: #1a0033; font-weight: 700;">${item.name}</p>
                <p style="margin: 0; color: #666; font-size: 0.9rem;"> x${item.quantity} = $${(item.price * item.quantity).toLocaleString('es-CO')}</p>
            </div>
            <button onclick="removeFromCart(${index})" style="background: #ff4444; color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-weight: 700;">×</button>
        </div>
    `).join('');
    
    if (cartTotal) cartTotal.textContent = total.toLocaleString('es-CO');
}

// Remover del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('tienda_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

// Obtener resumen del carrito como texto de confirmación
function getCartSummaryText() {
    if (cart.length === 0) return 'Tu carrito está vacío';

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Nequi/Daviplata';

    let total = 0;
    let itemsText = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `${index + 1}. ${item.name}\n   Cantidad: ${item.quantity}\n   Subtotal: $${itemTotal.toLocaleString('es-CO')}`;
    }).join('\n\n');

    return `*RESUMEN DE CONFIRMACIÓN*\n\n${itemsText}\n\n💳 Método de pago: ${paymentMethod}\n💰 TOTAL: $${total.toLocaleString('es-CO')}\n\n¿Deseas confirmar este pedido?`;
}

// Confirmar y enviar carrito a WhatsApp
function confirmAndSendCart() {
    if (cart.length === 0) {
        alert('El carrito está vacío, agrega productos antes de enviar.');
        return;
    }

    const confirmText = getCartSummaryText();
    const confirmed = window.confirm(confirmText);

    if (!confirmed) {
        showNotification('Pedido no enviado. Revisa las opciones e intenta de nuevo.');
        return;
    }

    const sendBtn = document.getElementById('sendCartWhatsappBtn');
    if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.textContent = 'Enviando...';
    }

    setTimeout(() => {
        sendCartToWhatsApp();
        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.textContent = '📱 Enviar a WhatsApp';
        }
    }, 500);
}

// Enviar carrito a WhatsApp
function sendCartToWhatsApp() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Nequi/Daviplata';

    let message = '🛒 *MI CARRITO DE COMPRAS*\n\n';
    message += 'Productos:\n';
    
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name}\n   Cantidad: ${item.quantity}\n   Subtotal: $${itemTotal.toLocaleString('es-CO')}\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━\n`;
    message += `💳 Método de pago: ${paymentMethod}\n`;
    message += `💰 *TOTAL: $${total.toLocaleString('es-CO')}*\n\n`;
    message += `Por favor confirma disponibilidad, envío y datos para pago (Nequi/Daviplata).`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Notificación flotante
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(90deg, #4a0080 0%, #ff1493 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(138, 43, 226, 0.4);
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Galería de imágenes
function setupGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    const images = [
        "images/oso-rojo-1.jpg",
        "images/osos rojo 2.jpg",
        "images/osos rojo 3.jpg",
        "images/oso morado 4.jpg"
    ];
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Remover clase active de todos
            thumbnails.forEach(t => t.classList.remove('active'));
            // Añadir al actual
            thumbnail.classList.add('active');
            // Cambiar imagen
            const img = mainImage.querySelector('img');
            img.src = images[index];
        });
    });
}

// Animaciones CSS para notificaciones
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Formatear moneda colombiana
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
}

// Evento para tecla Enter en cantidad
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    setupGallery();
    updateSelectedPrice();
    addAnimationStyles();
    setupMobileMenu();
    
    const qtyInput = document.getElementById('quantity');
    if (qtyInput) {
        qtyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addToCart();
            }
        });
    }
});

// Configurar menú móvil
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace del menú desplegable
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}
    


// Manejo de favoritos
function toggleWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem('tienda_wishlist')) || [];
    
    const index = wishlist.indexOf(productName);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Eliminado de favoritos');
    } else {
        wishlist.push(productName);
        showNotification('✓ Añadido a favoritos');
    }
    
    localStorage.setItem('tienda_wishlist', JSON.stringify(wishlist));
}

// Validación de email para newsletter
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Compartir en redes sociales
function shareOnSocial(platform) {
    const url = window.location.href;
    const title = 'Oso de Rosas Por Mayor (x6) - Tienda Valú';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Función para ver carrito (simulada)
function viewCart() {
    console.log('Carrito actual:', cart);
    const cartSummary = cart.map(item => `${item.quantity}x ${item.name}: $${item.price.toLocaleString('es-CO')}`).join('\n');
    if (cart.length > 0) {
        alert(`CARRITO DE COMPRAS:\n\n${cartSummary}\n\nTotal: $${calculateTotal().toLocaleString('es-CO')}`);
    } else {
        alert('Tu carrito está vacío');
    }
}

// Calcular total del carrito
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getSelectedOptions() {
    const sizeOption = document.getElementById('sizeOption');
    const packOption = document.getElementById('packOption');
    const paymentMethodOption = document.getElementById('paymentMethod');
    const domicilioExtra = document.getElementById('domicilioExtra');
    const addons = Array.from(document.querySelectorAll('.addon-option:checked'));
    const quantityInput = document.getElementById('quantity');

    const packVal = Number(packOption ? packOption.value : 0);
    const addonsVal = addons.reduce((sum, el) => sum + Number(el.value), 0);
    const domicilioVal = domicilioExtra && domicilioExtra.checked ? 20000 : 0;

    const unitPrice = packVal + addonsVal + domicilioVal;
    const quantity = quantityInput ? Math.max(1, parseInt(quantityInput.value, 10) || 1) : 1;
    const totalPrice = unitPrice * quantity;

    const selectedAddons = addons.map(el => el.parentElement.textContent.trim()).join(', ') || 'Ninguno';

    return {
        size: sizeOption ? sizeOption.options[sizeOption.selectedIndex].text : '19cm',
        pack: packOption ? packOption.options[packOption.selectedIndex].text : 'Envoltura sencilla',
        paymentMethod: paymentMethodOption ? paymentMethodOption.value : 'Nequi',
        domicilio: domicilioExtra && domicilioExtra.checked ? 'Sí (+$20.000)' : 'No',
        addons: selectedAddons,
        quantity: quantity,
        unitPrice: unitPrice,
        totalPrice: totalPrice
    };
}

function updateSelectedPrice() {
    const selected = getSelectedOptions();
    const display = document.getElementById('selected-price');
    if (display) {
        display.textContent = `Precio unidad: $${selected.unitPrice.toLocaleString('es-CO')} · Cantidad: ${selected.quantity} · Total: $${selected.totalPrice.toLocaleString('es-CO')}`;
    }
}

// Comprar ahora (desde la página principal)
function buyNow() {
    const selected = getSelectedOptions();

    const image = document.querySelector('#mainImage img') ? document.querySelector('#mainImage img').src : '';
    const message = `Hola 👋\n\n*COMPRA RÁPIDA Osos Tiada*\n\n📦 Producto: Osos Tiada - Colección Premium\n📏 Tamaño: ${selected.size}\n📦 Embalaje: ${selected.pack}\n🧾 Domicilio adicional: ${selected.domicilio}\n💳 Método de pago: ${selected.paymentMethod}\n🎁 Adicionales: ${selected.addons}\n\n💵 Precio por unidad: $${selected.unitPrice.toLocaleString('es-CO')}\n📊 Cantidad: ${selected.quantity}\n💰 Total estimado: $${selected.totalPrice.toLocaleString('es-CO')}\n\n📸 Foto: ${image}\n\n¿Disponibilidad y detalles de envío?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

// Solicitud directas de especiales
function sendEspeciales() {
    const message = `Hola 👋\n\nQuiero productos especiales.\n- Modelo: Osos Tiada\n- Preferencias: (cuéntame tus colores o diseño)\n- Cantidad: (indica aquí)`;
    const phoneNumber = '573168022611';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Contactar por WhatsApp
function contactWhatsApp() {
    const message = `Hola, quiero more información sobre los productos de tiada`;
    const phoneNumber = '573168022611';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

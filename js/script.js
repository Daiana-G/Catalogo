/*    let carrito = [];

    function agregarAlCarrito(nombre, precio, color) {
        carrito.push({ nombre, precio, color });
        actualizarCarrito();
        alert(`Producto agregado al carrito: ${nombre} - Color: ${color}`);
    }


    function actualizarCarrito() {
        const lista = document.getElementById('lista-carrito');
        const total = document.getElementById('total-carrito');
        lista.innerHTML = '';
        let suma = 0;
        carrito.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio} - Color: ${item.color}`;
            // Botón para eliminar
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.classList.add('eliminar-btn');
            eliminarBtn.onclick = () => eliminarDelCarrito(index);
            li.appendChild(eliminarBtn);
            lista.appendChild(li);
            suma += item.precio;
        });
        total.textContent = `Total: $${suma}`;
    }

    function eliminarDelCarrito(index) {
        carrito.splice(index, 1);
        actualizarCarrito();
    }

    function toggleCarrito() {
        const carritoEl = document.getElementById('carrito');
        carritoEl.style.display = carritoEl.style.display === 'block' ? 'none' : 'block';
    }

    function copiarPedido() {
        if (carrito.length === 0) {
            alert('No agregaste productos todavía.');
            return;
        }
        let mensaje = 'Hola! Quiero pedir estos productos:\n';
        let suma = 0;
        carrito.forEach(item => {
            mensaje += `- ${item.nombre} ($${item.precio}) - Color: ${item.color}\n`;
            suma += item.precio;
        });
        mensaje += `Total: $${suma}`;

        navigator.clipboard.writeText(mensaje).then(() => {
            alert('Pedido copiado! Enviá captura o pegalo para pedir 💖');
        });
    }
*/


let carrito = [];

function agregarAlCarrito(button) {
    const card = button.closest('.card');
    
   
    const nombre = card.querySelector('h3') ? card.querySelector('h3').textContent : card.querySelector('h4').textContent;

   
    const precio = parseInt(card.querySelector('h4') ? card.querySelector('h4').textContent.replace('$', '') : card.querySelector('p').textContent.replace('$', ''));
    
  
    const colorSelect = card.querySelector('select');
    const color = colorSelect ? colorSelect.value : null;
    

    carrito.push({ nombre, precio, color });
    actualizarCarrito();
    
 
    alert(`Producto agregado al carrito: ${nombre}${color ? ' - Color: ' + color : ''}`);
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const total = document.getElementById('total-carrito');
    lista.innerHTML = '';
    let suma = 0;
    
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}${item.color ? ' - Color: ' + item.color : ''}`;
        
    
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('eliminar-btn');
        eliminarBtn.onclick = () => eliminarDelCarrito(index);
        li.appendChild(eliminarBtn);
        lista.appendChild(li);
        suma += item.precio;
    });
    
    total.textContent = `Total: $${suma}`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function toggleCarrito() {
    const carritoEl = document.getElementById('carrito');
    carritoEl.style.display = carritoEl.style.display === 'block' ? 'none' : 'block';
}

function copiarPedido() {
    if (carrito.length === 0) {
        alert('No agregaste productos todavía.');
        return;
    }
    let mensaje = 'Hola! Quiero pedir estos productos:\n';
    let suma = 0;
    
    carrito.forEach(item => {
        mensaje += `- ${item.nombre} ($${item.precio})${item.color ? ' - Color: ' + item.color : ''}\n`;
        suma += item.precio;
    });
    
    mensaje += `Total: $${suma}`;
    
    navigator.clipboard.writeText(mensaje).then(() => {
        alert('Pedido copiado! Enviá captura o pegalo para pedir 💖');
    });
}






document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target.id === 'modal') {
        this.style.display = 'none';
    }
});





function abrirImagen(src) {
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagen-modal');
    imagenModal.src = src;
    modal.style.display = 'flex';
}


function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}




document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarModal();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var listaCarrito = document.getElementById('lista-carrito');
    var totalElement = document.getElementById('total');
    var productosContainer = document.getElementById('productos');
    var carrito = [];

    var productos = [
                { nombre: 'Postre Americana con Dulce de Leche 240cc', precio: 1324.80 },
        { nombre: 'Postre Americana Con Arandanos 240cc', precio: 1324.80 },
        { nombre: 'Postre Banana Split 240cc', precio: 1324.80 },
        { nombre: 'Postre Chocolate con Dulce de Leche 240cc', precio: 1324.80 },
        { nombre: 'Postre Dulce de Leche Tentacion 240cc', precio: 1324.80 },
        { nombre: 'Helado de Frutilla 240cc', precio: 1069.78 },
        { nombre: 'Helado de Chocolate 240cc', precio: 1069.78 },
        { nombre: 'Helado de Vainilla 240cc', precio: 1069.78 },
        { nombre: 'Helado de Dulce de Leche 240cc', precio: 1069.78 },

        // ... tus productos aquí ...
    ];

    function agregarAlCarrito(index) {
        var producto = productos[index];

        var nuevoProducto = {
            nombre: producto.nombre,
            precio: producto.precio
        };

        carrito.push(nuevoProducto);
        mostrarCarrito();
    }

    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
        var totalPrecio = 0;

        carrito.forEach(function (producto) {
            var itemCarrito = document.createElement('li');
            itemCarrito.textContent = producto.nombre;
            listaCarrito.appendChild(itemCarrito);

            totalPrecio += producto.precio;
        });

        totalElement.textContent = totalPrecio.toFixed(2);
    }

    function enviarPedidoPorWhatsApp() {
        var mensaje = 'Pedido:';
        carrito.forEach(function (producto) {
            mensaje += '%0A' + producto.nombre;
        });
        mensaje += '%0A%0ATotal: $' + totalElement.textContent;

        var numeroTelefono = '1162661234'; // Reemplaza con tu número de WhatsApp

        var url = 'https://wa.me/message/F56WBXAHOTRHA1' + numeroTelefono + '?text=' + mensaje;
        window.open(url, '_blank');
    }

    productos.forEach(function (producto, index) {
        var productoElement = document.createElement('div');
        productoElement.className = 'producto';
        productoElement.setAttribute('data-nombre', producto.nombre);
        productoElement.setAttribute('data-precio', producto.precio);

        var nombrePrecioElement = document.createElement('p');
        nombrePrecioElement.textContent = producto.nombre + ' - $' + producto.precio.toFixed(2);
        productoElement.appendChild(nombrePrecioElement);

        productoElement.addEventListener('click', function () {
            agregarAlCarrito(index);
        });

        productosContainer.appendChild(productoElement);

            function agregarAlCarrito(index) {
        var producto = productos[index];

        // Buscar si el producto ya está en el carrito
        var productoEnCarrito = carrito.find(item => item.nombre === producto.nombre);

        if (productoEnCarrito) {
            // Si el producto ya está en el carrito, incrementar la cantidad
            productoEnCarrito.cantidad++;
        } else {
            // Si el producto no está en el carrito, agregarlo con cantidad 1
            var nuevoProducto = {
                nombre: producto.nombre,
                
                cantidad: 1
            };

            carrito.push(nuevoProducto);
        }

        mostrarCarrito();
    }

    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
   

        carrito.forEach(function (producto) {
            var itemCarrito = document.createElement('li');
            itemCarrito.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} `;
            listaCarrito.appendChild(itemCarrito);

        });

        totalElement.textContent = totalPrecio.toFixed(2);
    }
    });

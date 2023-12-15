document.addEventListener('DOMContentLoaded', function () {
    var listaCarrito = document.getElementById('lista-carrito');
    var totalElement = document.getElementById('total');
    var productosContainer = document.getElementById('productos');
    var carrito = [];

    var productos = [
                { nombre: 'American Cookies', precio: 3039.35 },
        { nombre: 'Banana Split', precio: 3039.35 },
        { nombre: 'Chocolate', precio: 3039.35 },
        { nombre: 'Chocolate al 80% Cacao', precio: 5617.75 },
        { nombre: 'Chocolate Amargo', precio: 3039.35 },
        { nombre: 'Chocolate C/Almendra', precio: 4971.45 },
        { nombre: 'Chocolate Marroc', precio: 4971.45 },
        { nombre: 'Chocolate Suizo', precio: 4971.45 },
        { nombre: 'Chocotorta', precio: 3039.35 },
        { nombre: 'Crema Americana', precio: 3039.35 },
        { nombre: 'Creme Brulee', precio: 3039.35 },
        { nombre: 'Crema Suiza', precio: 3039.35 },
        { nombre: 'DDL Cookies', precio: 3039.35 },
        { nombre: 'Dulce de Leche', precio: 3039.35 },
        { nombre: 'DDL Casero', precio: 3039.35 },
        { nombre: 'DDL Granizado', precio: 3039.35 },
        { nombre: 'DDL Rocher', precio: 4971.45 },
        { nombre: 'Marquisse de Chocolate', precio: 3334.75 },
        { nombre: 'Lemon Pie', precio: 3039.35 },
        { nombre: 'DDL Tentacion', precio: 3039.35  },
        { nombre: 'Frambuesa', precio: 4971.45 },
        { nombre: 'Frutilla a la Crema', precio: 3039.35 },
        { nombre: 'Frutilla al Agua', precio: 3039.35  },
        { nombre: 'Limonada C/Menta y Jengibre', precio: 3039.35  },
        { nombre: 'Mango C/Naranja', precio: 3039.35 },
        { nombre: 'Maracuya C/Naranja', precio: 3039.35  },
        { nombre: 'Mousse de Maracuya', precio: 3039.35  },
        { nombre: 'Naranja C/Frutilla', precio: 3039.35  },
        { nombre: 'Sambayon', precio: 3334.75 },
        { nombre: 'Tramontana', precio: 3039.35  },
        { nombre: 'Pomelo C/Campari', precio: 4971.45 },
        { nombre: 'Vainilla', precio: 3039.35  },
        { nombre: 'Kinotos al Whisky', precio: 3039.35  },
        { nombre: 'Tiramisu', precio: 3039.35  },
        { nombre: 'Gianduia', precio: 4971.45 },
        { nombre: 'Nocciola C/Nutella', precio: 4971.45 },
        { nombre: 'Pistaccio Italiano', precio: 5617.75 },
        { nombre: 'Sambayon Nueces y Pasas', precio: 4971.45 },
        { nombre: 'Sambayon C/Cerezas', precio: 4971.45 },
        { nombre: 'Anana', precio: 3039.35  },
        { nombre: 'Coco C/DDL', precio: 3039.35 },
        { nombre: 'Corinto C/Arandanos y Lima', precio: 4971.45 },
        { nombre: 'DDL Granizado  C/DDL', precio: 3039.35 },
        { nombre: 'Cheesecake de Lima', precio: 3334.75 },
        { nombre: 'Chocolate Peru 56%', precio: 3334.75 },
        { nombre: 'Limon', precio: 3039.35  },
        { nombre: 'Mascarpone C/Frutos del Bosque', precio: 3039.35},
        { nombre: 'Menta Granizada', precio: 3039.35  }

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

    // Agregar evento al botón
    var enviarPedidoBtn = document.getElementById('enviarPedido');
    enviarPedidoBtn.addEventListener('click', enviarPedidoPorWhatsApp);
});

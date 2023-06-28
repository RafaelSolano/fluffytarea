const menuItems = document.querySelectorAll('.menu__item-text');


/*Llamamos a todos los botones categorias */
menuItems.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    menuItems.forEach((boton) => boton.classList.remove('active'));

    e.currentTarget.classList.add('active');

    if (e.currentTarget.id != 'todos') {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = 'Todos los productos';
      cargarProductos(productos);
    }
  });
});
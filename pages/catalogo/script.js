const productos=[
  {   id:1,
      img:"../../img/products/1-pedigree.svg",
      nombre: "Max Vita - Alimento Perro Cachorro Crecimiento Saludable Pollo  ",
      Descripcion:"Science Diet Puppy Small Paws ",
      precio:88.749,
  },
  {    id:2,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/78483_158298_Ganador___Premium_Cachorro_1652215796_500x500.jpg",
      nombre: "Ganador Premium",
      Descripcion:"Cachorro",
      precio:50.205,
      
  },
  {   id:3,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/79678_Royal_Canin___Bulldog_Adulto_1657638085_0_500x500.jpg",
      nombre: "Royal Canin ",
      Descripcion:"Bull Dog Adulto",
      precio:88.704,
  },
  {   id:4,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://s3.us-east-1.amazonaws.com/laikapp/images_products/a713317e0cf3cc5f446e6b27fe83de81.jpg",
      nombre: "Nutrecan  ",
      Descripcion:"Alimentos Perros Campo",
      precio:62.916,
  },
  {   id:5,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/5bcfe755dc8fd3850c241444592100ee_1681394089.jpg",
      nombre: "Max Vita ",
      Descripcion:"Alimento Perro Cachorro",
      precio:50.185,
  },
  {   id:6,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/78136_Nutrique_Perro_Cachorro_Talla_Mediana_1651524834_0_500x500.jpg",
      nombre: "Nutrique ",
      Descripcion:"Perro Cachorro Talla Mediana",
      precio:42.356,
  },
  {   id:7,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/134_138110_Purina_Pro_Plan___Cachorros_Razas_Peque__as_1645479687_500x500.jpg",
      nombre: " Pro Plan Puppy",
      Descripcion:" Razas Pequeñas",
      precio: 50.156,
  },
  {
      id:8,
      img:"https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://laikapp.s3.amazonaws.com/dev_images_products/18833_133298_DOG_CHOW___TODOS_LOS_TAMA__OS_CON_CORDERO_1643318082_500x500.jpg",
      nombre: "Dog Chow ",
      Descripcion:"Salud Visible Adultos",
      precio:105.655,
  },
  {   id:9,
      img:"../../img/products/1-pedigree.svg",
      nombre: "Max Vita - Alimento Perro Cachorro Crecimiento Saludable Pollo  ",
      Descripcion:"Science Diet Puppy Small Paws ",
      precio:88.749,
},


];
console.log(productos);

let container_product_card = document.querySelector('.container_product-card');

const render_products = (arrProducts) => {
 
  let i = 0
  
  arrProducts.forEach(product => {
    let card_product = document.createElement('div')
    card_product.classList.add('card-product')
    card_product.innerHTML = `

    <figure>
    <img class='card-product__img' src="${product.img}" alt="">
  </figure>
  <div class="card-product__content-txt">
    <div class='card-product__text-main'>
      <p class='card-product__title'>${product.nombre}</p>
      <p class='card-product__stars'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </p>
    </div>

    <div class='card-product__footer'>
      <div class='card-product__total'>
        <p> $ ${product.precio}</p>
      </div>

      <div class='card-product__btn-cont'>
        <p onclick='add_to_car(${product.id})' class='card-product__btn-add-shopping'>
          <i class="fa-solid fa-bag-shopping"></i>
        </p>
        <p id='fav-icon${i}' class='card-product__btn-add-fav'>
          <i id='fav-i${i}' class="fa-regular fa-heart"></i>
          <!--Corazon ative  <i class="fa-solid fa-heart"></i> -->
        </p>
      </div>
    </div>
  </div>
</div>
    
    
    `
    
    container_product_card.append(card_product)
    ++i
  })
}
render_products(productos)



/* --------------------------- carrito de compras --------------------------- */



function existObjetoConID(array, id) {
  const objetosConID = array.filter(objeto => objeto.id == id);
  return objetosConID.length > 0;
}


let shopping_car = []


//Agregar item al carrito de compras
const add_to_car = (id) => {
  let product = productos.find(product => product.id == id)

  if (existObjetoConID(shopping_car, product.id)) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Este producto ya existe',
      showConfirmButton: false,
      timer: 1500
    })
  
  } else {
    shopping_car.push(product)
    console.log("Objeto agregado correctamente");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Agregado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    
  }
  render_shopping_car()
}

// renderizar la lista del carrito de compras

const container_carrito = document.querySelector('.shopping_cart__list');

const render_shopping_car = () => {
  console.log(shopping_car);
  let shopping_card = ''

  shopping_car.forEach(product => {
    
    
    shopping_card += `
    <div class='shopping_cart__item'>
          <div class='shopping_cart__img'>
          <img src="${product.img}" alt="">
          <p>${product.nombre}</p>
          <p class='shopping_cart_delete'><i class="fa-solid fa-trash-can"></i></i></p>
        </div>
          <div class='shopping_cart__price'>
          <p>valor: $ ${product.precio}</p>
          </div>
      </div>
    
    `
  })
  container_carrito.innerHTML = shopping_card;

  render_shopping_car_total(shopping_car)
  
}
/* ------------------- numero del productos en el carrito ------------------ */

const numeroCarrito = document.querySelector('.count-product');
const actualizarNumeroCarrito = (carrito) => {
  let num = carrito.length;
  numeroCarrito.textContent = num;
}


/* ------------------------------- suma total ------------------------------- */
const sum_total_car = (arrayObjetos) => {
  let total = 0;
  arrayObjetos.forEach(element => {
    total += element.precio;
  })
  return total
}

const render_shopping_car_total = (arr) => {
  const total_txt = document.querySelector('.shopping_car__total-text');
  total_txt.textContent = `${sum_total_car(arr).toFixed(2)}`
}





  


  




  
import { servicesProducts } from "../service/product-service.js";

const productContainer = document.querySelector("[data-product]");

function createCard(name, price, image){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
       <div class="image-container">
                 <img src="${image}" alt="${name}">  
            </div>

                <div class="card-container--info">
                  <p class="descripcion">${name}</p>

            <div class="card-cantainer--value">
                <p>${price}</p>
                <button class="delete-button" data-id="${id}">
                    <img src="./Imagenes/iconos/icono-basurero.png" alt="">
                </button>
            </div>
                </div>
    `

    productContainer.appendChild(card);
    return card;
}

const render = async () =>{
    try {
       const listProducts = await servicesProducts.productList();
       console.log(listProducts)
    } catch (error) {
        console.log(error) 
    }
}

render();














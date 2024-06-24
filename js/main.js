import { servicesProducts } from "../js/product-service.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createCard(name, price, image, id){
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
    `;

    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", async()=>{
        try {
            await servicesProducts.deleteProduct(id);
            card.remove();
        } catch (error) {
            console.log(error);
        }
    })

    productContainer.appendChild(card);
    return card;
}

const render = async () =>{
    try {
       const listProducts = await servicesProducts.productList();
       
       listProducts.forEach(product => {
          productContainer.appendChild(
            createCard(
                product.name,
                product.price,
                product.image,
                product.id
            )
          )
       });

    } catch (error) {
        console.log(error) 
    }
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-imagen]").value;
    
    servicesProducts.createProducts(name, price, image).then((res) => console.log(res)).catch((err) => console.log(err) )
})
render();















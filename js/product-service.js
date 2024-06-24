const productList = () =>{
    return fetch("http://localhost:3001/products")
     .then((res) => res.json())
     .catch((err) => console.log(err));
};

const createProducts = (name, price, image) =>{
    return fetch("http://localhost:3001/products", {
        method: "Post",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    })
    .then((res) => res.json())
    .catch((err => console.log(err)))
}

const deleteProduct = (id) => {
    return fetch(`http://localhost:3001/products/${id}`, {
        method: "Delete",
        headers:{
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .catch((err => console.log(err)))
}

export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,
}
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


/* fetch("https://kea-alt-del.dk/t7/api/products/" + id) */
/* .then((res)=>res.json())
.then((data) => showProduct(data)); */

function showProduct(product){
    console.log(product);
    document.querySelector(".purchase_box .product_name").textContent = product.name;
    document.querySelector(".purchase_box .beskrivelse").textContent = product.description;
    document.querySelector(".purchase_box .category").textContent = product.categori;

    document.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector(".product_image").alt = product.name;
    document.querySelector(".name").textContent = product.name;
    // Info
    document.querySelector(".info .sankested").textContent = product.sankested;
    document.querySelector(".info .sæson").textContent = product.season;
    document.querySelector(".info .sankning").textContent = product.relid;
}

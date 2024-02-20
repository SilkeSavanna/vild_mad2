/* const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch("https://lzlmyauwovywksmqbdpd.supabase.co" + id)
.then((res)=>res.json())
.then((data) => showProduct(data));

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
 */

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://lzlmyauwovywksmqbdpd.supabase.co/rest/v1/products?id=", {
    headers: {
        apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bG15YXV3b3Z5d2tzbXFiZHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMTA0NzgsImV4cCI6MjAyMzU4NjQ3OH0.ioVoS0GtSqfqHflUCHxA-qPJO-D3_oM-ahW35ZFbDuU"
    },
})


.then((res) => res.json())
.then((json) => showProduct(json)); // Antar at data er en array med et produkt

function showProduct(product) {
    console.log(product);
    document.querySelector(".purchase_box .product_name").textContent = product.name;
    document.querySelector(".purchase_box .beskrivelse").textContent = product.description;
    document.querySelector(".purchase_box .category").textContent = product.category;

    document.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector(".product_image").alt = product.name;
    document.querySelector(".name").textContent = product.name;
    // Info
    document.querySelector(".info .sankested").textContent = product.sankested;
    document.querySelector(".info .sæson").textContent = product.season;
    document.querySelector(".info .sankning").textContent = product.relid;
}

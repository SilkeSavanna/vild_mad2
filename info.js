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

const apiUrl = `https://lzlmyauwovywksmqbdpd.supabase.co/rest/v1/data_vildmad?id=eq.${id}`;

fetch(apiUrl, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bG15YXV3b3Z5d2tzbXFiZHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMTA0NzgsImV4cCI6MjAyMzU4NjQ3OH0.ioVoS0GtSqfqHflUCHxA-qPJO-D3_oM-ahW35ZFbDuU",
  },
})
  .then((res) => res.json())
  .then((json) => showPlant(json));

function showPlant(plantArray) {
  /*   console.log(plantJSON);
  console.log("Plant name" + plantJSON.name); */
  if (plantArray.length > 0) {
    const plantJSON = plantArray[0];
    console.log(plantJSON)
    console.log(plantJSON.name)
    document.querySelector(".purchase_box .name").textContent =
    plantJSON.name;

    document.querySelector(".purchase_box .beskrivelse").textContent =
    plantJSON.description;
  document.querySelector(".category").textContent =
    plantJSON.categori;
  // Img
  document.querySelector(".product_image").src = plantJSON.image;
  document.querySelector(".product_image").alt = plantJSON.name;
  document.querySelector(".name").textContent = plantJSON.name;
  // Info
  document.querySelector(".info .sankested").textContent = plantJSON.sankested;
  document.querySelector(".info .sæson").textContent = plantJSON.seasons;
/*   document.querySelector(".info .sankning").textContent = plantJSON.relid; */
  } else {
    console.error("No plant data found");
  }

}

/* function showPlant(plantArray) {
    if (plantArray.length > 0) {
        const plant = plantArray[0];
        document.querySelector(".plant_name").textContent = plant.title;
    } else {
        console.error("No plant data found");
    }
}; */

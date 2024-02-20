window.addEventListener("DOMContentLoaded", init);

const productURL =
  "https://lzlmyauwovywksmqbdpd.supabase.co/rest/v1/data_vildmad";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bG15YXV3b3Z5d2tzbXFiZHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMTA0NzgsImV4cCI6MjAyMzU4NjQ3OH0.ioVoS0GtSqfqHflUCHxA-qPJO-D3_oM-ahW35ZFbDuU";

let vildmadTemplate;
let vildmadContainer;

function init() {
  console.log("init");

  vildmadTemplate = document.querySelector(".vildmad_template");
  console.log("vildmad_template", vildmadTemplate);

  vildmadContainer = document.querySelector(".vildmad_container");
  console.log("vildmad_container", vildmadContainer);

  //starter med at hente dataen fra URL & then bruges til at kalde en funktion når dataten er hentet. Herefter laver man responset om til JSON//
  fetch(productURL, {
    headers: {
      apikey: apikey,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showVildmad(json);
    });
}

function showVildmad(productJSON) {
  console.log(productJSON);
  let productClone;

  productJSON.forEach((product) => {
    console.log("Product", product);
    productClone = vildmadTemplate.cloneNode(true).content;
    productClone.querySelector(".vildmad_image").src = product.image;
    productClone.querySelector(".vildmad_name").textContent = product.name;
    vildmadContainer.appendChild(productClone);
  });
}

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

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("season");

  if (!query) {
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
  } else {
    let apiUrl = productURL + `?seasons=cs.["${query}"]`;

    fetch(apiUrl, {
      headers: {
        apikey: apikey,
      },
    })
      .then((res) => res.json())
      .then(showVildmad);
  }
}

function showVildmad(productJSON) {
  console.log(productJSON);
  let productClone;

  productJSON.forEach((product) => {
    console.log("Product", product);
    productClone = vildmadTemplate.cloneNode(true).content;
    productClone.querySelector(".vildmad_image").src = product.image;
    productClone.querySelector(".vildmad_name").textContent = product.name;
    productClone.querySelector("a").href = `info.html?id=${product.id}`;
    vildmadContainer.appendChild(productClone);
  });

  document.querySelectorAll(".button1").forEach((button) => {
    button.addEventListener("click", (event) => {
      const season = event.target.textContent.trim();
      goToSeason(season);
    });
  });
}

function goToSeason(season) {
  location.href = `list.html?season=${season}`;
}

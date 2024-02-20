
//const for at få den til at søge i url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const apiUrl = `https://lzlmyauwovywksmqbdpd.supabase.co/rest/v1/data_vildmad?id=eq.${id}`;


//fetch delen med url og api key
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

/* dataen der fetches fra apiurl er et array og skal derfor treates som et,
derfor skal vi tage fat i det første element i det array og gå videre derfra */
  if (plantArray.length > 0) {
    const plantJSON = plantArray[0];
    console.log(plantJSON)
    console.log(plantJSON.name)
    document.querySelector(".purchase_box .name").textContent =
    plantJSON.name;
    // Content
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

  // hvis array ikke eksistere så for man error "no plant data found"
  } else {
    console.error("No plant data found");
  }

}

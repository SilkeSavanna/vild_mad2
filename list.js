const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("season");

fetch(
  `https://lzlmyauwovywksmqbdpd.supabase.co/rest/v1/data_vildmad?seasons=cs.["${query}"]`,
  {
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bG15YXV3b3Z5d2tzbXFiZHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMTA0NzgsImV4cCI6MjAyMzU4NjQ3OH0.ioVoS0GtSqfqHflUCHxA-qPJO-D3_oM-ahW35ZFbDuU",
    },
  }
)
  .then((res) => res.json())
  .then(showVildmad);

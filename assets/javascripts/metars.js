document.addEventListener("DOMContentLoaded", async () => {
  const el = document.getElementById("metar");
  try {
    const res = await fetch("/api/metar");
    console.log(res);
    const data = await res.json();
    console.log(data);

    const temp = data.temp || "N/A";
    const ceiling = data.ceiling || "N/A";
    const wind = data.currently || "N/A";

    el.innerHTML = `
      <div class="text-gray-800 space-y-2">
        <p class="font-semibold text-lg">${data.metar}</p>
        <p class="text-sm">Temp: ${temp}</p>
        <p class="text-sm">Ceiling: ${ceiling}</p>
        <p class="text-sm">Wind: ${wind}</p>
      </div>
    `;
  } catch (err) {
    console.error(err);
    el.innerHTML = "<p class='text-red-600'>Failed to load METAR data.</p>";
  }
});

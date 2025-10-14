document.addEventListener("DOMContentLoaded", async () => {
  const el = document.getElementById("metar");
  try {
    const res = await fetch("/metar");
    console.log(res);
    const data = await res.json();
    console.log(data);

    el.innerHTML = `
      <div class="text-gray-800 space-y-2">
        <p class="font-semibold text-lg">${data.metar}</p>
      </div>
    `;
  } catch (err) {
    console.error(err);
    el.innerHTML = "<p class='text-red-600'>Failed to load METAR data.</p>";
  }
});

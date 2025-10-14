export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Intercept only /metar
    if (url.pathname === "/metar") {
      try {
        // Fetch METAR JSON from SAIAWOS
        const res = await fetch(
          "https://online.saiawos.com/N23/ios/webgetjson.php",
        );
        const data = await res.json();
        const metarText = data.metar?.trim() || "No METAR found";

        return new Response(JSON.stringify({ metar: metarText }), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // allows browser JS to fetch
          },
        });
      } catch (err) {
        return new Response(
          JSON.stringify({ metar: "Failed to fetch METAR" }),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            status: 500,
          },
        );
      }
    }

    // Pass all other requests to Pages (Jekyll static assets)
    return env.ASSETS.fetch(request);
  },
};

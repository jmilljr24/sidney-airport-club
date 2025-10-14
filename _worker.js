export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/metar") {
      const res = await fetch(
        "https://online.saiawos.com/N23/ios/webgetjson.php",
      );
      const data = await res.json();

      const metarText = data.metar?.trim() || "No METAR found";

      return new Response(JSON.stringify({ metar: metarText }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Let Jekyll files render normally
    return env.ASSETS.fetch(request);
  },
};

export async function onRequest() {
  try {
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
  } catch (err) {
    return new Response(JSON.stringify({ metar: "Failed to fetch METAR" }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 500,
    });
  }
}

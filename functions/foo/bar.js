export async function onRequestPost(context) {
    // recive a json post request
    const request = context.request;
    const body = request.body;

    try {
      const env = context.env;
      const zipzap = await env.KV_SANDBOX.get("zipzap", "text");
      console.log("zipzap --> ");
      console.log(zipzap);
      console.log("body -->");
      console.log(JSON.stringify(body));

      if (zipzap !== null && zipzap === body.zipzap && body.zipzap !== "") {
        await env.KV_SANDBOX.put("last_video", JSON.stringify(body));
        return new Response(JSON.stringify({status: "ok"}), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
    } catch (error) {
      console.log(error);
    }

    return new Response(JSON.stringify({status: "unauthorized"}), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }
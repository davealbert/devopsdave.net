export async function onRequest(context) {
    // recive a json post request
    const request = context.request;
    const body = request.body;

    try {
      const env = context.env;
      const zipzap = await env.KV_SANDBOX.get("zipzap", "text");
      console.log("zipzap --> ");
      console.log(zipzap);
      console.log("body -->");
      console.log(body);

      if (zipzap !== null && zipzap === body.zipzap && body.zipzap !== "") {
        // save json to KV store with key last video
        await env.KV_SANDBOX.put("last_video", body);
        return new Response(JSON.stringify({status: "ok"}), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
    } catch (error) {
      console.log(error);
    }

    return new Response(JSON.stringify({status: "unauthorized"}), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }
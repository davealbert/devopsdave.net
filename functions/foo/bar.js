export async function onRequest(context) {
    // recive a json post request
    const request = context.request;
    const body = request.body;
    const json = JSON.parse(body);
    const env = context.env;

    const zipzap = await env.KV_SANDBOX.get("zipzap", "text");

    if (zipzap !== null && zipzap === json.zipzap && json.zipzap !== "") {
        // save json to KV store with key last video
        await env.KV_SANDBOX.put("last_video", body);
        return new Response(JSON.stringify({status: "ok"}), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({status: "unauthorized"}), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }
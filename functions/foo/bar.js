export async function onRequestPost(context) {
    try {
      const json = await context.request.json()
      const env = context.env;
      const zipzap = await env.KV_SANDBOX.get("zipzap", "text");

      console.log("zipzap --> ");
      console.log(zipzap);

      console.log("json -->");
      console.log(json);

      console.log(JSON.stringify(json));

      if (zipzap !== null && zipzap === json.zipzap && json.zipzap !== "") {
        await env.KV_SANDBOX.put("last_video", JSON.stringify(json));
        return new Response(JSON.stringify({status: "ok"}), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
    } catch (error) {
      console.log(error);
    }

    return new Response(JSON.stringify({status: "unauthorized"}), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }
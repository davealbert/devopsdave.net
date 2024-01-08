export async function onRequest(context) {
    let counter = -1;
    try {
        const env = context.env;
        counter = parseInt(await env.KV_SANDBOX.get("counter", "text"));
        if (counter === null || isNaN(counter)) {
            counter = 0;
        }
        counter++;
        await env.KV_SANDBOX.put("counter", counter);
    } catch (error) {
        console.log(error);
    }
    return new Response(`Hello, world! Visitor number ${counter}`);
  }
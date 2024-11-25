import "jsr:@std/dotenv/load";
import sayHello from "@try-deno/helpers";

const POST = 3000;

console.log("GREETING: ", Deno.env.get("GREETING"));

Deno.serve({ port: POST }, () => {
  return new Response("Deno!");
});

console.log(`Listening on http://localhost:${POST} ...`);
console.log(`Hello SERVER and ${sayHello()}!`);

import sayHello from '@try-deno/helpers';

const POST = 3000;

Deno.serve({ port: POST, hostname: '0.0.0.0' }, (_req) => {
  return new Response('Deno!');
});

console.log(`Listening on http://localhost:${POST} ...`);
console.log(`Hello SERVER and ${sayHello()}!`);

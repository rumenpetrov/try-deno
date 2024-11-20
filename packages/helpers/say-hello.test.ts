import { assertEquals } from '@std/assert';
import sayHello from './say-hello.ts';

Deno.test(function addTest() {
  assertEquals(sayHello(), 'Hello from the helpers packages!');
});

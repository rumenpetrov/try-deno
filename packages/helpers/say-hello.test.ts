import { assertEquals } from '@std/assert';
import sayHello from './say-hello.ts';

// Wait for https://github.com/denoland/deno/issues/24504 to be implemented and teak the compiler options for each package
Deno.test(function addTest() {
  assertEquals(sayHello(), 'Hello from the helpers packages!');
});

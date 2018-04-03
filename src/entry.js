/**
 * A demo that showcases features that transpile Espruino.
 *
 * Run test() at the prompt.
 *
 * > test()
 */
async function test() {
  // Block scoping
  let value = 'is-outside';
  {
    let value = 'is-inside';
    console.log(`value (inside-block): ${value}`);
  }
  console.log(`value (outside-block): ${value}`);

  // object spread
  const first = {a: 1, b: 2, c: 3, d: 'not-this'};
  const second = {d: 4, e: 5, f: 6};
  const together = {
    ...first,
    ...second,
  };
  console.log(JSON.stringify(together, null, 2));

  // short-hand properties
  const age = 34;
  const name = 'Jane Doe';
  const person = { age, name };
  console.log(JSON.stringify(person, null, 2));

  // object destructuring
  const bus = {wheels: 4, color: 'yellow'};
  const { wheels, color} = bus;
  console.log(`wheels: ${wheels} color: ${color}`);

  // default parameter
  (function(parameter = 'default-value') {
    console.log(`A default parameter: ${parameter}`);
  }());

  const wait = duration => new Promise(resolve => setTimeout(resolve, duration));

  // array destructuring & async/await
  const [a,b] = await Promise.all(['first-promise', Promise.resolve('second-promise')]);
  await wait(2000);
  console.log(`After 2 seconds, promise results: ${a} ${b}`);
}
global.test = test;


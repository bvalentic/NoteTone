export function add(a: number, b: number): number {
  console.log(`Adding a + b...`)
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(add(2, 2));
}

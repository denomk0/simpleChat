async function start() {
  return await Promise.resolve('Async is working');
}

start().then(console.log);

class Util {
  static id = new Date();
}

const tmp = 42;

console.log('Util id:', Util.id);
console.log('tmp', tmp);
const redis = require('promise-redis')();
const client = redis.createClient();
// exports.client = redis.createClient({ host: 'redis', port: 6379});

exports.saveToCacheUsingKeyValueWith = async (key, value) => {
  await client.set(key, JSON.stringify(value), 'EX', 15);
}

exports.getCacheOf = async (key) => {
  const cache = await client.get(key);
  return JSON.parse(cache);
}

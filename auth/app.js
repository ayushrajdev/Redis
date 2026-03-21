import { createClient } from 'redis';

const redisClient = createClient({
    password: '995528',
    username: 'default',
});
await redisClient.connect();

const result = await redisClient.ping();
console.log(result);

await redisClient.quit();

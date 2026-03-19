import redisClient, { disconnectRedisDb } from './config/redis.config.js';

//select the database 1
// redisClient.select(1)

// let hexData = '7b226e616d65223a226179757368222c22616765223a31397d';
// console.log(Buffer.from(hexData, 'hex').toString());

const user = {
    name: 'ayush',
    age: 19,
};

// await redisClient.set('user', JSON.stringify(user));

// await redisClient.json.set('user:34', '$', user);
// let result = await redisClient.json.get('user:34', {
//     path: '$.*',
// });

await redisClient.json.set("user:34","$.hobbies",[])
await redisClient.json.arrAppend("user:34","$.hobbies",["cricket","basketball"])

// await redisClient.json.del('user:34', { path: '$.age' });
// console.log(result);
await disconnectRedisDb();

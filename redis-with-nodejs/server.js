import { createClient } from 'redis';

// it will automatically connect to the localhost redis server and it will return the redisClient which will be automatically connected to the database and by default database 0 is selected

const redisClient = await createClient().connect();

redisClient.setJson = async (keyName, data) => {
    return redisClient.set(keyName, JSON.stringify(data));
};

redisClient.getJson = async (keyName) => {
    return await redisClient.get(keyName);
};

//select the database 1
// redisClient.select(1)
let hexData = '7b226e616d65223a226179757368222c22616765223a31397d';

console.log(Buffer.from(hexData, 'hex').toString());

const user = {
    name: 'ayush',
    age: 19,
};

await redisClient.set('user', JSON.stringify(user));

await redisClient.quit();

import { createClient } from 'redis';

// it will automatically connect to the localhost redis server and it will return the redisClient which will be automatically connected to the database and by default database 0 is selected

const redisClient = await createClient()
    .on('error', (err) => {
        console.log('error in redis client');
        process.exit(1);
    })
    .connect();

redisClient.setJson = function (keyName) {
    return this.set(keyName, JSON.stringify(data));
};

redisClient.getJson = async function (params) {
    const data = await this.get(keyName);
    return JSON.parse(data);
};

export async function disconnectRedisDb(params) {
    return await redisClient.quit();
}

export default redisClient;

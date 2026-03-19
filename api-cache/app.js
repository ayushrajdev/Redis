import express from 'express';
import { createClient } from 'redis';

const redisClient = createClient();

redisClient.on('error', () => {});

await redisClient.connect();
const app = express();

app.get('/user/:id', async (req, res) => {
    const userDetail = await redisClient.json.get(`user:${req.params.id}`);
    console.log(userDetail);
    if (!userDetail) {
        const userData = await getUser(req.params.id);
        const redisKey = `user:${req.params.id}`;
        await redisClient.json.set(redisKey, '$', userData);
        redisClient.expire(redisKey, 5);
        return res.json(userData);
    }
    return res.json(userDetail);
});

// if we make changes in the cached data then we have to manually clear the cache so that the api should not send the stale data 
app.put('/user/:id', async (req, res) => {
    const redisKey = `user:${req.params.id}`;
    redisClient.del(redisKey);
});

app.listen(4000, () => {
    console.log('Server started on 4000');
});

async function getUser(userId) {
    const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
    return await response.json();
}

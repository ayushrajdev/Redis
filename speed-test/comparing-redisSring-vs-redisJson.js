import { createClient } from "redis";

const redisClient = createClient();

await redisClient.connect();

// 📝 Redis Write
console.time("Redis JSON Write");
await redisClient.json.set("user:json", "$", { _id: "123", name: "ProCodrr" });
console.timeEnd("Redis JSON Write");


console.time("Redis string Write");
await redisClient.set("user:string",JSON.stringify({ _id: "123", name: "ProCodrr" }) );
console.timeEnd("Redis string Write");

await redisClient.quit()
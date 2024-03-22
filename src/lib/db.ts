import { Redis } from "@upstash/redis";

// Asserting the types of environment variables and providing defaults
const redisUrl: string | undefined = process.env.UPSTASH_REDIS_REST_URL;
const redisToken: string | undefined = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!redisUrl || !redisToken) {
  throw new Error("Redis URL or token is not provided.");
}

export const db = new Redis({
  url: redisUrl,
  token: redisToken,
});

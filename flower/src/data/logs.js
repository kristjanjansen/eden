import { flatten, random, any } from "../utils/utils";

const services = ["api", "vote", "db", "result", "redis", "javaworker"];

const messages = [
  "* Running on http://0.0.0.0:80/ (Press CTRL+C to quit)",
  "STATEMENT:  SELECT vote, COUNT(id) AS count FROM votes GROUP BY vote",
  "4 errors found.",
  "error: Line 8 exceeds the maximum line length of 100 (max-len) at src/components/Vote.vue:8:1:",
  'Error performing query: error: relation "votes" does not exist',
  "setting privileges on built-in objects ... ok",
  "****************************************************",
  "WARNING: No password has been set for the database.",
  "         Postgres port to access your database.",
  "[nodemon] starting `node server.js`",
  "1:C 31 Oct 2019 15:46:40.515 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo",
  "Waiting for redis"
];

const hashes = [
  "-v-fed0c96742-d997dc847-sfw6t",
  "-v-919f5e6814-699db7bb77-zks8z",
  "-v-3c79ac391e-6ccd864f5-ngt7j",
  "-v-f18954441e-685759b6f8-nkwxt"
];

export const logs = flatten(
  Array.from({ length: 100 })
    .map((_, i) => {
      return {
        service: any(services),
        message: any(messages),
        timestamp: `2019-10-31T15:46:42.${String(i).padStart(3, "0")}Z`,
        delay: random(0, 100)
      };
    })
    .map(l => {
      l.hash = `${l.service}${any(hashes)}`;
      return l;
    })
);

/*

api                       → 2019-10-31T15:46:42.140Z → api-v-fed0c96742-d997dc847-sfw6t  * Running on http://0.0.0.0:80/ (Press CTRL+C to quit)
vote                      → 2019-10-31T15:47:40.545Z → vote-v-919f5e6814-699db7bb77-zks8z 4 errors found.
db                        → 2019-10-31T15:50:26.333Z → db-v-3c79ac391e-6ccd864f5-ngt7j STATEMENT:  SELECT vote, COUNT(id) AS count FROM votes GROUP BY vote
vote                      → 2019-10-31T15:47:40.543Z → vote-v-919f5e6814-699db7bb77-zks8z error: Line 8 exceeds the maximum line length of 100 (max-len) at src/components/Vote.vue:8:1:
result                    → 2019-10-31T15:50:38.567Z → result-v-f18954441e-685759b6f8-nkwxt Error performing query: error: relation "votes" does not exist
db                        → 2019-10-31T15:46:46.344Z → db-v-3c79ac391e-6ccd864f5-ngt7j setting privileges on built-in objects ... ok
db                        → 2019-10-31T15:46:51.364Z → db-v-3c79ac391e-6ccd864f5-ngt7j ****************************************************
db                        → 2019-10-31T15:46:51.364Z → db-v-3c79ac391e-6ccd864f5-ngt7j WARNING: No password has been set for the database.
db                        → 2019-10-31T15:46:51.364Z → db-v-3c79ac391e-6ccd864f5-ngt7j          This will allow anyone with access to the
db                        → 2019-10-31T15:46:51.364Z → db-v-3c79ac391e-6ccd864f5-ngt7j          Postgres port to access your database. In
result                    → 2019-10-31T15:46:42.173Z → result-v-f18954441e-685759b6f8-nkwxt [nodemon] starting `node server.js`
redis                     → 2019-10-31T15:46:40.563Z → redis-v-bf81dea1ac-787b568565-5ljpl 1:C 31 Oct 2019 15:46:40.515 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
javaworker                → 2019-10-31T15:47:11.624Z → javaworker-v-efaf9aec9d-67dcf67b5b-kfx68 Waiting for redis

*/

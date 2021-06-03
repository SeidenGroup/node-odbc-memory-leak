
const pricing = require('./api/pricing');
const config = require('./config');
const db2 = require('./api/db2');

let heapdump = require('heapdump');
let nextMBThreshold = 700;

setInterval(function () {
  var memMB = process.memoryUsage().rss / 1048576;
  if (memMB > nextMBThreshold) {
    heapdump.writeSnapshot()
    nextMBThreshold += 100
  }
}, 60000);

(async () => {
  console.log(`Connecting to database on ${process.env.DB2_SYSTEM}...`);

  try {
    await db2.connect(config.db.connectionString);
  } catch (e) {
    console.error(`Database connection failed to ${process.env.DB2_SYSTEM}. ${e}`);
    console.error(e);
    process.exit(1);
  }

  setInterval(async () => {
    try {
      await pricing.getPricing();
      console.log('result');
    } catch (e) {
      console.error(e);
    }
  }, 500);
})();

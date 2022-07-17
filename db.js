/** Database setup for BizTime. */

const { Clinet } = require ("pg");

const client = new Client ({
    connectionString: "postgresql:///biztime"
});

client.connect();


module.exports = client;
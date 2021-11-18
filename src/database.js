const Pool = require('pg').Pool

const pool = new Pool({
    host: 'ec2-54-146-82-179.compute-1.amazonaws.com',
    user: 'bbnhnomydqvsyg',
    password: 'a6eca4ab268bdd8e472cc5832f2b4e35c52b44d3c548562d0f0a8a07c8e07e07',
    database: 'd2lpsc37dfnm5k',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;
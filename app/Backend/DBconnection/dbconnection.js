const { Pool } = require("pg")


    export const Connect = new Pool({
        connectionString : process.env.DATABASE_URL
    })

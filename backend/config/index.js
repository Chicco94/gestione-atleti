const env = process.env.NODE_ENV || 'production';

const config = { 
    development: {
        host: "test.ubware.it",
        database: "custom_enrico",
        username: "devdb",
        password: "devdb",
        dialect: "mysql",
        operatorsAliases: "false",
        logging: false
    },
    production: {
        host: "test.ubware.it",
        database: "custom_enrico",
        username: "devdb",
        password: "devdb",
        dialect: "mysql",
        operatorsAliases: "false",
        logging: false
    }
}

module.exports = { 
    ...config[env]
}
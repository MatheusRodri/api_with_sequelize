module.exports = {
    development:{
        database:{
            host:"127.0.0.1",
            port: 3306,
            name: "spoiler",
            dialect: "mysql",
            user: "root",
            password: "matheus250302"
        }
    },
    production:{
        database:{
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}
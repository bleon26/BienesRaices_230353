import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:process.env.DB_DOMAIN,
    port:process.env,DB_PORT,
    dialect:'mysql',
    define:{
        timestamps:true
    },
    pool:{
        max:5,
        main:0,
        acquire:30000,
        locale:10000
    },
});
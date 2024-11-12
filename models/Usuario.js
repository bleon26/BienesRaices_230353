import{DateTypes} from 'sequelize'
import db from '../config/db.js'

const Usuario = db.define('tb_usuarios',{
    name:{
        type: DataTypes.STRING ,
        allowNull:false
    },
    email:{
        type: DataType.STRING,
        allowNull:false
    },
    password:{
        type: DataType.STRING,
        allowNull:false
    },
    Token:{
        type: DateTypes.STRING,
        confrimado:DateTypes.BOOLEAN
    }
})
export default Usuario;
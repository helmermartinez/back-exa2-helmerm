const pool = require('../database');
const helpers = require('../libs/helpers');

const userCtr = {}

userCtr.createUser = async(req, res)=>{
    try{
        const {nomuser, password} = req.body;
        const password2 = await helpers.encryptPassword(password);
        const response = await pool.query('insert into usuario(nomuser, password) values($1,$2)',[nomuser, password2]);
        return res.status(200).json(`Usuario ${ nomuser } creado correctamente...!`);
    }catch(e){
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

module.exports = userCtr;
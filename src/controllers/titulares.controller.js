const pool = require('../database');

const titularCtr = {}

//Listar Titulares
titularCtr.readAllTitular = async(req, res)=>{
    try{
        const response = await pool.query('select * from titulares');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e)
        return res.status(500).json('Internal server error...!!!');
    }
}

titularCtr.createTitular = async(req, res)=>{
    try{
        const{titulo, descripcion} = req.body;
        const result = await pool.query('insert into titulares(titulo, descripcion) values($1,$2)', [titulo, descripcion]);
        return res.status(200).json(`Titular ${titulo} creado correctamente...!`);
    }catch(e){
        console.log(e)
        return res.status(500).json('Internal server error...!');
    }
}

titularCtr.deleteTitular = async(req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from titulares where idtitulares = $1', [id]);
        return res.status(200).json(`Titular ${id} eliminado correctamente...!`);
    }catch(e){
        console.log(e)
        return res.status(500).json('Internal server error...!');
    }
}

titularCtr.updateTitular = async(req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const{titulo, descripcion} = req.body;
        const response = await pool.query('update titulares set titulo = $1, descripcion = $2 where idtitulares = $3',
        [titulo, descripcion, id]);
        return res.status(200).json(`Titular ${id} actualizado correctamente...!`);
    }catch(e){
        console.log(e)
        return res.status(500).json('Internal server error...!');
    }
}

module.exports = titularCtr;

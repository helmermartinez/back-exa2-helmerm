const express = require('express')
const morgan = require('morgan') 
const titularesRoutes = require('./routes/titulares.routes') 
const userRoutes = require('./routes/user.routes') 
const authRoutes = require('./routes/auth.routes')

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('Backend Examen2 Funciona Correctamente...!');
});

app.use('/api/titulares', titularesRoutes);

app.use('/api/users', userRoutes);
app.use('/api/auth/', authRoutes);


module.exports = app;
const app = require('./app')

app.listen(process.env.PORT || 5000);

console.log('server listen on port', 5000);
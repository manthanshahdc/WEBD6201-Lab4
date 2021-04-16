const app = require('./src/app');
const port = process.env.PORT || 3080;

const server = app.listen(port, function() {
    console.log('Server listening on port ' + port);
});

server.timeout = 300000;

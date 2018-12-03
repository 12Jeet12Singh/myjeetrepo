const server = require('express')();
const bodyparser = require('body-parser');
const mongoose = require('./node_modules/mongoose')
const {parse, stringify} = require('flatted/cjs');

const config = require('./config');
const { port } =config;


server.use(bodyparser.json());
//server.use(stringify);

require('./dbutil')(config);
require('./routs/get')(server);
require('./routs/post')(server);

server.listen( port , () =>
  {//console.log(port);
    console.log(`Server ready at http://localhost:${port}`);
    }
)
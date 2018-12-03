const mongoose = require('mongoose');//require('../node_modules/mongodb');
const MailSchema = require('./models/mail');

module.exports = config => {
 mongoose.Promise = global.Promise;
 mongoose.connect(config.mongoURI);

 mongoose.model('Mail', MailSchema);
 console.log(mongoose.connection);
};
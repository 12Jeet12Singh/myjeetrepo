const {PORT, SERVIC_DB_PORT, Q_URI} = process.env;
module.exports = {
    port : PORT || 3000,
    serviceDatabase : {
        port: SERVIC_DB_PORT || 4000
    },
   q : {uri: Q_URI || 'amqp://swaupeon:VhXjT-P3WiSXPQp4B2unFYDnY74uqn2H@dinosaur.rmq.cloudamqp.com/swaupeon'}
};
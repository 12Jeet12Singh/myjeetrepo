const {Q_URI,MJ_API_PUBLIC,MJ_API_SECRET} = process.env;
module.exports = {
   // port : PORT || 5000,
   q : {uri: Q_URI || 'amqp://swaupeon:VhXjT-P3WiSXPQp4B2unFYDnY74uqn2H@dinosaur.rmq.cloudamqp.com/swaupeon'},
   mailjet:{
      apiSecret:MJ_API_SECRET,
      apiPublic: MJ_API_PUBLIC
   }
};
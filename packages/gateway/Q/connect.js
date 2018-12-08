const amqp =  require('amqplib/callback_api');
const {q :{uri}} = require('../config')

const q = 'test_q';

let channel=null;

amqp.connect(uri,(err, con)=>{
  if(err) { console.log('Error in craete conn '+ err.message);  throw new Error(err);}
  else{
   con.createChannel((err,ch)=> {
        if(err){  console.log('Error in craete channel '+ err.message);  throw new Error(err); }
        else{
            ch.assertQueue(q,{durable: true});
            //ch.sendToQueue(q, Buffer.from('hello rabbit mq'));
            //console.log('connected to Rabbit MQ');
            channel = ch;
        }
   })};
   
});

module.exports = pushToMessageQ= msg => {
    if(!channel)setTimeout(pushToMessageQ(msg),1000);

    channel.sendToQueue(q,Buffer.from(msg));
    return {m: 'done'};
}
const amqp =  require('amqplib/callback_api');
const {q :{uri}} = require('./config')

const q = 'test_q';

let channel;
amqp.connect(uri,(err, con)=>{
  if(err) { console.log('Error in craete conn '+ err.message);  throw new Error(err);}
  else{
   con.createChannel((err,ch)=> {
        if(err){  console.log('Error in craete channel '+ err.message);  throw new Error(err); }
        else{
            ch.assertQueue(q,{durable: true});
          
            ch.consume(q,msg => {console.log('I got a message '+ msg.content);}, {noAck : true})
           
        }
   })}
   
   setTimeout(()=> {
       con.close(); console.log('Connection timed out');
       process.exit(0); 
   }, 10000);

});
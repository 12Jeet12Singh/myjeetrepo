const amqp =  require('amqplib/callback_api');
const {q :{uri}} = require('../config')
const sendMail = require('../handlar/sendMail')

module.exports =()=>{


    const q = 'test_q';
    let channel=null;
    
    amqp.connect(uri,(err, con)=>{
      if(err) { console.log('Error in craete conn '+ err.message);  throw new Error(err);}
      else{
       con.createChannel((err,ch)=> {
            if(err){  console.log('Error in craete channel '+ err.message);  throw new Error(err); }
            else{
                ch.assertQueue(q,{durable: true});

                ch.consume(q, msg =>{ let mail; 
                    try{ mail= JSON.parse(msg.content.toString())}
                    catch(e){console.log(e); mail = msg.content.toString();}

                      console.log('I Received A Mail!!!', mail);
                      sendMail(mail);
                      ch.ack(msg);
                   },{noAck:false});
            
            }
       })};
       
    });
    
    
}


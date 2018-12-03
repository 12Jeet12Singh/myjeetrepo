const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const mailHandler = async ({ body: {subjsec, receiver, content}}, res) =>{

    let mail;
    let error;
   if(!subjse || !receiver || !content){
       res.sendStatus(400).send({
        message: 'You forgot something',
        service: 'Database Service',
        status: 400,
        payload: null
       });
   }
   // creating the new mail instance to save to DB
    const newmail = new Mail({
        subject,
        receiver,
        content
    })

  try {
      mail =await newmail.save();    
  } catch(err){
      error = err;
  }
  
  res.send({
    message: 'Got response from DB',
    service: 'Database Service',
    status: 200,
    payload: mail || err
   });
};

module.exports = server => {
    server.post('/mails',mailHandler )
}

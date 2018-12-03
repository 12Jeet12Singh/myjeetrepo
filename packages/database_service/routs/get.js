const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

/* module.exports = server =>{
server
.get('/',async (_,res)=> {
    res.send('Hello from the DB service');
    const m = new Mail({

        subject: 'hello Sub',
        receiver: 'jeet@gmail.com',
        content: 'hi there'
    });

    await m.save();
    res.send('worked');
})
.get('/test', (_,res)=> {
    const mails = Mail.find(err,(_,res)=>
    { 
        if(err)
        { console.log(err) }
        else
        {res.send(mails)}
    });
    
}); */


const pingHandler = (_,res)=>{
    res.send('healthy');
}

const mailHandler = (_,res)=>{
    let mails;
    let error;

    try{
        mails= Mail.find();
    }catch(err){
        error =err;
    }

   res.send({
       message: 'Got response from DB',
       service: 'Database Service',
       status: 200,
       payload: mails || error
   });
};

const singleMailHandler = async ({params:{id}}, res) => {
    let mails;
    let error;

    try{
        mail= await Mail.findOne({_id:id});
    }catch(err){
        error =err;
    }

   res.send({
       message: 'Got response from DB',
       service: 'Database Service',
       status: 200,
       payload: mails || error
   });
};

module.exports = server =>{
server
    .get('/', pingHandler)
    .get('/mails', mailHandler)
    .get('/mails/:id' , singleMailHandler);
}


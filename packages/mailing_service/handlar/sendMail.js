const {mailjet : {apiPublic,apiSecret}}= require('../config');
const Mailjet = require('node-mailjet').connect(apiPublic,apiSecret);

console.log('mail jet')

module.exports = async mail => {
    const request = await Mailjet.post('send').request({
        FromEmail : 'atver1221@gmail.com',
        FromName : 'Flo Sloot',
        Subject : mail.subject,
        'Text-part' : mail.connect,
        Recipients : [
            {
                Email : mail.receiver
            }
        ]
    })   
    console.log(request.body);
}
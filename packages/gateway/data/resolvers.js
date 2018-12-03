const axios = require('axios');
const { serviceDatabase : {port}} = require('../config');

const hostname='http://localhost';
const databaseURL = `${hostname}:${port}`;



// type Mail {
//   subject: String
//   receiver: String
//   content: String
//   _id: String
// }

const mockMails = [
  {
    subject: 'My first Email',
    receiver: 'test@test.com',
    content: 'hello world'
  },
  {
    subject: 'My second Email',
    receiver: 'test@test.com',
    content: 'hello world'
  },
  {
    subject: 'My third Email',
    receiver: 'test@test.com',
    content: 'hello world'
  }
];

const getMails = async ()=>{
  const mails =  (await axios.get('http://localhost:4000/mails')).data.payload;
  return mails;
};

const getSingleMails = async id =>{
  const mails =  (await axios.get(`http://localhost:4000/mails/${id}`)).data.payload;
  return mails;
};

const postSingleMail = async body=> {
  const postMail = (await axios.get(`http://localhost:4000/mails`, {...body})).data.payload;
return postMail;
}

const resolvers = {
  Query: {
    mails: () => getMails(),// mockMails,
    mail: (_, {id}) => getSingleMails(id)
  },
  Mutation: {
    mail: (_, args) => postSingleMail(args)
  }
};

  module.exports = resolvers;
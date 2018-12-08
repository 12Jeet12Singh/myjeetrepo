const path = require('path');
const basePath = path.join(__dirname ,'/packages');
// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/

module.exports = {
  apps : [
    { // First App
    name: 'Gateway service Graph QL',
    script: basePath+'/gateway/server.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
     env: {
      NODE_ENV: 'production',//'development',
      PORT:3000,
      SERVIC_DB_PORT:4000,
      Q_URI: 'amqp://swaupeon:VhXjT-P3WiSXPQp4B2unFYDnY74uqn2H@dinosaur.rmq.cloudamqp.com/swaupeon'
    } 
   /*  env_production: {
      NODE_ENV: 'production',
    } */
  },

  {   // Second App
    name: 'Database Service',
    script: basePath+'/database_service/server.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
     env: {
      NODE_ENV: 'production',//'development',
      PORT:4000
    } 
   /*  env_production: {
      NODE_ENV: 'production',
    } */
  },

  {   // Third APPL.
    name: 'Mailing Service',
    script: basePath+'/mailing_service/index.js',
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      MJ_API_PUBLIC='01248e2877dd0de67897adde089b6504',
      MJ_API_SECRET='a6c2093f793b1b799c75f48f24c64588',
      Q_URI: 'amqp://swaupeon:VhXjT-P3WiSXPQp4B2unFYDnY74uqn2H@dinosaur.rmq.cloudamqp.com/swaupeon'
    }
  }


]

  /* , deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  } */
};

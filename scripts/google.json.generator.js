const  config  = require('config');
const fs = require('fs');
const { decrypt }  = require('./encrypt.decrypt');

const obj = {
    type: config.get('google.type') ,
    project_id: config.get('google.project_id'),
    private_key_id: config.get('google.private_key_id'),
    private_key: decrypt(config.get('google.private_key')),
    client_email: config.get('google.client_email'),
    client_id: config.get('google.client_id'),
    auth_uri: config.get('google.auth_uri'),
    token_uri: config.get('google.token_uri'),
    auth_provider_x509_cert_url: config.get('google.auth_provider_x509_cert_url'),
    client_x509_cert_url: config.get('google.client_x509_cert_url')
}

var json = JSON.stringify(obj);

fs.writeFile('google.json', json, 'utf8', ()=> {

});

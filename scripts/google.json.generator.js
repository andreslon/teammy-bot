const  config  = require('config');
const fs = require('fs');

const obj = {
    type: config.get('google.type') ,
    project_id: config.get('google.project_id'),
    private_key_id: config.get('google.private_key_id'),
    private_key: `-----BEGIN PRIVATE KEY-----\n${config.get('google.private_key')}\n-----END PRIVATE KEY-----\n`,
    client_email: config.get('google.client_email'),
    client_id: config.get('google.client_id'),
    auth_uri: config.get('google.auth_uri'),
    token_uri: config.get('google.token_uri'),
    auth_provider_x509_cert_url: config.get('google.auth_provider_x509_cert_url'),
    client_x509_cert_url: config.get('google.client_x509_cert_url')
}
obj.private_key = obj.private_key.replace(/\\n/g, "\n");

var json = JSON.stringify(obj);

fs.writeFile('google.json', json, 'utf8', ()=> {

});

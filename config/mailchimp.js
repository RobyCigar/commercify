const Mailchimp = require('mailchimp-api-v3');

const keys = require('./keys');

console.log(keys)
const { key } = keys.mailchimp;
const mailchimp = new Mailchimp(key);

console.log(key)

const subscribeToNewsletter = email => {
  return new Promise((resolve, reject) => {
    mailchimp
      .post(`lists/members`, {
        email_address: email,
        status: 'subscribed'
      })
      .then(result => {
        console.log('res', result);
        resolve(result);
      })
      .catch(error => {
        console.log('err', error)
        reject(error);
      });
  });
};

subscribeToNewsletter('rabihutomo11@gmail.com')
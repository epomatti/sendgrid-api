require('dotenv').config()

const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

const var1key = process.env.VARIABLE1_KEY
const var1val = process.env.VARIABLE1_VALUE

const request = {
  method: 'POST',
  url: '/v3/mail/send',
  body: {
    from: {
      email: process.env.FROM
    },
    personalizations: [
      {
        to: [
          {
            email: process.env.TO
          }
        ],
        dynamic_template_data: {
          [var1key]: var1val
        }
      }
    ],
    template_id: process.env.TEMPLATE_ID
  }

};

client.request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
  })

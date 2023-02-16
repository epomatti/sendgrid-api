# sendgrid-api

For integration, you'll need a sender. Options are:

- Domain (recommended for production)
- Single Sender (quick start)

Follow the process accordingly for your choice.

Create the `.env` file:

```sh
SENDGRID_API_KEY="<KEY>"
FROM="<SENDER EMAIL>"
TO="<RECIPIENT EMAIL>"
TEMPLATE_ID="<ID>"
```

Install and run the code:

```
npm install
node app.js
```

To send email via dynamic template:

```
node client.js
```

### Reference

- [Dynamic Tempalte API](https://docs.sendgrid.com/api-reference/mail-send/mail-send)
- [Dynamic Template API Guide](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates)
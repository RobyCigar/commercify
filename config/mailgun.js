const keys = require("./keys");
const {
  privateApiKey,
  publicValidationKey,
  HTTPWebhook,
  sender,
} = keys.mailgun;
const Mailgun = require("mailgun.js");
const formData = require("form-data");

const mailgun = new Mailgun(formData);

// API CONFIGURATION
const mg = mailgun.client({
  username: HTTPWebhook,
  key: privateApiKey,
  public_key: publicValidationKey,
});

// CREATE MESSAGE FUNCTION
const sendEmail = (recipient, message) => {
  return new Promise((resolve, reject) => {
    const data = {
      from: `MERN Store! <${sender}>`,
      to: recipient,
      subject: message.subject,
      text: message.text,
    };

    mg.messages
      .create("my website url", data)
      .then((msg) => console.log('success', msg))
      .catch((err) => console.log('error', err));
  });
};

// CALL THE FUNCTION
sendEmail("recipient@gmail.com", {
  subject: "halo",
  text: "<h1>OHIYO GOZAIMASU</h1>",
});

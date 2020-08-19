const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log({ SENDGRID_API_KEY: process.env.SENDGRID_API_KEY });

const MAIL = {
  REGISTRATION: {
      from: 'jorik889982@gmail.com',
      subject: 'Registration email',
      text: 'You were registered',
      html: '<strong>Hi, welcome to our site</strong>',
  }
};

const sendMail = async email => {
    const mail = {
        ...MAIL.REGISTRATION,
        to: email,
    }

    let res;

    try {
        res = await sgMail.send(mail);
    } catch (err) {
        return false;
    }

    return res;
};

module.exports = {
    sendMail,
}
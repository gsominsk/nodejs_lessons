const nodemailer = require('nodemailer');

const { EMAIL_USER, EMAIL_PASSWORD } = process.env;

console.log({ EMAIL_USER, EMAIL_PASSWORD });

const MAIL = {
    REGISTRATION: {
        from: 'jorik889982@gmail.com',
        subject: 'Registration email',
        html    : (
            '<td align="right">'+
            '<table border="0" cellpadding="0" cellspacing="0" style=\"width: 75%;max-width:600px;display: block;margin: 0 auto;height: 100%;\">'+
            '<tbody style="width: 100%;display: block;margin: 0 auto; background: #557780;padding: 10px;">'+
            '<tr>'+
            '<td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>'+
            '<td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>'+
            '<td>'+
            '<h1 style="margin: 0; color: #fff;">Test email</h1>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '<tbody style="display:block;height: 200px; background: #EBE1E2;width:100%;padding:10px;padding-top:100px;">'+
            '<tr style="width: 100%;display: block;text-align: -webkit-center;">'+
            `<td><h2 style="font-weight: 800;margin:0;">Test email</h2></td>`+
            '</tr>'+
            '<tr style="width:100%;display:block;text-align:-webkit-center;text-align:center;">'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'
        )
    }
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secureConnection: false,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendEmail = email => {
    const mailOptions = {
        ...MAIL.REGISTRATION,
        to: email,
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info.response)
            }
        });
    });
};


module.exports = {
    sendEmail
}
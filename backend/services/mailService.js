const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../.env" });

module.exports = async ({ from, to, subject, text, html }) => {
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      // user: user, // generated ethereal user
      // pass: pass, // generated ethereal password
      // user: "talimul11bari@gmail.com",
      // pass: "CV4PnJLzDHKGTY6f",
      user: process.env.REACT_APP_MAIL_USER,
      pass: process.env.REACT_APP_MAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `Edumate <${from}>`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
};

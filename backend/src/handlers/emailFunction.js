require("dotenv").config();
const nodemailer = require("nodemailer");

function sendEmail(nom, prenom, email, text) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.MY_EMAIL}`,
        pass: `${process.env.MY_PASSWORD}`,
      },
    });

    const mailConfigs = {
      from: `${process.env.MY_EMAIL}`,
      to: `${process.env.MY_EMAIL_PERSO}`,
      subject: "Message d'un admirateur sur le net",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>OTP Email Template</title>
      </head>
      <body>
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
          <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom 1px solid #eee">
                <p>Nom : ${nom}</p>
                <p>Prénom : ${prenom}</p>
                <p>Email : ${email} </p>
                <p>Message : ${text} </p>
            </div>
          </div>
        </div>
      </body>
      </html>
      `,
    };
    transporter.sendMail(mailConfigs, (error) => {
      if (error) {
        return reject(new Error({ message: "An error as occured" }));
      }
      return resolve({ message: `Email sent successfuly` });
    });
  });
}

module.exports = {
  sendEmail,
};

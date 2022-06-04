const user_name = "batmantest34@gmail.com"
const password  = "gfkzptyyndcpcgnl"
const demo = "rohit3215@yopmail.com"

const nodeMailer = require("nodemailer")

let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user_name,
      pass: password,
    },
});

let mailOptions = {
    from: user_name,
    to: demo,
    subject: 'Nodemailerdemo',
    text: 'testing'
};


const mailer = transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

module.exports = {mailer}


const nodemailer = require("nodemailer");

export default async function contactApi(req, res) {
  const { firstName, subject, email, message, token } = req.body;

  if (!subject || !message || !token) {
    res.status(400).json({ message: "Please fill all fields." });
    return;
  }

  const response = await fetch(process.env.CAPTCHA_VERIFICATION + token);
  const responseBody = await response.json();

  if (responseBody.success) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_SEND_TO,
      subject: subject,
      text: firstName + " " + message + " " + email,
    });

    res.status(200).json({
      message: "Thank you for your request. I will contact with you, soon",
    });
  } else {
    res.status(200).json({
      message: "Sorry, something went wrong.",
    });
  }

  res.end();
}

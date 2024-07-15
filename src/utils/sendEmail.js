import { createTransport } from "nodemailer";
import {emailTemplate} from "./emailTemplate.js";

export default async function sendEmail(email) {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "noteappiti2@gmail.com",
      pass: "zrvb dbxv dxmr snja",
    },
  });

  const info = await transporter.sendMail({
    from: '"NoteApp iti👻" <noteappiti2@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: emailTemplate(email), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

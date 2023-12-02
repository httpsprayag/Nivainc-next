import { contactTemplate } from "@/templates/contactTemplate";
import nodemailer from "nodemailer";

export async function POST(request) {
  const EMAIL_SERVICE_PROVIDER = "gmail";
  const values = await request.json();

  const { name, email, mobile, message } = values;
  const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE_PROVIDER,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const emailOptions = {
    to: process.env.NEXT_PUBLIC_EMAIL,
    from: email,
    subject: "A new Querry has arrived",
    html: contactTemplate({ name, email, mobile, message }),
  };

  const emailInfo = transporter.sendMail(emailOptions, function (error, _info) {
    if (error) {
      console.log("errorr while sending email : ", error);
      return Response.json({ mesaage: "something went wrong" });
    } else {
      return Response.json({ mesaage: "Email Sent Successfully" });
    }
  });
  return Response.json({ message: "success" });
}

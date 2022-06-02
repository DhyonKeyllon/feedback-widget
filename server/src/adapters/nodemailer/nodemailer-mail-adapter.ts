import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "./../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f57f45809cce1",
    pass: "cbe76f1b43950e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback <equipe@feedbackwidgetdk.com>',
      to: 'Dhyon Keyllo <dhyon.kpm@hotmail.com>',
      subject,
      html: body
    })
  };   
}
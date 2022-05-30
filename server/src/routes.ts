import express from "express";
import nodemailer from "nodemailer";

import { prisma } from "./prisma";

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f57f45809cce1",
    pass: "cbe76f1b43950e"
  }
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  await transport.sendMail({
    from: 'Equipe Feedback <equipe@feedbackwidgetdk.com>',
    to: 'Dhyon Keyllo <dhyon.kpm@hotmail.com>',
    subject: 'Novo feedback no sistema',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })
  
  res.status(201).json({ data: feedback });
});
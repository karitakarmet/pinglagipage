import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

const TIME_LABELS: Record<string, string> = {
  now: 'Niipea kui võimalik',
  morning: 'Hommikul (9–12)',
  afternoon: 'Pärastlõunal (12–15)',
  evening: 'Õhtul (15–18)',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, time, message } = req.body as {
    name: string;
    phone: string;
    time: string;
    message: string;
  };

  if (!phone) return res.status(400).json({ error: 'Phone required' });

  try {
    await transporter.sendMail({
      from: `Pinglagi <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      subject: `Tagasihelistamise päring – ${phone}`,
      html: `
        <h2>Uus tagasihelistamise päring</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Nimi:</strong></td><td>${name || '–'}</td></tr>
          <tr><td><strong>Telefon:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Sobiv aeg:</strong></td><td>${TIME_LABELS[time] ?? time}</td></tr>
          <tr><td><strong>Sõnum:</strong></td><td>${message || '–'}</td></tr>
        </table>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}

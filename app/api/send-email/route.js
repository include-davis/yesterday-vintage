import nodemailer from "nodemailer";

export async function POST(request) {
    const {name, email, phone} = await request.json();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Yesterday Vintage Website" <${process.env.SMTP_USER}>`,
        to: "yesterdayvintagetest@gmail.com",
        subject: "New Signup",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    });

    return new Response(null, { status: 200});
}
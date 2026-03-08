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
        from: `"Yesterday Rewards" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "[IMPORTANT] Yesterday Rewards Signup",
        text: `Welcome to Yesterday Rewards ${name}! Thank you for joining our rewards program!\nBelow is your submitted user information:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    });

    return new Response(null, { status: 200});
}
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "edigaliano@gmail.com",
        pass: "bxqdayvdiesuzucm", //Foi gerado uam "senha do app"
    }
});

transporter.sendMail({
    from: "Edi Galiani <edigaliano@gmail.com>",
    to: "galianoweb@gmail.com",
    subject: "Oi, sou Edi Galiani",
    text: "Muito bom esse tal de Nodemailer!",
    html: ""
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})
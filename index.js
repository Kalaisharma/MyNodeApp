const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
const formrouters=require("./Routers/formrouters")
app.use(express.json())
app.use('/myAdmin',formrouters)
app.listen(8080,()=>{
    console.log("Server is running on the port 8080"); 
})
// const nodemailer = require('nodemailer');

// // Create a transporter object
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kalaisharma05052003@gmail.com',
//     pass: 'anpf pgew djxu ntxi'
//   }
// });

// // Define the email options
// const mailOptions = {
//   from: 'kalaisharma05052003@gmail.com',
//   to: 'kalaisharma05@gmail.com',
//   subject: 'Hello from Nodemailer',
//   text: 'This is a test email sent using Nodemailer!'
// };

// // Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

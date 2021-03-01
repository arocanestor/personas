const nodemailer = require("nodemailer");
const evangelio =  require('./evan')

const envio =  async(email) =>{     
  const ev = await evangelio();      
  let info =  trans.sendMail({
    from: 'importante', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `${ev.title}`, // plain text body
    html: `<p>${ev}</p>`, // html body
  });
   await trans.sendMail(info, (err,info) =>{
    if(err){
      //return status(200).send(error.message);      
      return err
    } else {
      //console.log('email enviado')
      //return status(200).jsonp(req.body)
      return ('email enviado')
    }
  })
  
}



var trans =  nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'lurline.hudson75@ethereal.email', // generated ethereal user
    pass: 'MqVWny5yyKjKKBw1g6', // generated ethereal password
  },
});

module.exports =  envio;
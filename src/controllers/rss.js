let Parser = require('rss-parser');
let parser = new Parser();

const nodemailer = require("nodemailer");

const envio =  async(email) =>{     
  return await evan ;
  /*
  const item = rss()  
  let info =  trans.sendMail({
    from: 'importante', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `${item.title}`, // plain text body
    html: `<p>${item}</p>`, // html body
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
  */
}


const evan = async() => {
  const feed = await parser.parseURL('https://evangelizo.org/rss/v2/evangelizo_rss-sp.xml');     
  var fecha = new Date();  
  fecha = fecha.toISOString().split('T');
  f = `${fecha[0]} - EVANGELIUM`;
  feed.items.forEach(item => {      
    if(item.guid == f){        
         return item
    }
  });

};

var trans =  nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'kurtis.ward@ethereal.email', // generated ethereal user
    pass: '8MFXKW95YTVny5A4SB', // generated ethereal password
  },
});

module.exports =  envio;
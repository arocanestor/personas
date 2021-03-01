let Parser = require('rss-parser');
let parser = new Parser();

async function evan() {
    let e =''
  let feed = await parser.parseURL('https://evangelizo.org/rss/v2/evangelizo_rss-sp.xml');  
  var fecha = new Date();  
    fecha = fecha.toISOString().split('T');
    f = `${fecha[0]} - EVANGELIUM`;
  feed.items.forEach(item => {
    if(item.guid == f){                
            e = item
    }
  });
  return new Promise((resolve, reject) =>{
            resolve(e)
        })
};

/*const evan = async() => {
    const feed = await parser.parseURL('https://evangelizo.org/rss/v2/evangelizo_rss-sp.xml');     
    var fecha = new Date();  
    fecha = fecha.toISOString().split('T');
    f = `${fecha[0]} - EVANGELIUM`;
    feed.items.forEach(item => {      
      if(item.guid == f){        
            console.log(item)
           return item
      }
    });
  
  };*/

  module.exports  = evan;
  

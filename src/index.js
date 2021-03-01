const express = require('express');
var cors = require('cors')

require('./controllers/rss')
const app = express();


 
// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(cors())
// Routes
app.use(require('./routes/employees'));
//app.use(require('./controllers/rss'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

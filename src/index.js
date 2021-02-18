const express = require('express');
var cors = require('cors')

const app = express();


// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(cors())
// Routes
app.use(require('./routes/employees'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

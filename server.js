const express = require('express');
const app = express();

app.set('port', process.env.NODE_ENV || 'development');
app.use(express.static('public'));

app.listen(app.get('port'), () => console.log(`You are now running PW8ball on localhost:${app.get('port')}!`));

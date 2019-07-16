const express = require('express');
const session = require('express-session');
const app = express();
const msgCtrl = require('./messagesCtrl')
require('dotenv').config();
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14  //twoweeks
    }
}))



app.get('/api/messages', msgCtrl.getAllMessages);
app.post('/api/message', msgCtrl.createMessage);
app.get('/api/messages/history', msgCtrl.history)













const port = process.env.SERVER_PORT;
app.listen(port, () => console.log(`server listening on port ${port}`))
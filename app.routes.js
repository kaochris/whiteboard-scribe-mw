const app = require('express')();
const { Router } = require('express');
const bodyParser = require('body-parser');

const emailRouter = Router();

emailRouter.post('/email', (req, res, next) => {
    console.log('Incoming email request');
    const email = req.body.email;

    if(email) {
        //send email
        res.status(200).json({message: `email sent to ${email}, but not really`});
    }
    else {
        res.status(400).json({message: `email missing from request body`});
    }
});


const cameraRouter = Router();

cameraRouter.post('/camera', (req, res, next) => {
    console.log('Incoming camera request');
    //Take a picture
    res.status(200).json({message: 'this does nothing right now'});
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(emailRouter);
app.use(cameraRouter);

module.exports = app;

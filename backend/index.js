const express = require('express')
const cors = require('cors');
const app = express()
const Hotel = require('./Models/Hotel');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const http = require('http');
const server = http.createServer(app);
const User = require('./Models/User')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gotravell:alya@cluster0.gmvnank.mongodb.net/gotarvelmern?retryWrites=true&w=majority').then(res => {
    console.log('connected')
})

app.post('/signup', (req, res) => {
    let data = req.body.data;
    const user = new User({
            name: data.name,
            location: data.location,
            email: data.email,
            password: data.password,
        })
        // check if user exist ;
    User.find({ name: data.name }).then(succ => {
        if (succ.length > 0) {
            res.send(false);
        } else {
            res.send(true);
            user.save();
        }
    })


})
app.post('/login', (req, res) => {
    let data = req.body.data;
    User.find({ $and: [{ name: data.username }, { password: data.password }] }).then(succ => {
        if (succ.length > 0) res.send(true);
        else res.send(false);
    })
})
app.post('/search', (req, res) => {
    let search_value = req.data;
    Hotel.find({ name: { $regex: e, $options: 'i' } }).limit(5).then(succ => {
        if (succ.length > 0) res.send(succ);
        else res.send(false);
    });

})
server.listen(3001, () => {
    console.log('server running')
})
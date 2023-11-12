const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
const Message = require('../models/message')
mongoose.set("strictQuery", false)

const mongoDB = process.env.SECRET_KEY
main().catch((err) => console.log(err));

  
async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
}

async function messageCreate(author, message, date) {
  const messagedetail = {author: author, message: message, date: date}
  const messageFinal = new Message(messagedetail)

  await messageFinal.save()
  console.log(`Sent message: ${message} by ${author}`)
}

async function getMessages() {
  try { 
    const messages = await Message.find().sort({date: -1})
    return messages
  } catch(err) {
    console.log(err)
  }
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await getMessages()
  res.render('index', { title: 'Mini Message Board', messages: messages});
});

router.post('/', (req, res) => {
  res.redirect('/new')
})

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New form'})
})

router.post('/new', async  (req, res) => {
  await messageCreate(req.body.author, req.body.message, new Date())
  res.redirect('/')  
})

router.post

module.exports = router;

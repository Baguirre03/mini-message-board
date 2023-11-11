const express = require('express');
const router = express.Router();
const mongoose = requrie("mongoose")
const Message = require('./models/message')
mongoose.set("strictQuery", false)

const mongoDB = process.env.SECRET_KEY
main().catch((err) => console.log(err));

const messages = []

async function messageCreate(author, message, date) {
  const messagedetail = {author: author, message: message, date: date}
  const message = new Message(messagedetail)

  await message.save()
  messages.push(message)
  console.log(`Sent message: ${message} by ${author}`)
}

/* GET home page. */
router.get('/', function(req, res, next) {
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

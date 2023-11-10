const express = require('express');
const router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date()
  }
]


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

router.post('/new', (req, res) => {
  messages.push({text: req.body.message, user: req.body.name, added: new Date()})
  res.redirect('/')  
})

router.post

module.exports = router;

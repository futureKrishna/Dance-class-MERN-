const express = require("express");
const path = require("path"); 
const app = express();
const port = 8000;
const bodyParser = require('body-parser')
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}));


// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('index.pug', params);
})

app.get('/contact', (req, res)=>{ 
    res.status(200).render('contact.pug');
})



app.post('/contactForm' , (req, res)=>{
   
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  const contact = req.body.number;

  console.log(name , email , age , contact);
  res.status(200).render('index.pug');

})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
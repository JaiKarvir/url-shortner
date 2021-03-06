const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
var app = express();

var mongoDb = 'mongodb+srv://admin:admin@local-library-db.sfuvd.mongodb.net/urlShortner?retryWrites=true&w=majority'
mongoose.connect(mongoDb,{ 
    useNewUrlParser: true ,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.get('/', async (req,res)=>{
    const shortUrls = await ShortUrl.find()
    res.render('index',{shortUrls: shortUrls})
})

app.post('/shortUrls',async (req,res)=>{
  const shortUrlFound =  await ShortUrl.findOne({full: req.body.fullUrl});
        if(shortUrlFound){
            res.redirect('/');
        }else{
            await ShortUrl.create({full: req.body.fullUrl});
            res.redirect('/')
        }
})

app.get('/:shortUrl', async (req,res)=>{
   const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})
   if(shortUrl == null){
    return res.sendStatus(404);
   }

   shortUrl.clicks++;
   shortUrl.save();

   res.redirect(shortUrl.full);
})
app.listen(process.env.PORT || 5000);
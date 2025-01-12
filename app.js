require('dotenv').config();
const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT;
const cookieParser=require('cookie-parser');

const Blog=require('./models/blog');
const userRoute=require('./routes/user');
const blogRoute=require('./routes/blog');

app.use(express.static('public'));

const mongoose=require('mongoose');
const checkForAuthenticationCookie = require('./middlewares/authentication');

// console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'views'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));

app.get('/',async function(req,res){
    const allBLogs=await Blog.find({}).populate('createdBy');
    return res.render('home',{user:req.user,blogs:allBLogs});
});

app.use("/user",userRoute);
app.use('/blog',blogRoute);

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
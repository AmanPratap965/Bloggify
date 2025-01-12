const { Router } = require("express");
const User = require("../models/user");
const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});
router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signup", async(req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  await User.create({ fullName, email, password });
  return res.redirect("/");
});

router.post("/signin", async(req, res) => {
  const {email,password}=req.body;
   try{
    const token=await User.matchPasswordAndGenerateToken(email,password);
    return res.cookie('token',token).redirect('/');
   }
   catch{
    return res.render('signin',{Error:'Incorrect email or password'});
   }
});

router.get('/logout',async(req,res)=>{
      res.clearCookie('token').redirect('/');
})

module.exports = router;
